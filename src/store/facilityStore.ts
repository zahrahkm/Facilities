import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Facility } from '../types/facility';

type FacilityState = {
  facilities: Facility[];
  addFacility: (facility: Omit<Facility, 'id'>) => void;
  updateFacility: (id: string, facility: Partial<Facility>) => void;
  deleteFacility: (id: string) => void;
  getFacilityById:(id:string)=>Facility | undefined;
 
};

export const useFacilityStore = create<FacilityState>()(
  persist(
    (set,get) => ({
      facilities: [],

      addFacility: (facility) => {
        set((state) => {
          const isFirst = state.facilities.length === 0;
          const newFacility: Facility = {
            ...facility,
            id: crypto.randomUUID(),
            isDefault: isFirst ? true : facility.isDefault || false,
          };
          //Shallow merge to avoid mutating original arr
          let updatedFacilities = [...state.facilities];

          if (newFacility.isDefault && !isFirst) {
            // Unset isDefault from others
            updatedFacilities = updatedFacilities.map((f) => ({
              ...f,
              isDefault: false,
            }));
          }

          updatedFacilities.push(newFacility);
          return { facilities: updatedFacilities };
        });
      },
      
      updateFacility: (id, updatedFacility) => {
        set((state) => {
          const currentFacilities = state.facilities;
          const isUpdatingToDefault = updatedFacility.isDefault === true;
           //Do not need to shallow merge because map create new array
          const updatedFacilities = currentFacilities.map((facility) => {
            if (facility.id === id) {
              return { ...facility, ...updatedFacility };
            }

            if (isUpdatingToDefault) {
              // Unset isDefault for others if one is being promoted
              return { ...facility, isDefault: false };
            }

            return facility;
          });

          // Ensure one default remains
          const hasDefault = updatedFacilities.some((f) => f.isDefault);
          if (!hasDefault && updatedFacilities.length > 0) {
            updatedFacilities[0].isDefault = true;
          }

          return { facilities: updatedFacilities };
        });
      },
      deleteFacility: (id) => {
        set((state) => {
          const facilities = [...state.facilities];
          const facilityToDelete = facilities.find((f) => f.id === id);
          const remainingFacilities = facilities.filter((f) => f.id !== id);

          if (facilityToDelete?.isDefault && remainingFacilities.length > 0) {
            // Make first one default
            remainingFacilities[0].isDefault = true;
          }

          return { facilities: remainingFacilities };
        });
      },
      getFacilityById: (id) => {
        return get().facilities.find((f) => f.id === id);
      },

    }),
    {
      name: 'facility-storage',
    }
  )
);

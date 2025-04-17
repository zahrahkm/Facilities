import { create } from "zustand";
import { Facility } from "../types/facility";



type FacilityState={
    facilities: Facility[],
    addFacility:(facility:Omit<Facility,'id'>)=>void
}



export const useFacilityStore=create<FacilityState>(    
    (set) => ({
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
    })
)
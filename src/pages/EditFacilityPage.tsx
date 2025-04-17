import { useNavigate, useParams } from 'react-router-dom';
import { useFacilityStore } from '../store/facilityStore';
import { Facility } from '../types/facility';
import { FormContainer } from '../components/form/FacilityFormContainer';

export const EditFacilityPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const getFacilityById = useFacilityStore((state) => state.getFacilityById);
  const updateFacility = useFacilityStore((state) => state.updateFacility);

  const facility = id ? getFacilityById(id) : undefined;

  if (!facility) {
    return <div>Facility not found</div>;
  }

  const handleSubmit = (data: Partial<Facility>) => {
    updateFacility(facility.id, data);
    navigate('/');
  };

  return (
    <FormContainer label="Edit Facility" onSubmit={handleSubmit} submitLabel="Update Facility" data={facility} />
  );
};

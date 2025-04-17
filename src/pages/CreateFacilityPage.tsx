import { useNavigate } from "react-router-dom";
import { FormData } from "../components/form/FacilityForm";
import { useFacilityStore } from "../store/facilityStore";
import { FormContainer } from "../components/form/FacilityFormContainer";


export const CreateFacility = () => {
  const navigate = useNavigate();
  const { addFacility } = useFacilityStore();

  const handleSubmit = (data: FormData) => {
    addFacility(data);
    console.log(data)
    navigate('/');
  };

  return (
    <FormContainer label="Create a New Facility" onSubmit={handleSubmit} submitLabel="Create Facility" />
  );
};
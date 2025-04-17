import { useNavigate } from "react-router-dom";
import { getCreatePageUrl } from "../utiles";
import { Button } from "../components/Button";

export const FacilitiesListPage = () => {
  const navigate = useNavigate();
  const handleCreate = () => navigate(getCreatePageUrl());
  return (
    <div className=" flex flex-col gap-[10px] py-4">
        <div className="flex justify-end items-center mb-1">
          <Button onClick={handleCreate}>Create Facility</Button>
        </div>
    </div>
  )
}
  
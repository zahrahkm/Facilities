import { Routes, Route } from "react-router-dom";
import { RootLayout } from "../components/layout/RootLayout";
import { FacilitiesListPage } from "../pages/FacilitiesListPage";
import { CreateFacility } from "../pages/CreateFacilityPage";
import { EditFacilityPage } from "../pages/EditFacilityPage";

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<FacilitiesListPage />} />
      <Route path="/create" element={<CreateFacility />} />
      <Route path="/edit/:id" element={<EditFacilityPage />} />
    </Route>
  </Routes>
);

export default RoutesComponent;
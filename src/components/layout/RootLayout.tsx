import { Outlet } from "react-router-dom";
import { HeaderBar } from "./HeaderBar";


export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-mainBackground flex flex-col">
      <HeaderBar />
      <main className="container mx-auto px-4 py-5">
        <Outlet />
      </main>
    </div>
  );
};
import { Outlet } from "react-router-dom";
import { HeaderBar } from "./HeaderBar";


export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-mainBackground flex flex-col gap-8">
      <HeaderBar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
};
import { Outlet } from "react-router-dom";
import { Header } from "../components/pages/Header";
import { Footer } from "../components/pages/Footer";
import { NavMenu } from "../components/NavMenu";

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text transition-colors duration-300">
      <Header />

      <main className="flex-1 overflow-auto bg-background w-full sm:max-w-[540px] sm:mx-auto px-0 sm:px-0 pb-16">
        <Outlet />
      </main>

      <Footer />
      <NavMenu />
    </div>
  );
}

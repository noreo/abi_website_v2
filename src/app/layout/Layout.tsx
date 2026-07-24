import { Outlet, ScrollRestoration } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
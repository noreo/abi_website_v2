import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./routes";
import { CookieConsent } from "./components/CookieConsent";
import { FaviconComponent } from "./components/FaviconComponent";

export default function App() {
  return (
    <HelmetProvider>
      <FaviconComponent />
      <RouterProvider router={router} />
      <CookieConsent />
    </HelmetProvider>
  );
}
import { createBrowserRouter } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Approach from "./pages/Approach";
import Therapy from "./pages/Therapy";
import Deuil from "./pages/Deuil";
import Neurodiversity from "./pages/Neurodiversity";
import RelationConflictuelle from "./pages/RelationConflictuelle";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "approche", Component: Approach },
      { path: "therapie", Component: Therapy },
      { path: "therapie/deuil", Component: Deuil },
      { path: "therapie/neurodiversite", Component: Neurodiversity },
      { path: "therapie/relation-conflictuelle", Component: RelationConflictuelle },
      { path: "temoignages", Component: Testimonials },
      { path: "a-propos", Component: About },
      { path: "contact", Component: Contact },
      { path: "legal", Component: Legal },
      { path: "faq", Component: FAQ },
      { path: "*", Component: NotFound },
    ],
  },
]);
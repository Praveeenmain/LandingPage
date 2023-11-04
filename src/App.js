import React from "react";
import ReactDOM from "react-dom";
import { useMediaQuery } from "react-responsive";
import { LandingPageDesktop } from "./components/LandingPageDesktop";
import { LandingPageMobile } from "./components/LandingPageMobile";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return <>{isMobile ? <LandingPageMobile /> : <LandingPageDesktop />}</>;
};

export default App; // Keep only one export default statement

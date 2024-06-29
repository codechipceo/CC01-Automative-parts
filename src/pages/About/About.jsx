import { Footer } from "../../components/Footer/Footer";
import { HeaderTwo } from "../../components/Header/HeaderTwo";
import { AboutSection } from "../Home/AboutSection";
import { AboutCompany } from "./AboutCompany";
import { AboutOwner } from "./AboutOwner";

export const About = () => {
  return (
    <div>
      <HeaderTwo pageName={"About Us"} />
      <AboutSection />
      <AboutCompany />
      <AboutOwner />

      <Footer />
    </div>
  );
};

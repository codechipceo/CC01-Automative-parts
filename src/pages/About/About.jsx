import { Footer } from "../../components/Footer/Footer";
import { HeaderTwo } from "../../components/Header/HeaderTwo";
import { AboutSection } from "../Home/AboutSection";

export const About = () => {
  return (
    <div>
      <HeaderTwo pageName={"About Us"} />
      <AboutSection />

      <Footer />
    </div>
  );
};

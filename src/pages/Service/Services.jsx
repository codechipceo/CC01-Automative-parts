import { services } from "../../Data/serviceData";
import { Footer } from "../../components/Footer/Footer";
import { HeaderTwo } from "../../components/Header/HeaderTwo";
import { Testimonials } from "../Home/Testimonials";
import { ServiceDetailCard } from "./ServiceDetailCard";

export const Services = () => {
  return (
    <div>
      <HeaderTwo pageName={"Our Services"} />
      {services.map((eachService, i) => {
        const { img, heading, para, secondPara } = eachService;
        return (
          <ServiceDetailCard
            isReverse={i % 2 === 0 ? true : false}
            key={i}
            image={img}
            title={heading}
            secondPara={secondPara}
            description={para}
          />
        );
      })}
      <Testimonials />
      <Footer />
    </div>
  );
};

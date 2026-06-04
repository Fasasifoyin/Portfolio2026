import ImageFacts from "./ImageFacts";
import RightContent from "./RightContent";
import Headings from "../Headings";

const About = () => {
  return (
    <section id="about" className="py-28 relative">
      <Headings number="01" section="about_me" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <ImageFacts />
        <RightContent />
      </div>
    </section>
  );
};

export default About;

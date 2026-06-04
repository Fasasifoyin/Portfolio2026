import Container from "../Container";
import Headings from "../Headings";
import Form from "./Form";
import Info from "./Info";

const Contact = () => {
  return (
    <section id="contact" className="py-28 relative bg-surface">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />
      <Container>
        <Headings number="05" section="contact" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Info />
          <Form />
        </div>
      </Container>
    </section>
  );
};

export default Contact;

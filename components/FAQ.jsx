import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <section
      id="faqs"
      className="rounded-3xl font-outfit border-2 mt-16 pb-8 w-8/12"
    >
      <p className="text-2xl my-3 pt-2 ml-8 w-5/6 border-b-2 pb-3 font-medium">
        FAQs
      </p>
      <div className="mx-7">
        <Accordion>
          <div className="pb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Where does the money go?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </div>
          <div className="pb-3">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Where does the money go?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </div>

          <div className="pb-3">
            <Accordion.Item eventKey="2">
              <Accordion.Header>Where does the money go?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </div>
          <div className="pb-3">
            <Accordion.Item eventKey="3">
              <Accordion.Header>Where does the money go?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </div>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

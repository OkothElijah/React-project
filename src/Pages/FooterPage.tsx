import SubscribeForm from "../components/SubscribeForm";

const FooterPage = () => {
  return (
    <section className="mt-1 contact-container">
      <div className="d-flex flex-column justify-content-center">
        <div className="fff rounded-1  " style={{ height: "20px" }}></div>
        <div
          className=" d-flex bg-secondary contanc-content"
          style={{
            zIndex: "1",
            height: "15em",
          }}
        >
          <div
            className="content d-flex justify-content-around"
            style={{ width: "60%" }}
          >
            <div
              className=" mt-3 text-start"
              style={{ width: "13em", height: "10em" }}
            >
              <div className="mb-4  ">
                <h5 className="text-white ">Programs</h5>
              </div>
              <p className="text-light">Digital Insights Exchange</p>
              <p className="text-light" style={{ marginTop: "-7px" }}>
                Interactive Reader Hub
              </p>
              <p className="text-light" style={{ marginTop: "-7px" }}>
                Guest Author Spotlight
              </p>
            </div>
            <div
              className=" mt-3 text-start"
              style={{ width: "13em", height: "10em" }}
            >
              <div className="mb-4 ">
                <h5 className="text-white ">Service</h5>
              </div>
              <p className="text-light">Quick Write</p>
              <p className="text-light" style={{ marginTop: "-7px" }}>
                Article Pro
              </p>
              <p className="text-light" style={{ marginTop: "-7px" }}>
                Content Craft
              </p>
            </div>
            <div
              className=" mt-3 text-start "
              style={{ width: "13em", height: "10em" }}
            >
              <div className="mb-4 ">
                <h5 className="text-white ">Contact</h5>
              </div>
              <p className="text-light">Connect with Us</p>
              <p className="text-light" style={{ marginTop: "-7px" }}>
                Get in Touch
              </p>
              <p className="text-light" style={{ marginTop: "-7px" }}>
                Customer Support
              </p>
            </div>
          </div>

          <div className=" mt-3" style={{ height: "12em" }}>
            <div className="mb-4 ">
              <h5 className="text-white">Newsletter</h5>
            </div>
            <SubscribeForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterPage;

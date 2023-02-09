import React from "react";
import styles from "./style";
import {
  NavBar,
  Hero,
  Instructions,
  AboutUs,
  Features,
  Tools,
  SignupPage,
} from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/contactUs";

const App = () => {
  return (
    
    <div className="bg-darkpurple w-full overflow-hidden">
      <div
        className={`${styles.paddingX} ${styles.flexCenter}`}
        style={{ padding: 0, margin: 0 }}
      >
        <div
          className={`${styles.boxWidth} `}
          style={{
            borderBottom: "0.1em solid #30293a",
            backgroundColor: "#1a1327",
          }}
        >
          <NavBar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX}  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutUs />
          <Instructions />
        </div>
      </div>

      <div className={`${styles.paddingX}  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Features />
          <ContactUs />
          <Tools />
          <SignupPage />
        </div>
      </div>
    </div>
  );
};

export default App;

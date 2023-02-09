import styles, { layout } from "../style";
import { features } from "../constants";
import comsats from "../assets/comsats.jpg";
import { GiGamepad } from "react-icons/gi";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={` p-6 rounded-[10px] max-w-[100%] min-h-[100%] card cardbox  ${
      index !== features.length - 1 ? "mb-0" : "mb-0"
    } `}
  >
    <div className={`w-[64px] h-[64px]  ${styles.flexCenter} `}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] " />
    </div>

    <div className=" flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-bold  text-[18px] leading-[23.4px] mb-2 card-title">
        {title}
      </h4>
      <p className="font-poppins font-normal  text-[14px] leading-[24px] card-text">
        {content}
      </p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features">
      <div className="row mt-4">
        <h2 className={styles.heading2}>Features</h2>
      </div>

      {/* <div className={layout.sectionInfo}>
        <img src={comsats}></img>
      </div> */}
      <div className="container">
        <div className="row mt-3">
          {features.map((feature, index) => (
            <div className="col-md-4 my-3">
              <FeatureCard key={feature.id} {...feature} index={index} />
            </div>
          ))}
        </div>
      </div>
      {/* <div className={`${layout.sectionImg} flex-col`}></div> */}
    </section>
  );
};

export default Features;

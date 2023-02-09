import styles from "../style";
import scene from "../assets/scene.png";
import Login from "./LoginPopup";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col  ${styles.paddingY}`}
    >
      <div className="row mb-4 pb-4 ">
        <div className="col-8">
          <div>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[80px] leading-[75px]">
              Dive, Explore, and <br />
              Immerse into an extraordinary <br />
              Medieval World
            </h1>
          </div>
        </div>
        <div className="col-4 d-flex align-items-center ">
          <div
            className="justify-content-center"
            style={{ backgroundColor: "#f5f5f5", borderRadius: 4 }}
          >
            <Login />
            {/* <img src={scene}></img> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

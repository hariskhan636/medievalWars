import styles from "../style";
import lobby from "../assets/lobby.png";

const Instructions = () => {
  return (
    <div
      id="instructions"
      className="flex flex-col justify-between items-center w-full mt-4"
    >
      <h2 className={`${styles.heading2}`}>Instructions</h2>
      <div className="row mt-4 mb-5">
        <div className="col d-flex align-items-center">
          <div
            className={`col flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <img src={lobby}></img>
          </div>
        </div>
        <div className="col d-flex align-items-center ">
          <p
            className={`${styles.paragraph}  text-justify text-[15px] leading-[26px] ml-4`}
          >
            Your aim is to beat your opponent by destroying their Town Center. For that, you will need to
            build and army and in order to sustain that army, you will be required to strengthen your Economy.
            Medieval Wars is a Real Time Strategy game where you will build your own civilization,
            build your economy and assemble your army. Use your military mindset to strike a balance between
            your economy and military. Use this balance to build a strong empire and beat your enemy before
            its too late.
            Your villagers are the focal point of your economy. Use them to collect resources and construct
            buildings. Each building serves a different purpose and a unique combination of each resources is
            required to construct buildings, make units and research technologies.
            Some buildings are purposed to serve a military role like Watch Towers and Barracks while some are
            focused on supporting your economy like Grannary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;

import { tools } from "../constants";
import styles from "../style";

const Tools = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        <div className="container">
          <div className="row">
            {tools.map((tool) => (
              <div className="col-2">
                <div
                  key={tool.id}
                  className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
                >
                  <img
                    src={tool.logo}
                    alt="tool-logo"
                    className="sm:w-[70px] w-[90px] sm:h-[120px] h-[90px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
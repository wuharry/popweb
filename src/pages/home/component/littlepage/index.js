import "./style.css";
import Buttons from "../../../../components/Button";
const LittlePage = ({ context, buttonON }) => {
  return (
    <>
      <div className="contain">
        <div className="topsec">
          <div className="Title">
            <span className="childTitle">
              <h3>FRESH SPRING COLORS + YOUR PERSONAL PHOTOS =</h3>
            </span>
            <h2>the perfect online invitation</h2>
          </div>
          <Buttons data={"CREATE AN INVATION"} color={"blcak"} />
        </div>
        <div className="theme">
          {/* theme1 */}
          <div className="pictures">
            <picture
              srcset="./images/theme_1_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_1_thumbnail@1x.avif"
                height="348"
                width="265"
              />
            </picture>
          </div>
          {/* theme2 */}
          <div className="pictures">
            <picture
              srcset="./images/theme_5_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_5_thumbnail@1x.avif"
                height="348"
                width="265"
              />
            </picture>
          </div>
          {/* theme3 */}
          <div className="pictures">
            <picture
              srcset="./images/theme_12_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_12_thumbnail@1x.avif"
                height="348"
                width="265"
              />
            </picture>
          </div>
          {/* theme4 */}
          <div className="pictures">
            <picture
              srcset="./images/theme_7_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_7_thumbnail@1x.avif"
                height="348"
                width="265"
              />
            </picture>
          </div>
          {/* theme5 */}
          <div className="pictures">
            <picture
              srcset="./images/theme_9_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_9_thumbnail@1x.avif"
                height="348"
                width="265"
              ></img>
            </picture>
          </div>
          {/* theme6 */}
          <div className="pictures">
            <picture
              srcset="./images/theme_6_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_6_thumbnail@1x.avif"
                height="348"
                width="265"
              />
            </picture>
          </div>
        </div>
        <div className="theme-icon">
          <div>
            {/* theme1 icon */}
            <picture
              srcset="./images/theme_1_thumbnail@1x.avif"
              media="(min-width: 800px)"
            ></picture>
          </div>
          <div>
            {/* theme2 icon*/}
            <picture></picture>
          </div>
          <div>
            {/* theme3 icon*/}
            <picture></picture>
          </div>
          <div>
            {/* theme4 icon*/}
            <picture></picture>
          </div>
          <div>
            {/* theme5icon */}
            <picture></picture>
          </div>
          <div>
            {/* theme6icon */}
            <picture></picture>
          </div>
        </div>
      </div>
    </>
  );
};
export default LittlePage;

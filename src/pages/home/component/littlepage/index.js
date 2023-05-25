import "./style.css";
import Buttons from "../../../../components/Button";
const LittlePage = ({ context, buttonON }) => {
  return (
    <>
      <div className="contain">
        <div className="Title">
          <span className="childTitle">
            <h3>FRESH SPRING COLORS + YOUR PERSONAL PHOTOS =</h3>
          </span>
          <h2>the perfect online invitation</h2>
          <Buttons data={"CREATE AN INVATION"} color={"blcak"} />
        </div>

        <div className="theme">
          
          <div className="pictures">
            <picture
              srcset="./images/theme_1_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_1_thumbnail@1x.avif"

              />
            </picture>
          </div>
 
          <div className="pictures">
            <picture
              srcset="./images/theme_5_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_5_thumbnail@1x.avif"
              />
            </picture>
          </div>
     
          <div className="pictures">
            <picture
              srcset="./images/theme_12_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_12_thumbnail@1x.avif"
              />
            </picture>
          </div>
        
          <div className="pictures">
            <picture
              srcset="./images/theme_7_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_7_thumbnail@1x.avif"
              />
            </picture>
          </div>
        
          <div className="pictures">
            <picture
              srcset="./images/theme_9_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_9_thumbnail@1x.avif"
              ></img>
            </picture>
          </div>
         
          <div className="pictures">
            <picture
              srcset="./images/theme_6_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                src="./images/theme_6_thumbnail@1x.avif"
              />
            </picture>
          </div>
        </div>

        {/* 泡泡icon區 */}
        {/* <div className="topsec">
          <div className="buboicon1">
            <span className="bubo1_left"></span>
            <span className="bubo1_right"></span>
          </div>
          <div className="buboicon2">
            <span className="bubo2_left"></span>
            <span className="bubo2_right"></span>
          </div>
          <div className="buboicon3">
            <span className="bubo3_left"></span>
            <span className="bubo3_right"></span>
          </div>
          <div className="buboicon4">
            <span className="bubo4_left"></span>
            <span className="bubo4_right"></span>
          </div>
          <div className="buboicon5">
            <span className="bubo5_left"></span>
            <span className="bubo5_right"></span>
          </div>
          <div className="buboicon6">
            <span className="bubo6_left"></span>
            <span className="bubo6_right"></span>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default LittlePage;

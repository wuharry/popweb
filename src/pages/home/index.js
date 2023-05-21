import "./style.css";
import NavigationBar from "./component/NavigationBar";
import Buttons from "../../components/Button";
import LittlePage from "./component/littlepage";
import LittlePage2 from "./component/littlepage2";
const Home = () => {
  return (
    <>
      <div className="body">
        <NavigationBar />

        <div className="context">
          {/* 內文區 */}
          <div className="maincontent">
            <h1>a new way to experience online invitations</h1>
            <p>
              Plan in-person or <a href="/virtual">virtual events</a> for your
              next occasion with our stylish designer templates— ad free!"
            </p>
            <Buttons data={"CREATE AN INVATION"} color={"white"} />
          </div>
          {/* 放置圖片的地區 */}
          <div className="imges">
            <div className="imgescontain">
              <div className="Noteframe">
                <div className="Note"></div>
                <picture
                  className="Nopadcontain"
                  srcset="./images/hero_desktop_image@0.75x.avif'"
                  media="(min-width: 800px)"
                >
                  <img src="./images/hero_desktop_image@1x.avif" />
                </picture>
              </div>

              <div className="mobileframe">
                <div className="mobile"></div>
                <div className="mobilecontain">
                  <picture
                    srcset="./images/hero_mobile_image@0.75x.avif'"
                    media="(min-width: 800px)"
                  >
                    <img
                      src="./images/hero_mobile_image@1x.avif"
                      className="mobilepicture"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
        </div>
        {/* 放置小分業 */}
        <div className="middle">
          <LittlePage />
          <LittlePage2 />
        </div>
      </div>
    </>
  );
};
export default Home;

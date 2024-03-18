import "./styleAnimation.css";
import vid1 from "./vid1.mp4";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";

export const Animation = () => {
  return (
    <div>
      <div className="BrowserMode">
        <div className="video">
          <video loop muted autoPlay>
            <source src={vid1} type="video/mp4" />
          </video>
        </div>
        <div className="wrapper">
          <div className="wrapper_2 wrapper_2_1">
            <div className="bg-white bg1"></div>
            <div className="gapVideo gapV1"></div>
            <div className="bg-white bg7"></div>
          </div>
          <div className="wrapper_2 wrapper_2_2">
            <div className="bg-white bg2"></div>
            <div className="gapVideo gapV2"></div>
            <div className="bg-white bg8"></div>
          </div>
          <div className="wrapper_2 wrapper_2_3">
            <div className="bg-white bg3"></div>
            <div className="gapVideo gapV3"></div>
            <div className="bg-white bg9"></div>
          </div>
          <div className="wrapper_2 wrapper_2_4">
            {" "}
            <div className="bg-white bg4"></div>
            <div className="gapVideo gapV4"></div>
            <div className="bg-white bg10"></div>
          </div>
          <div className="wrapper_2 wrapper_2_5">
            <div className="bg-white bg5"></div>
            <div className="gapVideo gapV5"></div>
            <div className="bg-white bg11"></div>
          </div>
          <div className="wrapper_2 wrapper_2_6">
            <div className="bg-white bg6"></div>
            <div className="gapVideo gapV6"></div>
            <div className="bg-white bg12"></div>
          </div>
        </div>

        <div className="wrapper2">
          <div className="topWrapper">
            <div className="bg-trans"></div>
            <div className="bg-trans"></div>
            <div className="bg-trans"></div>
            <div className="bg-trans"></div>
            <div className="bg-trans trans5">
              <div className="trans5Text">
                <span className="span1">
                  <span className="plus">+</span>
                  87.5%
                </span>
                <span className="span2">Monetization</span>
              </div>
            </div>
            <div className="bg-trans trans6">
              <div className="trans6Text">
                <span className="span1">
                  <span style={{ color: "#e3e2e7" }}>+</span>80M
                </span>{" "}
                <span className="span2"> Revenue</span>
                <span className="span2"> Generated</span>
              </div>
            </div>
          </div>
          <div className="bottomWrapper">
            <div className="bg-trans trans7">
              <div className="textCol">
                <span id="span1">PRO'S</span>
                <span id="span2">CHOICE</span>
              </div>

              <div className="circle-container">
                <div style={{ display: "flex" }}>
                  <div className="quarter top-left"></div>
                  <div className="quarter top-right"></div>
                </div>
              </div>
            </div>
            <div className="bg-trans trans8">
              <div className="trans8Text">
                <img className="img1" src={logo1} alt="logo1" />
                <img className="img2" src={logo2} alt="logo2" />
                <img className="img3" src={logo3} alt="logo3" />
              </div>
            </div>
            <div className="bg-trans"></div>
            <div className="bg-trans trans10">
              <div className="trans10Text">
                <span className="span1">
                  <span className="plus">+</span>150
                </span>
                <span className="span2">
                  Internal Solutions <br></br>Launched
                </span>
              </div>
            </div>
            <div className="bg-trans"></div>
            <div className="bg-trans"></div>
          </div>
        </div>
      </div>
      <div className="IphoneMode">
        <div className="video">
          <video src={vid1} loop muted autoPlay />
        </div>
        <div className="phoneWrap">
          <div className="phoneWrap1">
            <div className="iphone-white ph1">
              <div className="round">
                <div className="cutVid">
                  <div className="video">
                    <video src={vid1} loop muted autoPlay />
                  </div>
                </div>
              </div>
            </div>

            <div className="ph2 "></div>
            <div className="phspace"></div>
            <div className="ph3"></div>

            <div className="iphone-white ph4"></div>
            <div className="iphone-white ph5"></div>
          </div>
          <div className="phoneWrap2">
            <div className="iphone-white ph6"></div>
            <div className="iphone-white ph7"></div>
            <div className="iphone-white ph8"></div>
            <div className="iphone-white ph9"></div>
            <div className="iphone-white ph10"></div>
          </div>
          <div className="phoneWrap3-4">
            <div className="phoneWrap3-4-2">
              <div className="iphone-white ph11"></div>
              <div className="gapiV1"></div>
              <div className="iphone-white ph16"></div>
            </div>
            <div className="phoneWrap3-4-2">
              <div className="iphone-white ph12"></div>
              <div className="gapiV2"></div>
              <div className="iphone-white ph17"></div>
            </div>
            <div className="phoneWrap3-4-2">
              <div className="iphone-white ph13"></div>{" "}
              <div className="gapiV3"></div>
              <div className="iphone-white ph18"></div>
            </div>
            <div className="phoneWrap3-4-2">
              <div className="iphone-white ph14"></div>{" "}
              <div className="gapiV4"></div>
              <div className="iphone-white ph19"></div>
            </div>

            <div className="phoneWrap3-4-2">
              <div className="iphone-white ph15"></div>{" "}
              <div className="gapiV5"></div>
              <div className="iphone-white ph20"></div>
            </div>
          </div>

          <div className="phoneWrap5">
            <div className="iphone-white ph21"></div>
            <div className="iphone-white ph22"></div>
            <div className="iphone-white ph23"></div>
            <div className="iphone-white ph24"></div>
            <div className="iphone-white ph25"></div>
          </div>
        </div>
        <div className="phoneWrapText">
          <div className="perWrap">
            <div className="iphone-white"></div>
            <div className="iphone-white"></div>
            <div className="iphone-white per3">
              {" "}
              <div className="per3Text">
                <span className="span1">
                  <span className="plus">+</span>
                  87.5%
                </span>
                <span className="span2">Monetization</span>
              </div>
            </div>
            <div className="iphone-white"></div>
            <div className="iphone-white"></div>
          </div>
          <div className="perWrap">
            <div className="iphone-white per6">
              {" "}
              <div className="per6Text">
                <span className="span1">PRO'S</span>
                <span className="span2">CHOICE</span>
              </div>
            </div>
            <div className="iphone-white "></div>
            <div className="iphone-white"></div>
            <div className="iphone-white per9">
              <div className="per9Text">
                <img className="img1" src={logo1} alt="logo1" />
                <img className="img2" src={logo2} alt="logo2" />
                <img className="img3" src={logo3} alt="logo3" />
              </div>
            </div>
            <div className="iphone-white"></div>
          </div>
          <div className="perWrap">
            <div className="iphone-white"></div>
            <div className="iphone-white "></div>
            <div className="iphone-white"></div>
            <div className="iphone-white "></div>
            <div className="iphone-white "></div>
          </div>
          <div className="perWrap">
            <div className="iphone-white"> </div>
            <div className="iphone-white per17">
              <div className="per17Text">
                <span className="span1">
                  <span style={{ color: "#e3e2e7" }}>+</span>80M
                </span>{" "}
                <span className="span2"> Revenue</span>
                <span className="span2"> Generated</span>
              </div>
            </div>
            <div className="iphone-white"></div>
            <div className="iphone-white per19">
              {" "}
              <div className="per19Text">
                <span className="span1">
                  <span className="plus">+</span>
                  150
                </span>
                <span className="span2"> Internal Solutions Launched</span>
              </div>
            </div>
            <div className="iphone-white"></div>
          </div>
          <div className="perWrap">
            <div className="iphone-white"></div>
            <div className="iphone-white"></div>
            <div className="iphone-white"></div>
            <div className="iphone-white"></div>
            <div className="iphone-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

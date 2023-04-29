import "../styles/Features.css";
import Mac from "../mocks/Mac";
import Custom3DCanvas from "../mocks/Custom3DCanvas";
import Atom from "../mocks/Atom";

const Features = () => {
  return (
    <div className="Features">
      <div className="container">
        <div className="Feature1">
          <div className="Feature1_text">
            <h1 className="Feature1">A fast and Reactive Developer.</h1>
          </div>
          <div className="Feature1_3dModel">
            <Custom3DCanvas>
              <Atom />
            </Custom3DCanvas>
          </div>
        </div>
        <div className="Feature2">
          <div className="Feature2_text">
            <h1 className="Feature2">UI Perfect & Responsiveness</h1>
          </div>
          <div className="Feature2_3dModel">
            <Custom3DCanvas>
              <Mac />
            </Custom3DCanvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

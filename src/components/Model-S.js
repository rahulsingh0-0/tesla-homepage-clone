import Common from "./Common";
import model_s from "../images/model-s.jpg";

const ModelS = () => {
  return (
    <>
      <Common
        name="Model s"
        sub_line="Order Online for"
        image={model_s}
        Laction="custom order"
        Raction="existing inventory"
        touch="Touchless Delivery"
      />
    </>
  );
};
export default ModelS;

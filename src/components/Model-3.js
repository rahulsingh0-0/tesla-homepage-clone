import Common from "./Common";
import model3 from "../images/model-3.jpg";

const Model3 = () => {
  return (
    <>
      <Common
        name="Model 3"
        sub_line="Order Online for"
        image={model3}
        Laction="custom order"
        Raction="existing inventory"
        touch="Touchless Delivery"
      />
    </>
  );
};
export default Model3;

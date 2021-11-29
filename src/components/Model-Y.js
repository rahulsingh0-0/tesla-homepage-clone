import Common from "./Common";
import modelY from "../images/model-y.jpg";

const ModelY = () => {
  return (
    <>
      <Common
        name="Model y"
        sub_line="Order Online for"
        image={modelY}
        Laction="custom order"
        Raction="existing inventory"
        touch="Touchless Delivery"
      />
    </>
  );
};
export default ModelY;

import Common from "./Common";
import modelX from "../images/model-x.jpg";

const ModelX = () => {
  return (
    <>
      <Common
        name="Model X"
        sub_line="Order Online for"
        image={modelX}
        Laction="custom order"
        Raction="existing inventory"
        touch="Touchless Delivery"
      />
    </>
  );
};
export default ModelX;

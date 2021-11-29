import Common from "./Common";
import solar from "../images/solar-panel.jpg";

const SolarPanel = () => {
  return (
    <>
      <Common
        name="solar panels"
        sub_line="Lowest Cost Solar Panels in America"
        image={solar}
        Laction="order now"
        Raction="learn more"
        touch=""
      />
    </>
  );
};
export default SolarPanel;

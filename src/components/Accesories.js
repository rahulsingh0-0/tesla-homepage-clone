import accesories from "../images/accessories.jpg";

const Accessories = () => {
  return (
    <>
      <div
        className="car-image"
        style={{
          backgroundImage: `url(${accesories})`,
        }}
      >
        <h1 className="car-title">accesories</h1>
        <button className="left" style={{ position: "relative", top: "72%" }}>
          Shop Now
        </button>
      </div>
    </>
  );
};
export default Accessories;

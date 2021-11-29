import "./Common.css";
const Common = (props) => {
  return (
    <>
      <div
        className="car-image"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <h1 className="car-title">{props.name}</h1>
        <h3 className="car-sub-title">
          {props.sub_line}
          &nbsp;<span>{props.touch}</span>
        </h3>
        <div className="actions">
          <button className="left">{props.Laction}</button>
          <button className="right">{props.Raction}</button>
          <h1 className="animate">
            <i className="fas fa-chevron-down"></i>
          </h1>
        </div>
      </div>
    </>
  );
};
export default Common;

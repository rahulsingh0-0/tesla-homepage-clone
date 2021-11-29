import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      <div className={styles.modal_background}>
        <div className={styles.modal_content}>
          <i
            onClick={props.hide}
            className="fas fa-times"
            style={{ position: "relative", left: "90%", fontSize: "2rem" }}
          ></i>
          <ul className={styles.column}>
            <li>
              <a href="#" className={styles.cyber}>
                cybertruck
              </a>
            </li>
            <li>
              <a href="#">roadster</a>
            </li>
            <li>
              <a href="#">semi</a>
            </li>
            <li>
              <a href="#">charging</a>
            </li>
            <li>
              <a href="#">powerwall</a>
            </li>
            <li>
              <a href="#">commericial energy</a>
            </li>
            <li>
              <a href="#">trade-in</a>
            </li>
            <li>
              <a href="#">test-drive</a>
            </li>
            <li>
              <a href="#">exisiting inventory</a>
            </li>
            <li>
              <a href="#">cybertruck</a>
            </li>
            <li>
              <a href="#">cybertruck</a>
            </li>
            <li>
              <a href="#">find us</a>
            </li>
            <li>
              <a href="#">support</a>
            </li>
            <li>
              <a href="#">investor relations</a>
            </li>
            <li>
              <div className={styles.language}>
                <div className="icon">
                  <i class="fas fa-globe"></i>
                </div>
                <div className="language_box" style={{ marginLeft: "1rem" }}>
                  <p>united states</p>
                  <p>english</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Modal;

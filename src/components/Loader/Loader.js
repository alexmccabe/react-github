import React from "react";
import styles from "./loader.module.scss";

/**
 * Display a "loader" if props.isVisible is set to true;
 *
 * @param {Object} props
 * @param {Boolean} props[isVisible=false]
 * @link https://codepen.io/AlexWarnes/pen/jXYYKL
 */
function Loader(props) {
  const { isVisible } = props;

  return (
    isVisible && (
      <div className={styles.container}>
        <div className={styles.spinnerBox}>
          <div className={styles.circleBorder}>
            <div className={styles.circleCore}></div>
          </div>
        </div>
      </div>
    )
  );
}

Loader.defaultProps = {
  isVisible: false
};

export default Loader;

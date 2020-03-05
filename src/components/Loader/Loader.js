import React from "react";

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
      <div class="spinner-box">
        <div class="circle-border">
          <div class="circle-core"></div>
        </div>
      </div>
    )
  );
}

Loader.defaultProps = {
  isVisible: false
};

export default Loader;

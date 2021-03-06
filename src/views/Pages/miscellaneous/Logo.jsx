import { Link } from "react-router-dom";

const Logo = ({ width, classes, style }) => {
  console.log("width: ", width);
  return (
    <div className={`logo ${classes}`} style={style ? style : {}}>
      <Link to="/">
        <img
         style={width ? { width: `${width}` } : {}}
         src="images/logo/logo.png"
         alt="logo" />
      </Link>
    </div>
  );
};

Logo.defaultProps = {
  width: "",
  classes: ""
}

export default Logo;

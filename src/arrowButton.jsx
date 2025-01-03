import PropTypes from "prop-types";
//import left from "./logo/leftArrow.svg";
//import right from "./logo/rightArrow.svg";

const Button = ({ direction }) => {
  return (
    <div className="left-0 absolute z-[4] top-[47%] hover:transform hover:scale-125">
      <button className=" border-none rounded-full bg-transparent hover:ring-0">
        <span className="sr-only"></span>
        <img className="w-8" src={direction}></img>
      </button>
    </div>
  );
};
Button.propTypes = { direction: PropTypes.string.isRequired };
export default Button;

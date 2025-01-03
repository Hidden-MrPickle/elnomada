import PropTypes from "prop-types";
const Shops = ({ category, photo }) => {
  return (
    <a href="#" className=" z-0 rounded relative space-y-4 p-1 text-center ">
      <img
        className="w-screen h-72 z-[1] rounded-md blur-sm hover:blur-none peer opacity-80 hover:transition-opacity md:hover:scale-110 transform overflow-x-hidden"
        src={photo}
      />
      <h2 className="font-questrial z-[2] inset-x-0 top-24 text-white font-black peer-hover:hidden peer-hover:ease-in-out text-6xl absolute inset-y-8 hover:hidden">
        {category}
      </h2>
    </a>
  );
};
Shops.propTypes = {
  category: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
export default Shops;

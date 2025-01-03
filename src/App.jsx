import "./App.css";
import Shops from "./grids";
import Panel from "./navBar";
import left from "./logo/back.svg";
import right from "./logo/go.svg";
import people from "./photo/people.png";
function App() {
  return (
    <>
      <Panel />

      <h1 className=" z-[1]text-7xl relative text-center text-white font-quattrocento md:text-7xl mb-5 md:bottom-14">
        El Nomada Store
      </h1>
      <h3 className="relative text-center text-white font-quattrocento md:text-4xl bottom-20">
        {" "}
        Where you find anything that you need{" "}
      </h3>
      <div className=" inset-x-0 absolute bg-slate-800 border-opacity-35 bg-opacity-30 border border-solid border-black font-quattrocento md:bottom-0">
        <strong className=" font-questrial font-medium text-3xl">
          Shop categories
        </strong>
        <div className="right-0 absolute z-[4] md:top-[47%] hover:transform hover:scale-125 hidden md:block">
          <button className=" border-none rounded-full bg-transparent hover:ring-0">
            <span className="sr-only"></span>
            <img className="w-8" src={right}></img>
          </button>
        </div>
        <div className="left-0 absolute z-[4] md:top-[47%] hover:transform hover:scale-125 hidden md:block">
          <button className=" border-none rounded-full bg-transparent hover:ring-0">
            <span className="sr-only"></span>
            <img className="w-8" src={left}></img>
          </button>
        </div>
        <div className=" bottom-16 flex flex-col items-center md:grid md:grid-cols-4 w-auto  h-auto rounded-md">
          <Shops category="Coffees" photo="/elnomada/src/photo/graphs.jpg" />
          <Shops photo="/elnomada/src/photo/clothes.jpg" category="Clothes" />
          <Shops
            photo="/elnomada/src/photo/groceries.jpg"
            category="Groceries"
          />
          <Shops photo="/elnomada/src/photo/game.jpg" category="Game" />
        </div>
      </div>
    </>
  );
}
export default App;

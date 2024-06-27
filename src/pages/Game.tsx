import { scrollManagment } from "scrollManagment";

const Game = () => {
  const isOutro = scrollManagment((state) => state.isOutro);

  return (
    <div
      className={`grid w-full place-content-center ${isOutro ? "animate-elementsFallDown" : ""}`}
    >
      <h1 className="mt-4 rounded-md p-4 outline outline-selectedColor">
        <h1 className="animate-pulse text-2xl font-bold">
          Mini Io Game Coming Soon!
        </h1>
      </h1>
    </div>
  );
};

export default Game;

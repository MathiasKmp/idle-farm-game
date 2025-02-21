export default function Game() {
  const [gold, setGold] = useState(0);
  const [wheat, setWheat] = useState(0);
  const [isGrowing, setIsGrowing] = useState(false);

  function plantWheat() {
    if (!isGrowing) {
      setIsGrowing(true);
      setTimeout(() => {
        setWheat((prev) => prev + 1);
        setIsGrowing(false);
      }, 5000);
    }
  }

  function sellWheat() {
    if (wheat > 0) {
      setWheat((prev) => prev - 1);
      setGold((prev) => prev + 10);
    }
  }

  return (
    <div className="p-4 bg-green-100 rounded-lg">
      <h1 className="text-2xl font-bold">Idle Farm</h1>
      <p>Gold: {gold}</p>
      <p>Wheat: {wheat}</p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded mt-2" 
        onClick={plantWheat} 
        disabled={isGrowing}
      >
        {isGrowing ? "Growing..." : "Plant Wheat"}
      </button>
      <button 
        className="px-4 py-2 bg-yellow-500 text-white rounded mt-2 ml-2" 
        onClick={sellWheat} 
        disabled={wheat === 0}
      >
        Sell Wheat
      </button>
    </div>
  );
}

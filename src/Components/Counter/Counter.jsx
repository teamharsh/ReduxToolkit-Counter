import { useSelector } from "react-redux";

const Counter = () => {
  // const counterValue = useSelector((state) => state.counter);
  const {counterVal} = useSelector((state) => state.counter);
  //.counter is a name of slice in store
  //store,counter give an object
  // so destructring it to get counterVal 
  console.log(typeof counterVal);
  console.log(counterVal);

  return (
    <div className="text-xl py-4 px-2 text-center bg-gray-200 rounded-md shadow-md">
      Current Counter: {counterVal}
    </div>
  );
};

export default Counter;

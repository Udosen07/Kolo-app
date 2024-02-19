import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateAmountIn, updateAmountOut, clearAll } from "../store/finslice";

const FinForm = () => {
  const [amountIn, setAmountIn] = useState();
  const [amountOut, setAmountOut] = useState();
  const dispatch = useDispatch();
  const amountInValue = useSelector((state) => state.fin.amountIn);
  const amountOutValue = useSelector((state) => state.fin.amountOut);
  const profitLossValue = amountInValue - amountOutValue;

  const submit = (e) => {
    e.preventDefault();
    const amountInNumber = parseFloat(amountIn);
    const amountOutNumber = parseFloat(amountOut);

    if (!isNaN(amountInNumber) && !isNaN(amountOutNumber)) {
      dispatch(updateAmountIn(amountInNumber));
      dispatch(updateAmountOut(amountOutNumber));
      setAmountIn("");
      setAmountOut("");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-2">
        <p className={profitLossValue >=0 ? "text-green-600 underline font-semibold md:text-xl":"text-red-700 md:text-xl underline font-semibold"}>Profit/loss: {profitLossValue}</p>
        <button className="p-1 rounded-md bg-red-700 font-medium text-white md:p-2" onClick={() => {dispatch(clearAll())}}>Clear Kolo</button>
      </div>
      <form className="text-center w-full flex flex-col items-center mt-6 space-y-3">
        <label className="text-green-600 font-bold" for="amountIn">Amount In: {amountInValue}</label>
        <input
          type="number"
          id="amountIn"
          name="amountIn"
          value={amountIn}
          onChange={(e) => setAmountIn(e.target.value)}
          className=" w-full border border-black md:w-1/2 p-2"
        />
        <label className="text-red-600 font-bold" for="amountOut">Amount Out: {amountOutValue}</label>
        <input
          type="number"
          id="amountOut"
          name="amountOut"
          value={amountOut}
          onChange={(e) => setAmountOut(e.target.value)}
          className=" w-full border border-black md:w-1/2 p-2"
        />
        <input type="submit" value="Submit" className="bg-green-500 p-1 md:p-4 mx-auto rounded-md font-medium text-white" onClick={submit} />
      </form>
    </div>
  );
};

export default FinForm;

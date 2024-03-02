import React, { useState } from "react";
import data from "./accordionData";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multi, setMulti] = useState(false);
  const [multiArr, setMultiArr] = useState([]);

  function handleSingleClick(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelect(id) {
    let arr = [...multiArr];

    if (arr.indexOf(id) === -1) arr.push(id);
    else arr.splice(arr.indexOf(id), 1);

    setMultiArr(arr);
  }

  return (
    <div className="flex-col bg-blue-500 p-4 rounded-xl">
      <button
        onClick={() => {
          setMulti(!multi);
          setSelected(null);  //reset the states
          setMultiArr([]);    //reset the array
        }}
      >
        {multi ? "MultiClick Enabled" : "MultiClick Disabled"}
      </button>
      {data.map((dataItem) => (
        <>
          <div key={dataItem.id} className="flex">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-xl m-8">{dataItem.question}</h3>
              <button
                className="text-lg bg-blue-200 text-black"
                onClick={
                  multi
                    ? () => handleMultiSelect(dataItem.id)
                    : () => handleSingleClick(dataItem.id)
                }
              >
                +
              </button>
            </div>
          </div>
          <div className="align-left text-xl text-black">
            {multi
              ? multiArr.indexOf(dataItem.id) !== -1 && (
                  <div>{dataItem.answer}</div>
                )
              : selected === dataItem.id && <div>{dataItem.answer}</div>}
          </div>
        </>
      ))}
    </div>
  );
}

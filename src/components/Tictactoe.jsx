import React, { useState } from "react";

export const Tictactoe = () => {
  
  
  const [blocks , setBlocks] = useState(new Array(9).fill(null))
  const [cross , setCross] = useState("X")

  const board_Design = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  function handleClick(index) {

      cross === "X" ? setCross("O") : setCross("X")
    
    setBlocks((prevBlock) => {
        
        const newBlock = [...prevBlock]
        
        newBlock[index] = cross

        return newBlock
    })

    
  }

  return (
    <div className="grid grid-cols-3 grid-rows-3  ">
      {blocks.map((item , index) => {
        return (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className="border-black border h-[80px] w-[80px] flex items-center justify-center text-4xl "
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
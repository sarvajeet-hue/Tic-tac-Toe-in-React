import React, { useState } from "react";

export const Tictactoe = () => {
  const [blocks, setBlocks] = useState(new Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner , setWinner] = useState('')
  const [count  , setCount] = useState(0)

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

  function check_Game(index){
    console.log("this function runs")
      if(blocks[index] != null){
        console.log("count")
        setCount(count+1)
      }

      else if(count === 9){
        setWinner("Draw")
      }
      
    }
  
  
  function handleClick(index) {
    check_Game(index)
      
    if(blocks[index] != null){
      return
    }
    setBlocks((prevBlock) => {
     
      const newBlock = [...prevBlock];

      newBlock[index] = currentPlayer;
      
      return newBlock;
    });
    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
    
  }

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <div className="grid grid-cols-3 grid-rows-3  ">  
        {blocks.map((item, index) => {
          return (
            <div
              onClick={() => handleClick(index)}
              key={index}
              className={`border-black border h-[80px] w-[80px] flex items-center justify-center text-4xl ` }
            >
              {item}
              
            </div>
          );
        })}
      </div>

      <div>
        CurrentPlayer - {currentPlayer}
      </div>
      <div>
        Winner - {winner}
      </div>
    </div>
  );
};

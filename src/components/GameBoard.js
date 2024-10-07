import { useState } from "react";

const initialGameboard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

export default function GameBoard({onSelectSquare ,activePlayerSymbol}){
    // const [GameBoard,setGameBoard] = useState(initialGameboard);

    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=> {
    //         const updatedBoard =[...prevGameBoard.map(innerArray=> [...innerArray])];
    //         updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }
    // 
    return(
    <ol id="game-board">
        {GameBoard.map((row,rowIndex)=> (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex)=> (
                        <li key={colIndex}>
                            <button onClick={()=> handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
)}
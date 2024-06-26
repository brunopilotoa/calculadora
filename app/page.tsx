'use client'

import { useState } from "react";

export default function Home() {

  const [result,setResult]= useState ("")
  
  const [expression,setExpression] =useState("")

  const handleButtonClick = (value: string) =>{
    if (value === '='){
    
        try{
            const evalResult = eval(expression).toString();
            setResult(evalResult)
        } catch (error){
          setResult('Error');
        }
      }else if (value ==='C'){
      setResult ('');
      setExpression ('');
      }else{
        setExpression((prevExpression) => prevExpression + value);
    }
  };
  

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
    'C' 
];


  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      <h1 className="title">Calculadora</h1>
      <div className="p-6 rounded-lg shadow-lg">
        {/* <p>Insira</p> */}
      <input 
        type="text"
        className=" number w-full mb-2 text-3x1 border-b-2 border-gray-400 focus:outline-none text-center"
        value={expression}
        readOnly 
        placeholder="Expressão Matemática"
      />

      <input 
      type="text"
      className=" number w-full text-2x1  font-bold mb-4 focus:outline-none align-self text-center"
      value={result}
      readOnly
      placeholder="Resultado"
      />
      
      <div className="grid grid-cols-4 gap-2">
      {buttons.map((btn)=>(
        <button
          key={btn}
          onClick={()=>
            handleButtonClick(btn)}
          className=" text-4x1 bg-gray-300 hover:bg-gray-400 p-4 rounded-lg"
        >
        {btn}
        </button>  
        ))}
      </div>
    </div>
  </main>
 )
}
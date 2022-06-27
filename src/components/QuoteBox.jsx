import React from 'react';
import quotes from "./quotes.json"
import { useState} from "react"
import 'boxicons'

const QuoteBox = () => {
    let color="yellow"
let colors=["#eae2b7","#fcbf49","#f77f00","#d62828","#003049","#118ab2","#118ab2","#06d6a0","#ffd166","#ef476f"]
let [quoteNumber,setQuoteNumber]=useState(Math.floor(Math.random()*quotes.length)) 
let [colorNumber,setColorNumber]=useState(Math.floor(Math.random()*colors.length))
document.body.style=`background: ${colors[colorNumber]}`
    let changeQuote=()=>{
        setQuoteNumber(Math.floor(Math.random()*quotes.length))
        setColorNumber(Math.floor(Math.random()*colors.length))

    }
    return (
        <div className='quoteBox' style={{color: colors[colorNumber]}}>
            <div className='topQuote'>
            
            <p className='quote'>{quotes[quoteNumber].quote}</p>
            </div>
            <div className='bottonQuote'>
            <p className='author'>{quotes[quoteNumber].author}</p>
            <button onClick={changeQuote} className="btnChangeQuote" style={{background: `${colors[colorNumber]}`}}>Icon</button>
            </div>
        </div>
    );
};

export default QuoteBox;
import React, { useState } from 'react'

export default function About(props) {
    /*
    const[myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    */
let myStyle={
    color:props.mode==='dark'?'black':'black',
    backgroundColor:props.mode==='dark'?'lightblue':'aqua'
}
/*
    const[btntext,setBtnText]=useState("Enable Dark Mode")
    const toggleStyle=()=>{
        if(myStyle.color==='black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText('Enable Dark Mode');

        }
    }
    */
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3' style={{color:props.mode==='dark'?'white':'grey'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button"
                    type="button"
                    style={myStyle}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                     Analyze your text
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body" style={myStyle}>
                    Analyze your text quickly and efficiently.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button"
                    type="button"
                    style={myStyle}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                   Free to use
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body" style={myStyle}>
                    Free character counter tool
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button"
                    type="button"
                    style={myStyle}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    Browser comptiable
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body" style={myStyle}>
                    Works in any browser
                </div>
            </div>
        </div>
        
      </div>
    </div>

  )
}

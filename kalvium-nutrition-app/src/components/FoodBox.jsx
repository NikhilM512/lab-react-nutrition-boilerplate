import React from 'react'
import { useState } from 'react';
import "./FoodBox.css"

const FoodBox = (props) => {

    const [qty,setQty]=useState("")
    const [count,setCount]=useState(0);
    const [cal,setCal]=useState(0)
    console.log(props);
    let e=props.food;
    let i=props.i
    // console.log(props);  
    // let foodData=props.food;
    // console.log(foodData)

    let handleChange=(e)=>{
        // console.log(e.target.value)
        setQty(e.target.value)
        // console.log(qty);        
    }

    let handleAdd=(e,calories)=>{
        console.log(calories,qty)
        setCount(qty)
        setCal(calories*qty)
    }

    let handleReset=()=>{
        console.log(qty);
        setQty("");
        setCount(0);
        setCal(0)
    }

  return (<>
  
     <div key={i} className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={e.img} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{e.name}</strong> <br />
          <small>{e.cal}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value={qty} onChange={handleChange}/>
        </div>
        <div className="control">
          <button className="button is-info" onClick={(event)=>handleAdd(event,e.cal)}>
            +
          </button>
        </div>
      </div>
    </div>
    <div className="last-ele">
    <span>{count} pizza =</span>
    <span>{cal} calories</span>
    <button onClick={handleReset}>Reset</button>
  </div>
  </article>
 
</div>
       

    </>
  )
}

export default FoodBox
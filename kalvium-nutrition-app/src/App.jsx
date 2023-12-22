import { useState } from 'react'
import FoodBox from './components/FoodBox'
import './App.css'
import food from "./resources/FoodData"

function App() {
  //  console.log(food)
  let [data,setData]=useState(food);

  let handleSearch=(e)=>{
    if (e.target.value==""){
      setData(food);
      return;
    }
      let newData=data.filter((ele)=>{
        console.log(ele.name.toLowerCase().includes(e.target.value.toLowerCase()),ele.name.toLowerCase(),e.target.value.toLowerCase())
        return ele.name.toLowerCase().includes(e.target.value.toLowerCase())
      })

      setData(newData)
  }

  return (
    <>
    <h3>search</h3>
  <input type="text" onChange={handleSearch}/>
    <div>
    {data.map((e,i)=>
      <div>
      <FoodBox food={e} i={i}/>
      </div>
      )}
    </div>
    </>
  )
}

export default App

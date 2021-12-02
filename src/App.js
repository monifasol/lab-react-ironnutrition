import "./App.css";
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";
import { Button } from "antd";

function App() {

  const [foodsList, setFoodsList] = useState(foods)
  const [filteredList, setFilteredList] = useState(foods)

  const createFoodCB = (body) => {
    body._id = parseInt(Math.random() * 10000)  // fake id!
    setFoodsList([body, ...foodsList])          // adding body (our new food) to foodsList state
    setFilteredList([body, ...filteredList])    // adding body (our new food) to filteredList state
  }

  const searchFoodCB = (query) => {
    if (query === "") { 
      setFoodsList(foods) 
    } else {
      setFilteredList(
        foodsList.filter( food => food.name.toLowerCase().includes(query.toLowerCase()))
      )
    }
  }

  const deleteFoodCB = (foodToDelete) => {   
    setFilteredList(
      filteredList.filter( food => {
        return food !== foodToDelete 
      })
    )
  }

  const generateId = () =>{
    return parseInt(Math.random() * 100000)
  }

  const toggleAddForm = (e) => {
    let formEl = document.getElementById('addFoodForm')
    formEl.classList.toggle("show") 

    let buttonEl = document.getElementById('buttonShowForm')
    buttonEl.style.display = (formEl.className.includes("show")) ? "none" : "block" 
  }

  return (
    <div className="App">

        <h3 className="title">Search for food: </h3>
        <SearchBar searchFood={searchFoodCB} />     {/* send CB to child */}

        <Button type="secondary" id="buttonShowForm" onClick={ () => toggleAddForm()}> Add New Food</Button>
        
        <div className="hide" id="addFoodForm">
            <h3 className="title">Add new food: </h3>
            <AddFoodForm createFood={createFoodCB}/>    {/* send CB to child */}
            <Button type="secondary" id="buttonHideForm" onClick={ () => toggleAddForm()}> Hide Form</Button>
        </div>
      
        <div className="food-list-wrapper">
          { filteredList.length === 0 
            ? 
            <p className="empty-list"><span>🤷🏻‍♀️ </span>Oops, there's no content to show!</p>
            : 
              filteredList.map( (food) => (          
                <FoodBox food={food} deleteFood={deleteFoodCB}  key={generateId()} />
              ))
          }

        </div>
    </div>
  )
}
export default App;
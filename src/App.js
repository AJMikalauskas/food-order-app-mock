import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Fragment, useState, useEffect, useCallback, useMemo } from 'react';
import MealItemForm from './Meal-Items/AvailableMeals';
import MealsSummary from './Meals-Summary/MealsSummary';
import AvailableMeals from './Meal-Items/AvailableMeals';

function App() {
  // const DUMMY_MEALS = [
  //   {
  //     id: 'm1',
  //     name: 'Sushi',
  //     description: 'Finest fish and veggies',
  //     price: 22.99,
  //   },
  //   {
  //     id: 'm2',
  //     name: 'Schnitzel',
  //     description: 'A german specialty!',
  //     price: 16.5,
  //   },
  //   {
  //     id: 'm3',
  //     name: 'Barbecue Burger',
  //     description: 'American, raw, meaty',
  //     price: 12.99,
  //   },
  //   {
  //     id: 'm4',
  //     name: 'Green Bowl',
  //     description: 'Healthy...and green...',
  //     price: 18.99,
  //   },
  // ];

  //Error and isLoading States
 // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [apiData, setApiData] = useState([]);

  //   // This is the POST request to just get the data to the google firebase DB
  // //const postMealsData = async() => {
  // // const backendStoredDummyMeals = await fetch("https://food-ordering-app-db-b3d2e-default-rtdb.firebaseio.com/meals.json",
  // // {
  // //   method:'POST',
  // //   headers: {
  // //     'Content-Type':
  // //       'application/json;charset=utf-8'
  // //   },
  // //   body: JSON.stringify({
  // //     //id is the randomized cryptic key 
  // //     "name": "Green Bowl",
  // //     "description": "Healthy...and green...",
  // //     "price":  18.99
  // //   })
  // // });
  // // const data = await backendStoredDummyMeals.json();
  // // console.log(data);
  // // }


  // // GET Request
  // const getMealsData = useCallback(async() => {
  //   setLoading(true);
  //   setError(null);
  //   try 
  //   {
  // const response = await fetch("https://food-ordering-app-db-b3d2e-default-rtdb.firebaseio.com/meals.json");
  // const data = await response.json(); 
  // console.log(data);

  // const mealsFromFirebaseDB = [];
  // for(const key in data)
  // {
  //   mealsFromFirebaseDB.push({
  //     id: key,
  //     name: data[key].name,
  //     description: data[key].description,
  //     price: data[key].price
  //   })
  // }
  // setApiData(mealsFromFirebaseDB);
  //   }
  //   catch(error)
  //   {
  //     setError(error.message);
  //   }
  //   // Stop Loading state once data is shown via this end statement
  //   setLoading(false);
  // }, []);
  // // Need to use useCallback so that the function isn't being referenced as new function everytime it's called in the useEffect()

  // useEffect(() => {
  //   getMealsData();
  // }, [getMealsData]);

  return (
    <Fragment>
      <Header />
      <MealsSummary />
      {/* meals={DUMMY_MEALS}  -  No more need for this since HTTP calls are made in Available Meals.js itself*/}
      <AvailableMeals />
      {/* <button onClick={postMealsData}>POST Meals Data</button> */}
      {/* This  */}
      {/* <button onClick={getMealsData}>GET Meals Data</button> */}
    </Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

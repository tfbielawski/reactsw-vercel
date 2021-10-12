import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container, Dimmer, Loader} from "semantic-ui-react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";

//Main function definition
function App() {
    //declare  and init state
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);

    //USe Effect
    useEffect(() => {
        //Async function definition to get the people api data
        //Promise is...
        async function fetchPeople() {
            let res = await fetch("https://swapi.dev/api/people/");
            //Assign results to data
            let data = await res.json();
            //Call setPeople function, pass in results
            setPeople(data.results);
            //Set loading to false
            setLoading(false);
        }
        //DAsync function definition to get the planet api data
        async function fetchPlanets() {
            let res = await fetch("https://swapi.dev/api/planets/");
            //Assign results to data
            let data = await res.json();
            setPlanets(data.results);
            //Set loading to false
            setLoading(false);

        }
        //Invoke the functions
        fetchPeople();
        fetchPlanets();


        //Dependency 
        //Empty array to prevent endless calls
    }, [])

    console.log("People data>>>>", people);
    console.log("Planets data>>>>", planets);
    

	//Return function returns JSX to render to DOM
  return (
    <>
        <Router>
           {/* Render the NavBar component here */}
           <Navbar/>
            <Container>
                {/*Ternary Loading indicator. If loading is true...*/}
                {loading ? (
                    //Show the loading screen
                    <Dimmer active inverted>
                        <Loader inverted > LOADING...</Loader>
                    </Dimmer>
                    )
                    //Else, access the switch
                    : (
                        <Switch>
                            {/*Route to home component*/}
                            <Route exact path = "/">
                                <Home/>
                            </Route>
                            {/*Route to people component,pass in people as props*/}
                            {/*Maybe replace data with component??*/}
                            <Route exact path = "/people">
                                <People data = {people}/>
                            </Route>
                            {/*Route to planets component*/}
                            <Route exact path = "/planets">
                                <Planets data = {planets}/>
                            </Route>
                    </Switch>
                ) }

            </Container>
       </Router>
    </>
  );
}

export default App;

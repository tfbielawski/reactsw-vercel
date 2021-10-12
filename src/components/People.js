import React from "react";
import {Card, Grid} from "semantic-ui-react";


//People function definition, pass in data from App.js
export default function People({ data }) {
    return (
       <>
           <h1> PEOPLE</h1>
            {/* Set the display grid */}
           <Grid columns = {3}>
               {/* Map over data passed in from App.js
                   For each person in data, return a grid card*/}
               {data.map((person, i) => {
                   return (
                    <Grid.Column key = {i}>
                        <Card>
                            {/*Add comments for each card type*/}
                            <Card.Content>
                                <Card.Header>{person.name}</Card.Header>
                                <Card.Description>
                                    <strong>HEIGHT</strong>
                                    <p>{person.height}</p>
                                    <strong>MASS</strong>
                                    <p>{person.mass}</p>
                                    <strong>HAIR</strong>
                                    <p>{person.hair_color}</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                   )
               })}
           </Grid>
       </>
    )
}
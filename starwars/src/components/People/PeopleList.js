import React, {useState, useEffect} from 'react';
import {Row, Col} from 'reactstrap';
import {PeopleCard} from './PeopleCard';
import axios from 'axios';
import '../StarWars.css';

export function PeopleList(){
  const [people, setPerson] = useState([]);

  useEffect(() => { 
    axios.get(`https://swapi.co/api/people/`)
    .then(res => {
      setPerson(res.data.results)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(x => {
      console.log(`What do you mean? African or European Swallow?`)
    })
  }, [])

  return(
    <Row>
      {people.map(person => { 
        return(
          <Col pb="5" xs="12" lg="4" xl="2" height="100%">
            <PeopleCard 
              name={person.name}
              key={person.id}
              height={person.height}
              mass={person.mass}
              hair_color={person.hair_color}
              gender={person.gender}
              skin_color={person.skin_color}
            />
          </Col>
        );
      })}
    </Row>
  )
}
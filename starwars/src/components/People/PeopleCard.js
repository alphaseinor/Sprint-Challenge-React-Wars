import React from 'react';
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap'

export function PeopleCard(props){
  return(
    <Card key={props.id}>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>Height: {props.height} Weight: {props.mass}</CardSubtitle>
        <CardText>{props.name} is a {props.hair_color} {props.gender}, his skin color is {props.skin_color}</CardText>
      </CardBody>
    </Card>
  )
}
import React  from 'react'

import { toHaveClass } from "@testing-library/jest-dom/matchers";

const greet = (props) => {
    console.log(props)

   return <h1> Hello! {props.name} </h1>}


export default greet

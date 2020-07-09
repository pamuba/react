import React from 'react'

function Greet(props){
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            <h1>{props.children}</h1>
        </div>
    )
      
    // return React.createElement('div',null,React.createElement('h1',null,'Greet Component'))
}

// const Greet = () => <h1>Greet Component</h1>


export default Greet
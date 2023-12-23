import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a', 
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    child: 'Click me to visit google'
}

function MyApp(){
    return(
        <>
        <h1>This is MyApp</h1>
        </>
    )
}

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google </a>
)

const actualReactElem = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    "click on me"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
    // <MyApp/>
    // anotherElement  // :: this works, it is being treated as the element that has to be rendered. anotherElement(), <anotherElement/> does not work
    // actualReactElem  // :: this how react changes the objects into it's own element

)

function customRender(reactElement, container){
    /*
    const domElem = document.createElement(reactElement.type);
    domElem.innerHTML = reactElement.child;
    domElem.setAttribute('href', reactElement.props.href);
    domElem.setAttribute('target', reactElement.props.target);
    container.appendChild(domElem);
    */

    const domElem = document.createElement(reactElement.type);
    domElem.innerHTML = reactElement.child;
    for (const prop in reactElement.props) {
        if(prop==='child') continue;
        domElem.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElem);
}

const reactElement = {
    type: 'a', 
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    child: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
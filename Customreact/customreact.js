
const root = document.getElementById('root');
const reactElement = {
    type: 'a',
    props:{
        href: 'https://www.example.com',
        target : '_blank'
    },
    children:"click me"
}

function customRender(reactElement, container) {
    // const domelement = document.createElement(reactElement.type);
    // domelement.innerHTML = reactElement.children;
    // domelement.setAttribute('href', reactElement.props.href);
    // domelement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domelement);

    const domelement = document.createElement(reactElement.type);
    domelement.textContent = reactElement.children;
    for (const prop in reactElement.props){
        if(prop== 'children') continue;
        document.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domelement);
} 
customRender(reactElement, root);
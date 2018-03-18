import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component{
    constructor(props){
        super(props)
    }
    render(){ 
        return(
            <h1>Hello Welcome{this.props.name}</h1>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(
    <Person name="Ravindra"/>,app
);
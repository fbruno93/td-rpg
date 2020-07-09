import * as React from 'react';
import './App.css';
import PersonnageJoueur from "./PersonnageJoueurLibrary/PersonnageJoueur";


export default class App extends React.Component<{},any>{
  	renderCharacter(){
  		return <PersonnageJoueur pX={0} pY={0}/>;
  	}
	render(){
		return (
   			<div className="App">
        			{this.renderCharacter()}
    		</div>
  		);
	}
  
}

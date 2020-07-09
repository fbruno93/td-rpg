import * as React from 'react';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import './PersonnageJoueur.css';

export default class PersonnageJoueur extends React.Component<{pX: any, pY: any},any> {
  constructor(props : any){
  	super(props);
  	this.state = {
  		pX : props.pX,
  		pY : props.pY,
  		icon : "personnage",
  	};
  }
  duplicateState(){
    let duplicate = {
      pX : this.state.pX,
      pY : this.state.pY,
      icon : this.state.icon
    }
    return duplicate;
  }
  changePosition(modifX : any , modifY : any){
    let newState = this.duplicateState();
    newState.pX+=modifX;
    newState.pY+=modifY;
    this.setState(newState);
  }
  handleKeyPress = (event :any)=>{
    switch (event.key) {
      case "z":
        this.changePosition(0, -5);
        break;
      case "q":
        this.changePosition(-5, 0);
        break;
      case "s":
        this.changePosition(0, 5);
        break;
      case "d":
        this.changePosition(5, 0);
        break;
    }
  }
	render(){
		return (
       <React.Fragment>
       <KeyHandler
          keyEventName={KEYPRESS}
          keyValue="z"
          onKeyHandle={this.handleKeyPress}
        />
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue="q"
          onKeyHandle={this.handleKeyPress}
        />
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue="s"
          onKeyHandle={this.handleKeyPress}
        />
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue="d"
          onKeyHandle={this.handleKeyPress}
        />
   			<div className="PersonnageJoueur" style={{top: this.state.pY, left : this.state.pX}}>
      			<div>{this.state.icon}</div>
    		</div>
        </React.Fragment>
  		);
	}
  
}

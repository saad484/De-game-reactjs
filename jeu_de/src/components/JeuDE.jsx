import React, { Component } from 'react'

class JeuDe extends Component {
  
    constructor(props){
        super(props);
        this.state={
            face: null,
            nbEssais: 0,
            finJeu: false
        }
    }

    handleClick=()=>{
        let valAlea = Math.floor(Math.random()*6+1);
        this.setState(
            {
                face: valAlea,
                nbEssais: this.state.nbEssais+1
            }
        );
        if (valAlea === this.props.faceGagnate){
            this.setState({
                finJeu: true
            });
        }
    }
    
    handleInit=()=>{
        this.setState({
            face: null,
            nbEssais: 0,
            finJeu: false
        });
    }

    render() {
    return (
      <div>
       <img width={100} src="images/des.png"/>
        <h1>Jeu de Dé ......</h1>
        <h2>Face : {this.state.face}</h2>
        <img width={100} src={this.state.face===null ?  "" 
                                                     :   `images/face${this.state.face}.png`

    }/>
        <h2>Nombre d'essais : {this.state.nbEssais}</h2>
        {
            this.state.finJeu ?
            <div>
            <h2>Bravo Vous Avez Gagnie ...</h2>
            <button onClick={this.handleInit}>Reset</button>
            </div>
            :
            
        <button onClick={this.handleClick}>Jouer...</button>
         }

      </div>
    )
  }
}

export default JeuDe
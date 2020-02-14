import React from "react";
import "./App.css";
import Player from "./Player";

const weapons = ["rock", "paper", "scissor"];
class App extends React.Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  };

  startGame=() => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      })
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  }

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return "OOPS its a TIE";
    } else if (
      (playerOne === "rock" && playerTwo === "scissor") ||
      (playerOne === "scissor" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "Player One Wins";
    } else {
      return "Player Two Wins";
    }
  };

  selectWeapon =(weapons)=>{
    this.setState({
      playerOne:weapons,
      winner :""
    })
  }

  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <div className="App">
        <h1> ROCK PAPER SCISSOR</h1>
        <Player weapon={playerOne} />
        <Player weapon={playerTwo} />
        <button className="WeaponButton" onClick ={()=> this.selectWeapon("rock")}>ROCK</button>
        <button className="WeaponButton" onClick ={()=> this.selectWeapon("paper")}>PAPER</button>
        <button className="WeaponButton" onClick ={()=> this.selectWeapon("scissor")}>SCISSOR</button>
        <div className="Winner">{winner ? this.selectWinner() :null}</div>
        <button className="StartButton" onClick={this.startGame}>
          START
        </button>
      </div>
    );
  }
}

export default App;

import * as React from "react";
import * as ReactDom from "react-dom";
import './index.css';
import { Hello } from "./components/Hello";

export interface SquareProps {
    value: string|null,
    onClick: any
}

// export interface SquareState {
//     value: string|null
// }


// class Square extends React.Component<SquareProps, SquareState>  {
//     // constructor(props: any) {
//     //     super(props);
//     //     this.state = {
//     //         value: null,
//     //     };
//     // }
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }
function Square(props: SquareProps) {
    return (
            <button
                className="square"
                onClick={props.onClick}>
                {props.value}
            </button>
        );
}

// export interface BoardState {
//     squares: Array<string|null>,
//     xIsNext: boolean
// }
export interface BoardState {
    squares: Array<string|null>,
    onClick: any
}
class Board extends React.Component<BoardState>{
    // constructor(props: any){
    //     super(props);
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true,
    //     }
    // }

    // handleClick(i: any){
    //     let squares = this.state.squares.slice();
    //     if(calculateWinner(squares)|| squares[i] != null){
    //         return ;
    //     }
    //     squares[i] = this.state.xIsNext ?'X' : 'O';
    //     this.setState({
    //         squares: squares,
    //         xIsNext: !this.state.xIsNext,
    //     });
    //
    // }
    renderSquare(i: number) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }

    render() {


        return (
            <div>
                {/*<div className="status">{status}</div>*/}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export interface GameState {
    history: Array<any>,
    xIsNext: boolean,
    stepNumber: number,
    
}
class Game extends React.Component<{}, GameState> {
    constructor(props: any) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        }
    }

    handleClick(i: any) {
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if(calculateWinner(squares)|| squares[i] != null){
            return ;
        }
        squares[i] = this.state.xIsNext ?'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });

    }

    jumpTo(step:number) {
        this.setState({
            stepNumber:step,
            xIsNext: (step % 2) ===0,
        })

    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ?
                'Revenir au tour n°'+ move:
                'Revenir au début de la partie';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>

                </li>
            )
        });

        let status;
        if (winner) {
            status = winner + ' a gagné';
        }else {
            status = 'Next player: '+ (this.state.xIsNext ? 'X': 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i:number) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
// ========================================
ReactDom.render(
    <Game/>,
    document.getElementById('root')
);

// ========================================
//tuto typescript react



ReactDom.render(
    <Hello compiler="toto" framework="React" />,
    document.getElementById('example')
);
// shopping list


export interface shoppingProps {
    name: string

}
export class ShoppingList extends React.Component<shoppingProps> {
    render() {
        return (
            <div className="shopping_list">
                <h1>Liste de course pour {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )
    }
}


ReactDom.render(
    <ShoppingList name='marc'/>,
    document.getElementById('example2')
);
function calculateWinner(squares: Array<string|null>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
        // console.log(a, b,c);
        // console.log(squares[a] && squares[a], squares[b] && squares[a],squares[c], squares[a] && squares[a]=== squares[b] && squares[a]);
    }
    // console.log('oye');
    return null;
}

//bizard, peut faire erreur
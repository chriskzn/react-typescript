import React from 'react';
import logo from './logo.svg';
import Message from './Message';
import './App.css';

function App() {
    //let firstValue: string = 'Manny';
    //let firstValue: number = 34;
    //let firstValue: boolean = true;
    //let firstValue: number[] = [2, 3, 56];
    //let firstValue: Array<number> = [2, 3, 56];
    //let firstValue: Array<string> = ['2', '3', 'Manny'];

    //tuple
    // let aTuple: [string, number] = ['Manny', 34];
    // enum
    // enum Codes {first = 1, second = 2};
    // any
    // let firstName: any = 'Manny';
    // void
    // const warning = (): void => {
    //   console.log('Warning');
    // }

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       {/* The value {firstValue} is of { typeof firstValue } type! */}
      //       {/* The value {aTuple[0]} is of {typeof aTuple[0]} type! */}
      //       {/* The value {aTuple[1]} is of {typeof aTuple[1]} type! */}
      //       The value {firstName} is of {typeof firstName} type!
      //     </p>
      //   </header>
      // </div>
      <div>
      <h1>Typescript is cool</h1>
      <Message name='Manny' message='This is a cool message' />
      </div>
    );
}

export default App;

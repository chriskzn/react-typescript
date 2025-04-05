import React, {useState, useEffect, use} from 'react';
//import logo from './logo.svg';
import Message from './Message';
import { UserContext } from './UserContext';  
import './App.css';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('User');
  const [userMessage, setUserMessage] = useState<string>('This is the initial message');

  useEffect(() => {
    const timer = setTimeout(() => {
      // update the state after 5 seconds
      setUserName('John Doe');
      setUserMessage('Updated message with Typescript');
    }
    , 5000);
    return () => clearTimeout(timer);
  }, []);

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
      // <div>
      // <h1>Typescript is cool</h1>
      // <Message name={userName} message={userMessage} />
      // </div>

      <UserContext.Provider value={{ name:  userName, message: userMessage }}>
      <h1>Typescript is cool</h1>
      <Message />
      </UserContext.Provider>
    );
}

export default App;

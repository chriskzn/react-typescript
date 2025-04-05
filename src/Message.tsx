import React, {useContext} from "react";
import { UserContext } from './UserContext' ;

// interface UserMessage {
//     name: string;
//     message: string;    
// }

// const Message:  React.FC<UserMessage> = ({ name, message }) => {
//   return (
//     // <div></div>
//     <p>{name}, {message}</p>
//     );
// }

const Message:  React.FC = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('User context must be used within a UserProvider');
    }
    return (
        <p>{context.name}, {context.message}</p>
    );
};

export default Message;
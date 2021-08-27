import React from 'react';
import { useState } from 'react';

interface ChildrenProps {
    children: React.ReactChild | React.ReactNode,
}

const Card:React.FC<ChildrenProps> = ({children}) => {
    const [state, setCurrentState] = useState(0)


    return (
        <div className="users">
            {children}
        </div>
    );
};

export default Card;
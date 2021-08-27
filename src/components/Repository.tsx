import React from 'react';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { I_Users } from '../types';

interface PersonProps {
    person: I_Users;
    // ToProfile: (user: I_Users) => void
}

const User:FC<PersonProps> = ({person}) => {
    return (
       <div >
        <div className="users__person">
            <div className="user__person--img">
                {person.repo?.reponame}
            </div>
            <div className="users__person--info">
                <p><b>Forks:</b> {person.repo?.forks}</p>
                 <p><b>Starts:</b> {person.repo?.stars}</p>
            </div>

        </div>
       </div>
    );
};

export default User;
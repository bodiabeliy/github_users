import { Paper } from '@material-ui/core';
import React from 'react';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { I_Users } from '../types';

interface PersonProps {
    person: I_Users;
    ToProfile: (user: I_Users) => void
}

const User:FC<PersonProps> = ({person, ToProfile}) => {
    return (
       <div onClick={() => ToProfile(person)}>
        <div className="users__person">
            <div className="user__person--img">
                <img className="user__person--image" src={person.image} alt="" />
            </div>
            <div className="users__person--info">
                <p>{person.username}</p>
                
            </div>
            <div className="users__person--repo">
                <p>{person.repo.reponame}</p>
            </div>
        </div>
       </div>
    );
};

export default User;
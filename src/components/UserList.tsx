import React from 'react';
import { FC } from 'react';
import { I_Users } from '../types';
import { useHistory } from 'react-router-dom';
import User from './User'

interface UserListProps {
   users: I_Users[]
}

const UserList:FC<UserListProps> = ({users}) => {
    const history = useHistory()
    return (
        <div className="users__card">
         {users.map(user => 
            <User ToProfile={() => history.push('/user/' + user.id)} key={user.id} person={user}/>
         )}
        </div>
    );
};

export default UserList;
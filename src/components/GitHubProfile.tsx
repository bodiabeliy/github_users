import React from 'react';
import { FC } from 'react';
import { useState, useEffect } from 'react';
import { I_Users } from '../types';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import RepoList from './RepoList'
import { Button, Paper } from '@material-ui/core';


interface UserProps {
    id: string
}

const GitHubProfile:FC = () => {
    const [users_, setUsers] = useState<I_Users[]>([])

    const [user, setUser] = useState<I_Users | null>(null)
    const params = useParams<UserProps>()
    const history = useHistory()

    useEffect(() => {
        FectchUser()
        FectchUsers()
    }, [])
    async function FectchUsers() {
        try {
          const responce = axios.get<I_Users[]>(`http://localhost:3000/github-users/`)
          setUsers((await responce).data)
        }
        catch(e) {
          alert(e)
        }
    
      }
  
    async function FectchUser() {
      try {
        const responce = axios.get<I_Users>('http://localhost:3000/github-users/' + params.id)
        setUser((await responce).data)
      }
      catch(e) {
        alert(e)
      }
  
    }
  

    return (
        <div>
            <div className="profile__user">
                <Paper className="profile__user-img">
                    <img src={user?.image} alt={user?.username} />
                </Paper>
                <Paper className="profile__user-info">
                   <b>Username:</b> {user?.username}
                   <b>Location:</b>  {user?.location}
                </Paper>
               
            </div>
            <Button variant="outlined" color="primary" onClick={() => history.push('/')}>To users</Button>

            <h2></h2>
            <RepoList users ={users_}></RepoList>

        </div>
    );
};

export default GitHubProfile;
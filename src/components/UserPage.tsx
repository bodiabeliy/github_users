import React from 'react';
import { FC } from 'react';
import { I_Users } from '../types';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import { Button, TextField } from '@material-ui/core';

const UserPage:FC = () => {

    const [users_, setUsers] = useState<I_Users[]>([])
    const [search, setSearch] = useState<string>('')

    const SearchHendler =(event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    const Searching =(e:React.MouseEvent<HTMLButtonElement>) => {
        console.log(search);
        
    }
//   const users: I_Users[] =[
//     { id:1, username:'MechislavBelyaev374', image:'https://randus.org/photos/m/c389bd8bbfff9f00.jpg'},
//     { id:2, username:'VissarionMahov537', image:'https://randus.org/photos/m/00387c7c7e7c3c7c.jpg'},
//     { id:3, username:'EvaBykova834',  image:'https://randus.org/photos/w/2c8c9cbebf3e9c9c.jpg'},
//   ]
    useEffect(() => {
        const query = encodeURIComponent(search)
        // console.log('search query = ' ,query);
        
      FectchUsers()
    }, [users_])
  
    async function FectchUsers() {
      try {
        const responce = axios.get<I_Users[]>(`http://localhost:3000/github-users/?search=${search}`)
        setUsers((await responce).data)
      }
      catch(e) {
        alert(e)
      }
  
    }
  

    return (
        <div className="center" style={{marginTop:"100px"}}>
            <TextField 
                value={search}
                type="text" 
                onChange={SearchHendler} label="Standard" 
            />
            <Button 
                onClick={Searching} 
                variant="contained" 
                color="secondary">
                 Search
            </Button>
            <UserList users ={users_}/>
        </div>
    );
};

export default UserPage;
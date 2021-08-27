import React from 'react';
import UserPage from './components/UserPage';
import GitHub from './components/GitHubProfile';
import {BrowserRouter, Route,} from 'react-router-dom'
import { Toolbar, AppBar, Typography } from '@material-ui/core';
const App = () => {
  // const users: I_Users[] =[
  //   { id:1, username:'MechislavBelyaev374', image:'https://randus.org/photos/m/c389bd8bbfff9f00.jpg'},
  //   { id:2, username:'VissarionMahov537', image:'https://randus.org/photos/m/00387c7c7e7c3c7c.jpg'},
  //   { id:3, username:'EvaBykova834',  image:'https://randus.org/photos/w/2c8c9cbebf3e9c9c.jpg'},
  // ]



  return (
   <div>
      <AppBar style={{marginBottom:"100px"}}>
          <Toolbar>
            <Typography variant="h6">GitHub Searcher</Typography>
          </Toolbar>
        </AppBar>
      <BrowserRouter>
      <Route path='/' exact>
        <UserPage></UserPage>
      </Route>
      <Route path='/user/:id' >
        <GitHub></GitHub>
      </Route>
    </BrowserRouter>
   </div>
  );
};

export default App;
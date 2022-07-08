// let's go notes

//npx create-react-app my-app --template @appacademy/react-v17 --use-npm

// cd my-app && npm install --save react-router-dom@^5.1.2


//npm start


//./src/index.js
import {BrowserRouter} from 'react-router-dom';



//./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};


// ./src/index.js

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
)


// ROUTE COMPONENT

//./src/index.js

import React from 'react' ;
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Uswers from './components/Users';

const Root1 = () => {
  return (
    <BrowserRouter>
      <div>
        {/* TODO: Routes */}
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root'),
)



//LET'S CREATE SOME ROUTES

//./src/index.js

//...

const Root24 = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/">
          <App />
        </Route>
      </div>
    </BrowserRouter>
  );
};

//...


// ./src/index.js

const Root0980979 = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path ="/">
          <App />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </div>
    </BrowserRouter>
  )
}


//EXACT PROP

// <Route exact path="/">
//   <App/>
// </Route>
// <Route path="/users">
//   <Users/>
// </Route>


//PATH PARAMS AND USEPARAMS

<Route path="/users/:userId">
  <Profile />
</Route>

import React from 'react';
import {useParams} from 'react-router-dom';

function Example() {
  const params = useParams();
}


//// ./src/components/Profile.js

import React from "react";
import {useParams} from 'react-router-dom';

const Profile = () => {
  const params = useParams();
  const {userId} = params;

  return <h1> Hello from User Profile {userId}!</h1>
}

export default Profile;


//FINISHED WITH ROUTER INTRODUCTION

//START NAVIGATION WEEK 14
/* how can users navigate routes? link navLink and Redirect components and useHistory hook can help

Link or NavLink to create links with relative paths to routes in app

redirect to redirect user to another path

useHistory hookk to update a browser's URL*/


//LINK

//./src/index.js

import {BrowserRouter, Route, Link} from 'react-router-dom';

//link can take two props -- to and onClick

//./src/index.js
//...

const Root2031980498 = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">App</Link>
        <Link to="/users">Users</Link>
        <Link to="/users/1">Bobo's Profile</Link>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path ="/users/:userId">
          <Profile />
        </Route>
      </div>
    </BrowserRouter>
  );
};

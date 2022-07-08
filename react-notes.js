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
  //click handler function
  const handleClick = () => {
    console.log('Thanks for clicking!')
  };
  return (
    <BrowserRouter>
      <div>
        <Link to="/">App</Link>
        <Link to="/users">Users</Link>
        <Link to="/users/1">Bobo's Profile</Link>
        <Link to="/" onClick={handleClick}>App with click handler</Link>

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


//NavLink

/** NavLink works just like a <Link> but iwth a little extra functionality. it has the ability to add extra styling when the path it links to matches the current path. This makesit an ideal choice for a navigation bar, hence thename. This styling can be controlled by three extra props:  activeClassNamve, activeStyl, and exact.  being by updating your imports from react-router-dom */

import {BrowserRouter, Route, Navlink} from 'react-router-dom';

/** the active classname prop of the NavLink component allows you to set a CSS class name for sytling the NavLink when its route is active. By default, the activeClassname is set to active. This means that you simply need to add an .active class to yoru CSS file to add active styling to your link. A NavLink will be active if its to prop path m atches the current URL */

//CSS FILE
/**
 *
 *
 *
 .active{
   font-weight:bold;
  }

.red {
  color:red;
  font-size: 30px;
}

.blue {
  color: blue;
  font-size: 30px;
}

.green {
  color: green;
  font-size: 30px;
}
*/


// <NavLink to="/" exact={true} activeStyle={{ fontWeight: "bold" }}>App</NavLink>

// <NavLink to="/" exact onClick={handleClick}>App with click handler</NavLink>


//SWITCHING BETWEEN ROUTES

const Root3029483209409 = () => {
  const handleClick = () => {
    console.log("Thanks for clicking")
  };

  return (
    <BrowserRouter>
      <div>
        <NavLink to="/" exact={true} activeStyle={{ fontWeight: "bold"}}>App</NavLink>
        <NavLink activeClassName="red" to="/users">Users</NavLink>
        <NavLink activeClassName="blue" to="/hello">Hello</NavLink>
        <NavLink activeClassName="black" to="/users/1">Bobo's Profile</NavLink>
        {/* NavLink with onClick prop */}

        <NavLink to="/" exact onClick={handleClick}>App with click handler</NavLink>

        <Switch>
          <Route exact path="/">
            <App/>
          </Route>

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/users/:userId">
            <Profile />
          </Route>

          <Route>
            <h1>404: Page not found</h1>
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
};

/** Now you have control over the precedence of rendered components  jsx of the last route will be rendered whenever the browser attempts to visit an undefined route*/



//REDIRECTING USERS

//redirect only takes one prop: to. When it renders it replaces the current URL with the value of its to prop.

// ./src/components/Profile.js

import React from "react";
import { Redirect, useParams } from 'reat-router-dom';

const Profile21321241 = () => {
  const params = useParams();
  const {userId} = params;

  if (userId === "0") return <Redirect to="/" />

  return <h1>Hello from User Profile {userId}!</h1>
}

// export default Profile21321241;


//USEHISTORY

//push adds a new URL to the end of the history stack ; clicking the back button will take the browser tot he prev URL. URL only shows up on the stack once, useless to push multiple times;
//replace replaces the current URL on the history stack, so the back button won't return you to the current URL


import {useHistory} from 'react-router-dom';

export default function Example() {

  //history obj is returned from useHistory hook and has various methods
  const history = useHistory();

  //push a new url(and adding to the end of the history stack);
  const handleclick = () => history.push('/some/url/bobo');

  //
}

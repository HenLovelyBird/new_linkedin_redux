import React from 'react';
import {Button} from 'reactstrap'
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
     <Button color="primary" size="large" style={{alignSelf: "center"}}><Link>Enter Your Profile Page</Link></Button>
    </div>
  );
}

export default App;

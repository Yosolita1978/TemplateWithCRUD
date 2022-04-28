import './App.css';
import Login from './components/login';
import Students from './components/students';
import Weather from './components/weather';
import { useState, useEffect } from "react";

function App() {

  const [user, setUser] = useState(undefined);

    const loadUser = () =>{
        fetch("/api/me")
        .then((response) =>{
            if(response.status === 200){
                return response.json()
            } else{
                return undefined;
            }
        })
        .then(user =>{
            setUser(user);
        })
    };

    useEffect(() =>{
        loadUser();
    }, []);

  return (
    <div className="App">
      Hello from Techtonica!
      <Login user={user} />
      <Students />
      {user ? <Weather /> : (<h3>Please loggin to use our services</h3>) }
      
    </div>
  );
}

export default App;

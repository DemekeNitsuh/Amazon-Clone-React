
import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login";
 import { auth } from "./firebase";
 import React, { useEffect } from "react";
 import { useStateValue } from "./StateProvider";
import Payment from "./Payment"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise= loadStripe(
  'pk_test_51Kdd4zBtzzv713WZwia7Ip5QvLvDV99tIB8pigzVwEHZ9rvnGeZcFKXKuyaub5A1o4ltgOl5YJ2CHZzqAiOE6SWE00GEk5ejHi'
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="App">
   < Routes>
 
     < Route path="/"element={<>
      <Header/>
       <Home/>
     </>}
        />

< Route path="/orders"element={<>
      <Header/>
       <Orders />
     </>}
        />
       < Route path="/Checkout" element={<>
    <Header/>
       <Checkout/>
   </>}/>
    < Route path="/login" element={<Login/>}/> 
     

      < Route path="/Payment" element={<>
       <Elements stripe={promise}>
              <Payment />
            </Elements>
   </>}/>
       </Routes>
    </div>
    </Router>
  );
}
export default App;







//Hosting URL: https://clone-2f003.web.app

// https://clone-2f003.web.app
















//https://www.linkedin.com/in/nitsuh-demeke-1535b4234/
//    <Route path="/" element={<>
          

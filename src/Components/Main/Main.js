import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Main = () => {
    const [friends,setFriends] = useState([]);
  
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data=>setFriends(data));
    },[]);
    return (
        <div>
                <h1>friend</h1>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }
        </div>
    );
};

export default Main;
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default function Cato(){
    const [categories, setcategories] = useState([]);
    const [tp, settp] = useState('null');
    useEffect(() => {
      
      myfunc()
    });

    function myfunc(){
    
        var token= 'BQASLt-WOIoxUi05fyzPP0pAK1noWGUGOj1v6_2A6wzGKbW2aeukpjVJXUTnZj4mAPN7Llp1S5raIk3fWxKeit4Iq0v-h5sebZhQXahL4VYUn2k_HU_A5RJyRaziKEvd_nnPxLU6G3eA7RThYeZsyC1z7_lSyrFbRzkB4PyZyT5uKqaSCd4';
        // console.log("function called succesfully");
        fetch('https://api.spotify.com/v1/browse/categories',{
          method: 'get', 
          headers: new Headers({
        'Authorization': `Bearer ${token}`, 
        })})
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setcategories(data.categories.items);
        })

    }
    let history = useHistory();
    function handleClick(id){
        console.log("asdasd :",id)
        history.push({
          pathname: '/playlists',
          state: id
        });
    }

return (
    <div>
      <div style={{'margin-left':'50%'}}>
      <h1>All Categories</h1>
      </div>
      <ul>
      {categories.map(x=>(
        <div style={{'margin-left':'50%'}}>
          <li><button style={{'width':'20%'}} onClick={()=>{handleClick(x['id'])}} > {x['name']}</button></li>
        </div>
      ) ) }
      </ul>
    </div>
)
}
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Cato from './categories.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Allsongs(props){
        
    const [single_category, setsingle_category] = useState('');
    const [playlists, setplaylists] = useState([]);
        useEffect(() => {
            
            myfunc(); 
        },[playlists]);

        async function myfunc(){
            
            console.log("kaam hui gawa ",props.location.state);
            setsingle_category(props.location.state);
            let temp=JSON.stringify(props.location.state)
            temp="timepass"
            var token= 'BQASLt-WOIoxUi05fyzPP0pAK1noWGUGOj1v6_2A6wzGKbW2aeukpjVJXUTnZj4mAPN7Llp1S5raIk3fWxKeit4Iq0v-h5sebZhQXahL4VYUn2k_HU_A5RJyRaziKEvd_nnPxLU6G3eA7RThYeZsyC1z7_lSyrFbRzkB4PyZyT5uKqaSCd4';
            console.log("single categorywaaaa",single_category,temp);
            fetch(`https://api.spotify.com/v1/browse/categories/${temp}/playlists`,{
            method: 'get', 
            headers: new Headers({
            'Authorization': `Bearer ${token}`, 
            })})
            .then(response => response.json())
            .then(data => {
        //   console.log("kya hai type :",typeof(data.playlists.items));
        //   console.log("aage batao :",data.playlists.items);
        //   setplaylists(data.playlists.items);
            if (data.playlists && data.playlists.items)
            {
                setplaylists(data.playlists.items);
                // console.log('')
            }
        
        })
        }

    return(
        <div>
            <div style={{'margin-left':'50%'}}>
             <h1>Playlists in {single_category}</h1>
            </div>
            {playlists.map(x=>(
                <div style={{'margin-left':'50%'}}>
                {x['name']}
                </div>
            ))}
        </div>
    )
}
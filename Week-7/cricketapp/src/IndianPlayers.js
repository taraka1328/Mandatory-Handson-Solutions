import React from 'react';
const IndianPlayers = () =>{
    const T20players = ['Virat','Rohit', 'Pant', 'Surya', 'Bumrah'];
    const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Ishant', 'Saha', 'Jadeja'];
    const allPlayers = [...T20players, ...RanjiTrophyPlayers];
    const oddPlayers = allPlayers.filter((_,index)=> index % 2 ===0);    
    const evenPlayers = allPlayers.filter((_,index)=> index % 2 !==0);
    return (
        <div>
            <h2>Indian Players</h2>
            <h3>Merged Team(T20 + Ranji Trophy)</h3>
            <ul>
                {allPlayers.map((player,index) => (
                    <li key={index}>{player}</li>) )}
            </ul>
            <h3>Odd Team Players</h3>
            <ul>
                {oddPlayers.map((player,index) => (
                    <li key={index}>{player}</li>) )}
            </ul>
            <h3>Even Team Players</h3>
            <ul>
                {evenPlayers.map((player,index) => (
                    <li key={index}>{player}</li>) )}
            </ul>
        </div>
    );
}
export default IndianPlayers;
import React from 'react';
const ListofPlayers = () => {
    const players = [
        {name: 'Virat' , score: 90},
         { name: 'Rohit', score: 60 },
        { name: 'Dhawan', score: 45 },
        { name: 'Pant', score: 75 },
        { name: 'Jadeja', score: 30 },
        { name: 'Ashwin', score: 85 },
        { name: 'Bumrah', score: 50 },
        { name: 'Rahul', score: 95 },
        { name: 'Kohli', score: 100 },
        { name: 'Shreyas', score: 40 },
        { name: 'Surya', score: 70 },
    ];
    const players70 = players.filter(player => player.score <= 70);
    return (
        <div>
            <h2>All Players</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
            <h3>Players with Score less than or equal to 70:</h3>
            <ul>
                {players70.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ListofPlayers;
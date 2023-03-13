import React from "react";

const myStyle = {
    color: '#191970',
    fontSize: '20px',
    fontFamily: "monospace",
    fontWeight: 'bold',
    backgroundColor: '#D8BFD8',
    width: '600px',
    padding: '10px'
};

const aTagStyle = {
    'textDecoration': 'none',
    margin: '3px'
};


export default function Index(props) {
    return (
        <div style={myStyle}>
            <h1 style={{ textAlign: 'center' }}>See All The Pokemon!</h1>
            <ul>
                {props.pokemon.map((item, index) =>
                    <a href={`/pokemon/${index}`} style={aTagStyle}>
                        <li key={index}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</li>
                    </a>
                )}
            </ul>
        </div>
    )
}
// Filename - App.js

import React, { useState } from "react";
import "./App.css";

const App = () => {
	
	const [counter, setCounter] = useState(0);


	const handleClick1 = () => {
		setCounter(counter + 1);
    console.log('state is changed');
	};


	const handleClick2 = () => {
		setCounter(counter - 1);
	};

	return (
    
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "300%",
				position: "absolute",
				width: "100%",
				height: "100%",
				// top: "-15%",
			}}
		>
			Counter App
			<div className="counter"
				style={{
					fontSize: "120%",
					position: "relative",
					top: "10vh",
				}}
			>
				{counter}
			</div>
			<div className="buttons">
      <button
					style={{
						fontSize: "60%",
						position: "relative",
						top: "20vh",
						margin: "5px",
						backgroundColor: "red",
						borderRadius: "30%",
						color: "white",
            border:'none',
           
					}}
					onClick={handleClick2}
				>
					Decre
				</button>
        
				<button
					style={{
						fontSize: "60%",
						position: "relative",
						top: "20vh",
						marginRight: "5px",
						backgroundColor: "green",
						borderRadius: "30%",
						color: "white",
            border:'none'
					}}
					onClick={handleClick1}
				>
					Add
				</button>
			
			</div>
		</div>
	);
};

export default App;

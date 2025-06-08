import React, { useState } from 'react';

const Die: React.FC = () => {
	const [value, setValue] = useState<number>(1);

	const rollDie = () => {
		const newValue = Math.floor(Math.random() * 6) + 1;
		setValue(newValue);
	};

	return (
		<div style={{ textAlign: 'center', padding: '20px' }}>
			<button
				onClick={rollDie}
				style={{
					marginTop: '20px',
					padding: '10px 20px',
					fontSize: '16px',
					cursor: 'pointer',
				}}
			>
			<div
				style={{
					fontSize: '48px',
					fontWeight: 'bold',
					width: '100px',
					height: '100px',
					lineHeight: '100px',
					border: '2px solid black',
					borderRadius: '8px',
					margin: '0 auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{value}
			</div>
			</button>
		</div>
	);
};

export default Die;
import { useState, CSSProperties } from "react";


export function User() {
	const [userName, setUserName] = useState("");
	const [birthday, setBirthday] = useState("");

	const handleChangeUserName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setUserName(event.currentTarget.value);
	};
	const handleChangeBirthday: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setBirthday(event.currentTarget.value);
	};
	const handleClickReset: React.MouseEventHandler<HTMLButtonElement> = () => {
		setUserName("");
		setBirthday("");
	};

    const containerStyle: CSSProperties = {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '300px',
        margin: '20px auto',
        fontFamily: 'sans-serif',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const inputContainerStyle: CSSProperties = {
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'column',
    };

    const labelStyle: CSSProperties = {
        marginBottom: '5px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#333',
    };

	const inputStyle: CSSProperties = {
		padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '14px',
	};

	const buttonStyle: CSSProperties = {
		padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        width: '100%',
        marginTop: '10px',
	};

	return (
		<div style={containerStyle}>
            <div style={inputContainerStyle}>
			    <label style={labelStyle}>
				    Name
                </label>
				<input type="text" value={userName} onChange={handleChangeUserName} style={inputStyle} placeholder="Enter your name"/>
            </div>
            <div style={inputContainerStyle}>
			    <label style={labelStyle}>
				    Birthday
                </label>
				<input type="text" value={birthday} onChange={handleChangeBirthday} style={inputStyle} placeholder="YYYY-MM-DD"/>
            </div>
			<button onClick={handleClickReset} style={buttonStyle}>Reset</button>
		</div>
	)
}

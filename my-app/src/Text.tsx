import React, { CSSProperties } from 'react';

const inputStyle: CSSProperties = {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    margin: '5px 0',
    width: 'calc(100% - 22px)',
};

const readOnlyInputStyle: CSSProperties = {
    ...inputStyle,
    backgroundColor: '#f1f1f1',
    cursor: 'not-allowed',
};

export function ReadOnlyText() {
	const text = "Foo";
	const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = () => { };

	return <input type="text" value={text} onChange={handleTextChange} style={readOnlyInputStyle} readOnly />

}

export function WriteableText() {
	const [text, setText] = React.useState("Foo");
	const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setText(event.currentTarget.value);
	};

	return <input type="text" value={text} onChange={handleTextChange} style={inputStyle} />

}

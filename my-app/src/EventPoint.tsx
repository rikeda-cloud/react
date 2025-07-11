import React from "react";


export function EventPoint() {
	const [screen, setScreen] = React.useState({ x: 0, y: 0 });
	const [page, setPage] = React.useState({ x: 0, y: 0 });
	const [client, setClient] = React.useState({ x: 0, y: 0 });
	const [offset, setOffset] = React.useState({ x: 0, y: 0 });

	const handleMousemove = (e: React.MouseEvent<HTMLDivElement>) => {
		setScreen({ x: e.screenX, y: e.screenY });
		setPage({ x: e.pageX, y: e.pageY });
		setClient({ x: e.clientX, y: e.clientY });
		setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
	}

	return (
		<div onMouseMove={handleMousemove}>
			screen: {screen.x}, {screen.y} <br />
			page: {page.x}, {page.y} <br />
			client: {client.x}, {client.y} <br />
			offset: {offset.x}, {offset.y} <br />
		</div>
	)
}

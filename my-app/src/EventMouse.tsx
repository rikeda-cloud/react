import React from 'react';

export function EventMouse() {
	const beforeSrc = "https://www.web-deli.com/image/linkbanner_l.gif";
	const afterSrc = "https://www.web-deli.com/image/home_chara.gif";
	const [current, setCurrent] = React.useState(beforeSrc);

	const handleEnter = () => setCurrent(afterSrc);
	const handleLeave = () => setCurrent(beforeSrc);
	return (
		<img src={current} alt={"IMG"} onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
	);
}

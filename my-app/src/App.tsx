import './App.css';
import { Clock } from "./Clock";
import { EventBasic } from "./EventBasic";
import { CountParent } from "./CountParentChild";
import { EventMouse } from "./EventMouse";

function App() {
	return (
		<div>
			<Clock />
			<EventBasic type="date" />
			<EventBasic type="time" />
			<EventBasic />
			<CountParent />
			<EventMouse />
		</div>
	);
}

export default App;

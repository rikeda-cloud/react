import './App.css';
import { Clock } from "./Clock";
import { EventBasic } from "./EventBasic";
import { CountParent } from "./CountParentChild";

function App() {
	return (
		<div>
			<Clock />
			<EventBasic type="date" />
			<EventBasic type="time" />
			<EventBasic />
			<CountParent />
		</div>
	);
}

export default App;

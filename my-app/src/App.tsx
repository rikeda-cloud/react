import './App.css';
import { Clock } from "./Clock";
import { EventBasic } from "./EventBasic";

function App() {
	return (
		<div>
			<Clock />
			<EventBasic type="date" />
			<EventBasic type="time" />
			<EventBasic />
		</div>
	);
}

export default App;

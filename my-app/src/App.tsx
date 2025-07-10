import './App.css';
import { Clock } from "./Clock";
import { UnControlForm } from "./UnControlForm";
import { ControlForm } from "./ControlForm";

function App() {
	return (
		<div>
			<Clock />
			<UnControlForm />
			<ControlForm />
		</div>
	);
}

export default App;

import './App.css';
import FormOrder from './components/FormOrder';
import Section1 from './components/Section1';
import Section108 from './components/Section108';
import Section157 from './components/Section157';
import Section52 from './components/Section52';
import Section60 from './components/Section60';
import Section83 from './components/Section83';

function App() {
	return (
		<div className="container">
			<Section1 />
			<Section52 />
			<Section60 />
			<Section83 />
			<Section108 />
			<Section157 />
			<FormOrder />
		</div>
	);
}

export default App;

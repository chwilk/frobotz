import logo from './logo.svg';
import './App.css';

function NodeView({nodes}) {

  return (
    <table>
    </table>
  )

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Node Overview
        </p>
      </header>
      <NodeView />
    </div>
  );
}

const NODES = [
  { name: "c1", location: "rack1", cpu: 32, cpu_used: 32},
  { name: "c2", location: "rack1", cpu: 32, cpu_used: 24},
  { name: "c3", location: "rack1", cpu: 32, cpu_used: 16},
  { name: "c4", location: "rack1", cpu: 32, cpu_used: 0},
  { name: "c5", location: "rack1", cpu: 32, cpu_used: 0},
  { name: "c6", location: "rack2", cpu: 32, cpu_used: 4},
  { name: "c7", location: "rack2", cpu: 32, cpu_used: 0},
  { name: "c8", location: "rack2", cpu: 32, cpu_used: 0},
  { name: "c9", location: "rack2", cpu: 32, cpu_used: 0},
  { name: "c10", location: "rack2", cpu: 32, cpu_used: 0}
];

export default App;

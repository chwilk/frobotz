import logo from './logo.svg';
import './App.css';

function NodeView({nodes}) {
  const heads = [];
  const rows = [];
  
  let locs = new Set(nodes.map(({ location }) => ( location )));
  
  locs.forEach((l) => {
    heads.push(
      <th>{l}</th>
    )
  });
  
  return (
    <table>
      <thead>
        <tr>{heads}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function App() {

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

  return (
    <div className="App">
      <p>
        Node Overview
      </p>
      <NodeView nodes={NODES} />
    </div>
  );
}


export default App;

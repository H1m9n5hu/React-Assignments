import './App.css';
import Pagination from './Components/Pagination';

function App() {
  const data = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8'];

  return (
    <div className="App">
      <h1>Pagination Example</h1>
      <Pagination data={data} itemsPerPage={3} />
    </div>
  );
}

export default App;

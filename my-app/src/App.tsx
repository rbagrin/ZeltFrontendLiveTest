import './App.css';
import { Card, CardHeader } from '@mui/material';
import { HomePage } from './pages/home';

function App() {
  return (
    <div className="App">
      <Card><CardHeader title="Hello there" /></Card>
      <HomePage />
    </div>
  );
}

export default App;

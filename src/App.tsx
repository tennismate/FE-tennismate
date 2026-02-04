import Header from './components/Header';
import Weather from './components/Weather';
import './App.css';

function App() {
  return (
    <div className="App" style={{ 
      backgroundColor: '#f5fdf5', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      {/* 컴포넌트들 조립 */}
      <Header />
      <Weather />
    </div>
  );
}

export default App;
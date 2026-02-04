// src/components/Header.tsx
const Header = () => {
  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '400px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: '20px' 
    }}>
      <h1 style={{ color: '#2ecc71', margin: 0, fontSize: '24px' }}>Tennismate🎾</h1>
      <button style={{ 
        padding: '8px 16px', 
        borderRadius: '10px', 
        border: '1px solid #2ecc71', 
        backgroundColor: 'white', 
        color: '#2ecc71', 
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Log in
      </button>
    </div>
  );
};

export default Header;
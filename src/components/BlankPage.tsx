import { useNavigate } from 'react-router-dom';

export default function BlankPage() {
  const navigate = useNavigate();

  const handleEnterWebsite = () => {
    navigate('/home');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#697ea4', // Same background as login screen
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
    }}>
      {/* You can add content here later */}
      <div style={{
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontFamily: 'Playfair Display, serif',
          fontWeight: '500',
          margin: '0 0 1rem 0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Welcome to TaskMatch!
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          opacity: 0.9,
          margin: '0 0 2rem 0'
        }}>
          Your account has been created successfully.
        </p>
        
        <button
          onClick={handleEnterWebsite}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontWeight: '600',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#007bff';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Enter TaskMatch Website
        </button>
      </div>
    </div>
  );
}

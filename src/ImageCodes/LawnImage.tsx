import LawnWorkImage from '../Images/LawnWorkImage.png';

export default function LawnImage({ color = '#fff' }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',            // fill its parent
        aspectRatio: '16 / 9',    // keeps a 16:9 ratio – change to whatever you need
        backgroundImage: `url(${LawnWorkImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: '10%',                  // 10% up from bottom
          left: '5%',                     // 5% in from left
          right: '20%',                   // 20% from right edge
          fontFamily: '"Irish Grover", cursive',
          // Scales between 2rem and 6.5rem depending on viewport width:
          fontSize: 'clamp(2rem, 5vw, 6.5rem)',
          color,
          textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
          lineHeight: 1.1,
        }}
      >
        Hire Local Students for Your Home Projects!
      </div>
    </div>
  );
}


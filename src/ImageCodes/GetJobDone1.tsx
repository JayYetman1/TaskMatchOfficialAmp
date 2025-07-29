import GetJobDone from '../Images/GetJobDone.jpeg';

export default function GetJobDoneImage({
  // Optional width (e.g. "30%" or "300px")
  width = '100%',
  // Optional minWidth to prevent it getting too small
  minWidth = '10px',
  // Optional maxHeight if you want to preserve aspect
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        minWidth,           // ← added minWidth control
        borderRadius: 20,
        overflow: 'hidden',
      }}
    >
      <img
        src={GetJobDone}
        alt="Get job done"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}




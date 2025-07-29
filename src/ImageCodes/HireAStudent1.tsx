import HireAStudent from '../Images/HireAStudent.jpeg';

export default function HireAStudentImage({
  width = '100%',
  minWidth = '10px',

}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        minWidth, 
        borderRadius: 20,
        overflow: 'hidden',
      }}
    >
      <img
        src={HireAStudent}
        alt="Hire a student"
        style={{
          width: '100%',
          height: 'auto',      // maintains aspect ratio
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  );
}





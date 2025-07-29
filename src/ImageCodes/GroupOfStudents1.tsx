import GroupOfStudents from '../Images/GroupOfStudents.png';

interface GroupOfStudentsProps {
  width?: string;
  minWidth?: string;
  outerMargin?: string;
  borderRadius?: string;

}

export default function GroupOfStudents1({
  width = '100%',
  minWidth = '10px',
  outerMargin = '0',
  borderRadius = '40px',
}: GroupOfStudentsProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        minWidth,
        margin: outerMargin,
        borderRadius,
        overflow: 'hidden',
      }}
    >
      <img
        src={GroupOfStudents}
        alt="Group of students"
        style={{
          width: '110%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

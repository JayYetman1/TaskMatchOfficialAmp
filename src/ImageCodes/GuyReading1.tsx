import GuyReadingImage from '../Images/GuyReading.jpg';

export default function GuyReading({
  width = '100%',
  minWidth = '10px',
  /** outer margin to push the image in from edges */
  outerMargin = '0',
  /** corner rounding */
  borderRadius = '0px',
}) {
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
        src={GuyReadingImage}
        alt="Guy reading"
        style={{
          width: '110%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

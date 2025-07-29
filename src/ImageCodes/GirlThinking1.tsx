import GirlThinking1 from '../Images/GirlThinking.jpg';

export default function GirlThinking({
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
        src={GirlThinking1}
        alt="Girl thinking"
        style={{
          width: '110%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
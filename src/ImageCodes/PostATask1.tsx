import PostingATask from '../Images/PostATask.jpeg';

export default function PostATaskImage({
  // Parent controls width: e.g. "100%", "200px", "30vw", etc.
  width = '100%',
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        borderRadius: 20,
        overflow: 'hidden',
      }}
    >
      <img
        src={PostingATask}
        alt="Post a task"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  );
}

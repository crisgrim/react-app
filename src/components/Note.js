export const Note = ({ content }) => {
  const date = new Date(content.date).toLocaleDateString();
  return (
    <li>
      <h2>{content.content}</h2>
      <p>{date}</p>
      <p>{content.important}</p>
    </li>
  );
};

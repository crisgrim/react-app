export const CreateNote = ({
  buttonText,
  handleSubmit,
  handleChange,
  value
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

const Article = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <span>{props.price}</span>
    </div>
  );
};

export default Article;

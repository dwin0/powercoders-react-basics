import { useState } from "react";
import Article from "./Article";

const BackendData = () => {
  const [articles, setArticles] = useState([]);

  // before fetching -> articles is []
  // after fetching -> articles is results array

  const fetchData = () => {
    fetch("http://localhost:8000/shop/articles/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);

        setArticles(data.results);
      });
  };

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        {articles.map((article) => (
          <Article
            key={article.id}
            name={article.name}
            price={article.price}
          ></Article>
        ))}
      </div>
    </>
  );
};

export default BackendData;

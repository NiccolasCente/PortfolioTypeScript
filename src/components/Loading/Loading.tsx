import React from "react";
import "./Loading.css"; 
import "../../assets/GlobalStyle.css"

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <h2 id="h2-load">Carregando...</h2>
    </div>
  );
};

export default Loading;

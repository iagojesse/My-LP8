import React from "react";
import "./style.css";
// Importando o arquivo JSON do diretório correto
import imagesData from "./src/imagens/imagens.json";

function PortfolioTrabalhos() {
  return (
    <div className="pagina2">
      <header>
        <div className="button-group">
          <button id="btnContato">Contato</button>
          <button id="btnPortfolio">Portfólio</button>
          <button id="btnCurriculo">Currículo</button>
        </div>
      </header>
      <div className="sections">
        {imagesData
          .filter((image) => image.name !== "foto iago jesse")
          .map((image) => (
            <section key={image.id}>
              {/* Importando as imagens do diretório correto */}
              <img src={require(`./src/imagens/${image.src}`)} alt={image.alt} />
            </section>
          ))}
      </div>
    </div>
  );
}

export default PortfolioTrabalhos;

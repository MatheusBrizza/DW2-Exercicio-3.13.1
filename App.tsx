import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <h1>Atenção!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat odio,
        tincidunt fringilla molestie non, aliquet ut libero. Aliquam a quam
        quam. Mauris id turpis at magna gravida pellentesque. Etiam aliquam orci
        ac massa pulvinar rhoncus. Cras eget est in tortor imperdiet lobortis.
        Curabitur imperdiet mollis turpis, quis dapibus tortor dignissim vel.
      </p>
      <div className="btn-container">
        <button id="back">Voltar</button>
        <button id="continue">Sim, excluir!</button>
      </div>
    </div>
  );
}

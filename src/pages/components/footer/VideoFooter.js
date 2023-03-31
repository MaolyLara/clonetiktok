import React from "react";
import "./videoFooter.css";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Laramaoly</h3>
        <p>Descrição do Vídeo</p>
        <div className="videoFooter__music">
          <p>Icone</p>
          <p>Título da musica</p>
        </div>
      </div>
      <img
          className="videoFooter__record"
          alt="Imagem de um vinil girando"
          src=" https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"      
      />
    </div>
  );
}

export default VideoFooter;

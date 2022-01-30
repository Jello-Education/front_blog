import React, { useState } from 'react';

import { Container, Texts, Duvida, Chat } from './styles';

const Description: React.FC = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showDuvida, setShowDuvida] = useState(false);
  const [showChat, setShowChat] = useState(false);
  
  function handleShow(type) {
    if (type == "description"){
      setShowDescription(true);
      setShowDuvida(false);
      setShowChat(false);
    }

    if (type == "duvida"){
      setShowDescription(false);
      setShowDuvida(true);
      setShowChat(false);
    }

    if (type == "chat"){
      setShowDescription(false);
      setShowDuvida(false);
      setShowChat(true);
    }
  }

  return (
    <Container>
      <h1>Título</h1>

      <div className="line">
        <button onClick={() => handleShow("description")} className={showDescription ? "line" : ""}>Descrição</button>
        <button onClick={() => handleShow("duvida")} className={showDuvida ? "line" : ""}>Tire sua duvida</button>
        <button onClick={() => handleShow("chat")} className={showChat ? "line" : ""}>Chat com a turma</button>
      </div>

      <Texts>
        {showDescription && (
          <>
            <h4>Titulo descrição</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec eget proin arcu vitae, ultrices elit viverra tellus iaculis. 
              Suspendisse lectus euismod volutpat ultricies amet. Tempus aliquet enim nulla fermentum nunc dolor amet. 
              Fringilla ut aliquet quis augue est fermentum elementum lobortis ultricies. 
              Arcu est vitae tortor vitae massa iaculis consectetur. Volutpat tempus lectus 
              aenean etiam. In et pharetra non dui est sollicitudin tortor nullam enim. Arcu vitae eget volutpat risus 
              mi euismod tempus venenatis. Purus, accumsan rutrum lectus enim, adipiscing ligula integer tortor turpis. 
              Risus tellus enim euismod diam nulla eleifend. In aliquam, euismod eget urna velit neque convallis gravida 
              facilisi. Non pharetra etiam porta ornare ante urna ut cras. Et amet sit lectus elit. Scelerisque nisi, 
              egestas vitae non penatibus. Pretium id faucibus id pharetra maecenas maecenas.
              Arcu vitae eget volutpat risus 
              mi euismod tempus venenatis. Purus, accumsan rutrum lectus enim, adipiscing ligula integer tortor turpis. 
              Risus tellus enim euismod diam nulla eleifend. In aliquam, euismod eget urna velit neque convallis gravida 
              facilisi. Non pharetra etiam porta ornare ante urna ut cras. Et amet sit lectus elit.
            </p>
          </>
        )}
        {showDuvida && (
          <Duvida>
            <div className="inputs">
              <label>Assunto:</label>
              <input type="text" />
              <label>Mensagem:</label>
              <input type="text" />
            </div>

            <div className="buttons">
              <button>Cancelar</button>
              <button>Enviar</button>
            </div>
          </Duvida>
        )}
        {showChat && (
          <Chat>
            <div className="left">
              <nav>
                <img src="./viewAluno-comment.svg" alt="comment" />
                <input placeholder="Insira seu comentario" type="text" />
              </nav>
            </div>
            <div className="right">
              <button>
                Arquivos Download
              </button>
            </div>
          </Chat>
        )}
      </Texts>
    </Container>
  );
}

export default Description;
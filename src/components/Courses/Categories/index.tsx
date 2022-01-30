import React from 'react';

import { Container, Categorie } from './styles';

const slide = [
  {
    id:1,
    imagem: "./courses-card-img.svg",
    Title: "teste",
    specialty: "teste",
  },
  {
    id:2,
    imagem: "./courses-card-img.svg",
    Title: "teste",
    specialty: "teste",
  },
  {
    id:3,
    imagem: "./courses-card-img.svg",
    Title: "teste",
    specialty: "teste",
  },
  {
    id:4,
    imagem: "./courses-card-img.svg",
    Title: "teste",
    specialty: "teste",
  },
  {
    id:5,
    imagem: "./courses-card-img.svg",
    Title: "teste",
    specialty: "teste",
  },
  
]

const Categories: React.FC = () => {
  return (
    <Container>
      <Categorie>
      <section id='section1'>
                    {slide &&
                      slide.map((item, key) => ( 
                      <div className="item" key={key}>
                        <img src={item.imagem} alt={item.Title}/>
                      </div>
                    ))}
    </section>
      </Categorie>
    </Container>
  );
}

export default Categories;
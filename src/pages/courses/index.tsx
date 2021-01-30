import Image from 'next/image';

import { Container, Section, Top, Texts, Input, Icon, Categories, Categorie } from '../../styles/courseStyles';
import { FiSearch } from 'react-icons/fi';

import Header from '../../components/Shared/Header';
import Main from '../../components/Courses/Main';
import Footer from '../../components/Shared/JelloInfo';

const courses: React.FC = () => {
  return (
    <Container>
        <Header />
        <Top>
          <Section>
            <Texts>
              <h1>Estudar pode ser <b>divertido!</b></h1>

              <Input>
                <input placeholder="O que você deseja aprender hoje?" type="text"/>
                <Icon>
                  <FiSearch size={30} color="#fff"/>
                </Icon>
              </Input>
            </Texts>
            <Image 
              src="/courses-example-img.svg"
              width={440}
              height={600}
            />
          </Section>

          <Categories>
            <Categorie>
              <span>Categorias</span>
            </Categorie>
            <Categorie>
              <span>Categorias</span>
            </Categorie>
            <Categorie>
              <span>Categorias</span>
            </Categorie>
            <Categorie>
              <span>Categorias</span>
            </Categorie>
            <Categorie>
              <span>Categorias</span>
            </Categorie>
            <Categorie>
              <span>Categorias</span>
            </Categorie>
          </Categories>
        </Top> 
        <Main />

        <Footer />
    </Container>
  );
}

export default courses;
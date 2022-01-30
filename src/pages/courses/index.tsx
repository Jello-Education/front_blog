import { Container, Top } from '../../styles/courseStyles';

import Header from '../../components/Shared/Header';
import Main from '../../components/Courses/Main';
import Footer from '../../components/Shared/JelloInfo';
import Categories from '../../components/Courses/Categories';
import Section from '../../components/Courses/Section';
import SEO from '../../components/Seo';

const courses: React.FC = () => {
  return (
    <Container>
        <Header />

        <SEO title="Cursos"/>

        <Top>
          <Section />
          <Categories />
        </Top>

        <Main />

        <Footer />
    </Container>
  );
}

export default courses;
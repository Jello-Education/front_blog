import { Container, Top } from '../../styles/courseStyles';

import Header from '../../components/Shared/Header';
import Main from '../../components/Courses/Main';
import Footer from '../../components/Shared/JelloInfo';
import Categories from '../../components/Courses/Categories';
import Section from '../../components/Courses/Section';

const courses: React.FC = () => {
  return (
    <Container>
        <Header />
        
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
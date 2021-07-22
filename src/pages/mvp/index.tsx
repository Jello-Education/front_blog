import React from 'react';

import { Container, BackgroundImage } from '../../styles/mvpStyles';

import Header from '../../components/Shared/Header';
import Courses from '../../components/Mvp/Courses';
import Exam from '../../components/Mvp/Exam';
import VideoPlayer from '../../components/Mvp/VideoPlayer';
import Detail from '../../components/Mvp/Detail';
import FeedBacks from '../../components/Mvp/FeedBacks';
import MobileAppSection from '../../components/Mvp/MobileAppSection';
import JelloInfo from '../../components/Shared/JelloInfo';
import Cards from '../../components/Mvp/Cards';
import SEO from '../../components/Seo';
import Plans from '../../components/Mvp/Plans';

const Mvp: React.FC = () => {
  return (
    <Container>
      <Header />

      <SEO title="MVP"/>

      <BackgroundImage>
        <h1><i><b>L</b>orem ipsum</i> dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </BackgroundImage>
      <Courses />
      <VideoPlayer />
      <Cards />
      <Exam />
      <Detail />
      <FeedBacks />
      <MobileAppSection />
      <Plans />
      <JelloInfo />

    </Container>
  );
}

export default Mvp;
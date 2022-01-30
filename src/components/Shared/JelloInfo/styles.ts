import styled from "styled-components";

export const Container = styled.div`
  margin-top: 183px;

  a {
    font-size: 1rem !important;
    color: #fd3373 !important;
  }

  b {
    font-size: 1.5rem !important;
    color: #282828;
  }
`;

export const Main = styled.div`
  width: 100%;
  padding: 64px 24px;
  border-top: 2px solid #fd3373;
  border-bottom: 2px solid #fd3373;

  b.subTitle {
    margin-left: 7.5%;
    font-size: 22px;
    @media (max-width: 1050px) {
      margin-left: 31%;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 600px) {
    padding: 30px 0px;
  }
`;

export const Content = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1050px) {
    margin-bottom: 40px;
  }
  ul {
    &.middle {
      text-align: center;
    }
    &.right {
      text-align: right;
    }

    li {
      margin-bottom: 10px;
      &:first-child {
        margin-bottom: 20px;
      }
      a {
        color: #200;
      }
    }
  }
`;

export const SubContent = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 20px;
  /* display: flex; */
  /* flex-wrap: wrap; */
  justify-content: space-between;

  @media (max-width: 1050px) {
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  div:hover {
    background-color: #fd3373;

    p,
    b {
      color: #ffffff;
    }
  }
`;

export const SocialMediaContainer = styled.div`
  /* width: 400px; */
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1050px) {
    margin-bottom: 40px;
  }
`;

export const Icon = styled.div`
  height: 32px;
  width: 32px;
  margin-right: 20px;
  margin-bottom: 10px;
  background-color: #fd3373;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    margin-right: 5px;
  }
`;

export const Detail = styled.div`
  width: 340px;
  height: 90px;
  margin-right: 10px;
  border-radius: 40px;
  border: 3px solid #fd3373;
  padding: 0 25px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  svg:first-child {
    margin-right: 20px;
  }
  @media (max-width: 1050px) {
    margin-bottom: 20px;
  }
  img {
    margin-left: -30px;
  }
`;

export const Texts = styled.div`
  /* margin-left: 10px; */
  margin-right: 0;
  text-align: left;
  font-size: 1rem;

  b {
    font-size: 1rem !important;
  }
`;

export const Bottom = styled.div`
  height: 40px;
  padding: 30px;
  display: flex;
  justify-content: center;

  span {
    font-size: 18px;
  }
`;

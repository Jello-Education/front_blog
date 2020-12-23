import styled from 'styled-components';

import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

export const Container = styled.div`
  position: relative;
  display: block;
  height: 100vh;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  padding: 8px 0;
  background: #fafafa;
  border-radius: 0 0 20px 20px;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-right: 83px;

  img {
    margin-left: 10px;
    margin-right: 11px;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 36px;
    color: #282828;
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;

export const Background = styled.div`
  position: relative;
  top: 57px;
  z-index: -1;
  width: 100%;

  div {
    position: absolute;
    z-index: 1;
    width: 516px;
    height: 299px;
    background: rgba(214, 214, 214, 0.7);
    margin-left: 24px;
    margin-top: 193px;
    overflow: hidden;
  }

  img {
    width: 100%;
    top: 57px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 195px;
  background: #f2f2f2;
  border-radius: 53px 53px 0 0;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 14px;
`;

export const InputSearchContainer = styled.div`
  display: flex;
  width: 920px;
  background: #fafafa;
  border-radius: 35px;
  justify-content: space-between;
  padding: 12px 25px 12px 25px;

  input {
    border: none;
    background: transparent;
    width: 400px;

    ::placeholder {
      color: #b0a8a8;
      font-size: 24px;
      overflow: visible;
    }
  }

  div {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: #44f9bd;
    box-shadow: 0px 4px 4px rgba(253, 51, 115, 0.2);
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;

export const PostsContainer = styled.section`
  padding-right: 24px;
  padding-left: 24px;
  width: 100%;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
`;

export const PagesNavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 68px;
  padding-bottom: 77px;

  .selected-page {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #fd3373;
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #282828;
  }

  .next-page {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #fd3373;
    margin-left: 17px;
  }

  .last-page {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #fd3373;
    margin-left: 7px;
    align-items: center;
  }
`;

export const SignNewsletterContainer = styled.div`
  border-bottom: 2px solid;
  border-color: #fd3373;

  .newsletter-section {
    display: flex;
    width: 100%;
    height: 541px;
    background: #f2f2f2;

    .newsletter-container {
      display: flex;
      width: 100%;
      height: 354px;
      background: #fd98b8;
      border-radius: 20px;

      img {
        margin-left: 24px;
      }

      .newsletter-right-side {
        display: block;
        width: 100%;
        margin-left: 24px;
        margin-top: 21px;
        margin-right: 24px;

        .newsletter-top {
          margin-bottom: 15px;

          span {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 36px;
            color: #fafafa;
          }
        }

        .newsletter-bottom {
          display: flex;

          p {
            width: 566px;
            padding-top: 20px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 24px;
            color: #fafafa;

            span {
              font-family: 'Poppins', sans-serif;
              font-weight: 500;
              font-size: 24px;
              color: #fd3373;
            }
          }

          .forms {
            height: 200px;
            width: 40%;
          }
        }
      }
    }
  }
`;

export const Input = styled(InputComponent)``;

export const Button = styled(ButtonComponent)`
  width: 100%;
`;

export const JelloInfoContainer = styled.div`
  padding: 49px 25px 0px 23px;
  border-bottom: 2px solid;
  border-color: #fd3373;

  font-family: 'Montserrat', sans-serif;
  color: #282828;

  .jello-info-top {
    display: flex;
    justify-content: space-between;

    .jello-info-left,
    .jello-info-center,
    .jello-info-right {
      span {
        font-size: 24px;
        font-weight: 700;
        line-height: 46px;
      }

      a {
        font-size: 24px;
        line-height: 46px;
        color: #282828;
      }
    }

    .jello-info-center {
      text-align: center;
    }

    .jello-info-right {
      text-align: end;
    }
  }

  .jello-info-bottom {
    display: flex;

    span {
      font-family: 'Montserrat', sans-serif;
      color: #282828;
      font-size: 24px;
      font-weight: 700;
      line-height: 46px;
    }

    .jello-social-network {
      width: 400px;

      img {
        margin-right: 16px;
        margin-bottom: 16px;
        width: 50px;
        height: 50px;
      }
    }

    .jello-contact {
      display: flex;
      align-items: center;
      align-self: center;
      padding: 35px 28px;
      margin-right: 26px;
      border: 3px solid #fd3373;
      border-radius: 15px;
      width: 447px;
      height: 116px;

      img {
        margin-right: 44px;
      }

      div {
        align-self: center;

        p {
          font-family: 'Montserrat', sans-serif;
          color: #282828;
          font-size: 24px;
        }
      }
    }

    .jello-companies {
      display: flex;
      align-items: center;
      align-self: center;
      padding: 35px 0px;
      border: 3px solid #fd3373;
      border-radius: 15px;
      width: 447px;
      height: 116px;

      img {
        margin-right: 18px;
      }

      div {
        align-self: center;

        p {
          font-family: 'Montserrat', sans-serif;
          color: #282828;
          font-size: 24px;
        }
      }
    }
  }
`;

export const JelloRightsReserved = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 21px;

  span {
    font-family: 'Montserrat', sans-serif;
    color: #282828;
    font-size: 24px;
    margin-bottom: 204px;
  }
`;

export const Footer = styled.footer`
  padding: 18px 24px;
  background: #f2f2f2;
  border-radius: 53px 53px 0px 0px;

  .footer-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 18px;
      color: #282828;
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;

    .footer-bottom-inputs {
      display: flex;
      width: 84%;
    }

    .footer-bottom-button {
      display: flex;
      width: 16%;
    }
  }
`;

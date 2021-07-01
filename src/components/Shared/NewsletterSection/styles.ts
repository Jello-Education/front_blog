import styled from 'styled-components';

import InputComponent from '../InputComponent';
import ButtonComponent from '../ButtonComponent';

export const Container = styled.div`

  .newsletter-section {
    display: flex;
    width: 100%;

    @media(max-width: 1100px) {
      padding: 0 10px;

      img {
        display: none;
      }
    }

    .newsletter-container {
      display: flex;
      width: 100%;
      padding: 30px;

      background: #fd98b8;
      border-radius: 20px;

      img {
        margin-left: 2rem;
        height: 15rem;
        width: 15rem;
      }

      .newsletter-right-side {
        display: block;
        width: 100%;
        margin-left: 24px;
        margin-right: 24px;

        @media (max-width: 1100px) {
          margin: 0;
        }

        .newsletter-top {
          margin-bottom: 15px;

          span {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 2.2rem;
            color: #fafafa;
          }
        }

        .newsletter-bottom {
          display: flex;

          @media (max-width: 1100px) {
            flex-direction: column;

            .forms {
              margin-top: 20px;
            }
          }

          p {
            width: 100%;
            padding-top: 20px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 1.3rem;
            color: #fafafa;

            span {
              font-family: 'Poppins', sans-serif;
              font-weight: 500;
              font-size: 1.3rem;
              color: #fd3373;
            }
          }

          .forms {
            height: 200px;
            width: 32%;
          }
        }
      }
    }
  }
`;

export const Input = styled(InputComponent)``;

export const Button = styled(ButtonComponent)``;

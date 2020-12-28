import styled from 'styled-components';

import InputComponent from '../InputComponent';
import ButtonComponent from '../ButtonComponent';

export const Container = styled.div`
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
            width: 32%;
          }
        }
      }
    }
  }
`;

export const Input = styled(InputComponent)``;

export const Button = styled(ButtonComponent)``;

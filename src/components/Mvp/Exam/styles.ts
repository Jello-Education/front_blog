import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 128px 128px;

  div {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-items: flex-start;

    @media (max-width: 1170px){
      align-self: center;
    }

    h2 {
      color: #282828;
      font-size: 42px;
      max-width: 550px;

      position: relative;

      &:before {
        content: '';
        width: 44px;
        height: 6px;
        background: #fd3373;

        position: absolute;
        left: 0;
        bottom: -16px;
      }
    }

    p {
      color: #282828;
      max-width: 542px;
      line-height: 36px;

      margin-top: 32px;
    }

    button {
      width: 208px;
      height: 60px;
      background: #fd3373;
      color: #fff;
      font-size: 22px;
      border-radius: 20px;
      border: 0;
      transition: all 0.3s;

      @media (max-width: 1170px) {
        align-self: center;
      }

      &:hover{
        opacity: 0.8;
      }
    }
  
    @media (max-width: 1170px) {
      margin-top: 40px;
      
      h2 {
        margin-top: 32px;

        &:before {
          left: 50%;
        }
      }

      p {
        align-self: center;
      }
    }
  }

  > img {
    width: 566px;
    height: 469px;
  }

  @media (max-width: 1170px) {
    flex-direction: column-reverse;
    align-items: center;

    text-align: center;

    img {
      max-width: 566px;
      width: 80vw;
    }
  }
`;

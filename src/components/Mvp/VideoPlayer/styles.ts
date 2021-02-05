import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  #squares1 {
    z-index: -10;

    position: absolute;
    top: -4px;
    right: 24px;
  }

  #squares2 {
    position: absolute;
    bottom: 16px;
    left: 24px;
  }

  #triangles {
    position: absolute;
    bottom: 48px;
    right: 32px;
  }

  @media (max-width: 1170px) {
    #triangles {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 72px 128px 148px;

  text-align: end;

  div {
    display: flex;
    flex-direction: column;

    align-items: flex-end;

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
        right: 0;
        bottom: -16px;
      }
    }

    p {
      color: #282828;
      max-width: 542px;

      margin-top: 32px;
    }

    a {
      color: #fd3373;
      font-size: 20px;

      margin-top: 8px;
    }

    @media (max-width: 1170px) {
      align-items: center;

      h2 {
        margin-top: 32px;

        &:before {
          left: 50%;
        }
      }
    }
  }
  @media (max-width: 1170px) {
    flex-direction: column;
    align-items: center;

    text-align: center;

    img {
      width: 80vw;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div``;

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

import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  height: 563px;
  background: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 36px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 8px 10px;

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #282828;
  }
`;

export const ImageContainer = styled.div`
  height: 254px;
  margin-bottom: 17px;

  .jelloSymbol {
    position: relative;
    margin-left: 16px;
    bottom: 67px;
  }

  .postImage {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 53px;
  background: #c4c4c4;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  width: 100%;
  height: 112px;
  background: rgba(196, 196, 196, 0.8);
  margin-bottom: 17px;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-right: 11px;

    img {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      border: 2px solid #fd3373;
      box-sizing: border-box;
    }
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #282828;
  }
`;

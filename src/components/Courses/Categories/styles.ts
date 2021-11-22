import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const Categorie = styled.div`


  display: grid;
  grid-template-columns: repeat(3,100%);
  overflow:hidden;
  scroll-behavior: smooth;

  section {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, auto);
    margin: 20px 0;
    
    .item {
      padding: 0 2px;
      transition: $duration all;
      
      &:hover { 
        margin: 0 40px;
        transform: scale(1.2);
      }
      
    }
    
    a {
      position: absolute;
      color: #fff;
      text-decoration: none;
      font-size: 6em;
      background:rgb(0,0,0);
      width: 80px;
      padding: 20px;
      text-align: center;
      z-index: 1;
      
      &:nth-of-type(1) {
        top:0; bottom:0; left:0;
        background: linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
      }
      &:nth-of-type(2) {
        top:0; bottom:0; right: 0;
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
      }
      
    }
    
  }

`;

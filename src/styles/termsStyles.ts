import styled from 'styled-components';

export const TextBox = styled.div `


div {
    border-radius: 20px;
    background:  #F1F1F1;
    border-radius: 25px;
     padding: 20px;
     width: 100%;
     max-width: 1170px; 
     height: 700px;
     position:relative;
     left: 117px;
     top: 120px;

   

        .ScrollBar {
            overflow-x: hidden; 
            overflow-y: scroll; 
            border-radius: 25px;
             padding: 20px; 
             width: 100%;
             max-width: 1110px;
             height: 650px;
             position:relative;
             left: 10px;
             top: 20px;  

            ::-webkit-scrollbar {
                background:#a9a9a9; 
                border-radius: 10px;
                width: 12px;
                height: 12px;
                }
                
            ::-webkit-scrollbar-track {
                color:ligthgrey;
                border-radius: 10px;
                }
                
            ::-webkit-scrollbar-thumb {
                background:#C73865;               
                border-radius: 10px;
                }
        }

        p, li, h2 {
          margin-top: 15px;
          list-style-type: none;
          text-align: justify;
        }

        h2 {
          font-size:20px; 
        }
        
        table{
          margin-top: 10px ;
        }
        td  {
          border: 1px solid ;
          padding: 50px 50px;
        }

        .textrodape {
          font-size: 12px;
        }
}

@media (min-width: 1400px) {
  div {
    width: 73rem;
    left: 9px;
  
}

  .Scrollbar {
    max-width: 300px; 
  }
}

@media (min-width: 900px) and (max-width: 1380px) {
  div {
    width: 63rem;
    left: 5px;
  
}

  .Scrollbar {
    max-width: 300px; 
  }
}
      
@media (max-width: 880px) and (min-width: 768px) {

  div {
    max-width: 650px; 
    left: 1rem;
}

  .Scrollbar {
    max-width: 300px; 
  }
}

@media (max-width: 500px) {
  div {
    position: relative;
    left: 9%;
    width: 104%;
  }
}

}
`

export const Checkbox = styled.div `

.container {
    display: block;
    position: relative;
    top: 7em;
    left: 5.5em;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

p {
    color: #C73865;
}
  
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }
  
  
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  
  .container input:checked ~ .checkmark {
    background-color: #FD3373;
  }
  

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the indicator (dot/circle) when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the indicator (dot/circle) */
  .container .checkmark:after {
       top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
  }

  @media (min-width: 1400px) {
    .container {
      left: -27rem;
    }
    p {
      font-size: 20px;
  
    }
  }

  @media (min-width: 900px) and (max-width: 1380px) {
    .container {
      left: -18rem;
    }
    p {
      font-size: 20px;
  
    }
  }

  @media (max-width: 850px) and (min-width: 700px) {
    .container {
      left: -12.5rem;
    }
   
  
    p {
      font-size: 18px;
    }
  }


  @media (max-width: 500px) {
    .container {
      position: relative; 
      left: 15px;
    }
  }


`
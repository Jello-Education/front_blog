import styled from "styled-components";

export const Checkbox = styled.div`

  }
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0.2rem;
    left: -2rem;
    height: 21px;
    width: 21px;
    border: 2px solid #fd3373;
    border-radius: 50%;
  }

  .container input:checked ~ .checkmark {
    background-color: white;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    top: 1px;
    left: 1px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fd3373;
  }

  
  
  }
`;

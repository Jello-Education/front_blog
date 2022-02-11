import styled from "styled-components";

export const Checkbox = styled.div`
  .container {
    display: block-inline;
    position: relative;
    width: 80px;
    height: 21px;
    left: 36rem;
    top: 12.1rem;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .student {
    position: relative;
    left: 1.5rem;
  }

  .prof {
    position: relative;
    left: 10rem;
    top: -1.2rem;
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

  .lineText {
    position: relative;
    width: 690px;
    height: 0px;
    left: 340px;
    top: 10rem;

    padding: 12px 20px;
    margin: 8px 0;
    border: none;
    border-bottom: 2px solid #fd98b8;

    ::placeholder {
      font-size: 20px;
      line-height: 15px;
      color: #bdbdbd;

      /* identical to box height */
    }
  }
`;

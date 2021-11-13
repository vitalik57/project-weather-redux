import styled from "styled-components";

export const ModalStyled = styled.div`
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
  }

  .Modal {
    width: 660px;
    height: 360px;
    background-color: rgba(16, 33, 54, 0.8);
    border-radius: 20px;
    padding: 20px;
  }
  .charts {
    position: relative;
  }
  .page {
    text-decoration: none;
  }

  ul {
    padding: 0;
    list-style: none;
  }
  .modal__title {
    color: #343434;
    font-weight: normal;
    font-family: "Ultra", sans-serif;
    font-size: 40px;
    line-height: 42px;
    text-transform: uppercase;
    text-shadow: 0 2px white, 0 3px #777;
    text-align: center;
    margin: 0;
    padding-bottom: 30px;
  }
  .main__button {
  }
  p {
    margin: 0;
  }
  .modal__text {
    font-size: 30px;
    line-height: 1.5;
    text-shadow: 1px 1px 1px silver, -1px 1px 1px silver;
    /* color: white; */
    transition: all 0.5s;
  }

  .modal__text:hover {
    text-shadow: -1px -1px 1px silver, 1px -1px 1px silver;
    color: white;
  }
  .charts__continer {
    // margin-top: -5px;
    background-color: rgba(16, 33, 54, 0.8);
    box-shadow: 0px 8px 43px rgb(16 33 54 / 60%);
    border-radius: 34px;
    padding-bottom: 30px;
    padding-right: 15px;
    border: 2px solid rgb(2, 0, 36);
    padding-left: 15px;
  }
  .optional {
    :hover {
      background: #fff;
    }
    width: 100px;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 20px;
    display: flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    justify-content: center;
    line-height: 15px;
    /* margin-right: 9px; */
    /* padding: 6px 40px; */
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
  }
  .optional_container {
    display: flex;
    padding-bottom: 20px;
    justify-content: space-between;
  }
  .charts__canvas {
    height: 250px;
  }
`;

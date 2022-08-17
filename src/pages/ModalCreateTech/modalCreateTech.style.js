import styled from "styled-components";


export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.75);

  z-index: 9999;
`;

export const Container = styled.form`
  

  position: absolute;
  left: 30%;
  top: 30%;

  height: 370px;

  border-radius: 4px;

  background: #212529;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 369px;
    height: 50px;

    background: #343b41;
    border-radius: 4px 4px 0px 0px;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;

      color: #f9f8fe;
    }

    button {

      cursor: pointer;
      display: flex;

      position: relative;
      top: 3.5%;
      left: 19%;

      width: 65px;

      font-size: 20px;

      color: #868e96;

      border: none;
      background: transparent;
    }
  }

  .labelName {
    position: relative;
    top: 8.5%;
    left: 6%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 0px;

    color: #f8f9fe;
  }

  input {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    top: 14%;
    left: 5%;

    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 330px;
    height: 48px;

    background: #343b41;

    border: 1.2182px solid #343b41;
    border-radius: 4px;
  }

  .labelStatus {
    position: relative;
    top: 21%;
    left: 6%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 0px;

    color: #f8f9fe;
  }

  select {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    top: 26%;
    left: 5%;

    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 330px;
    height: 48px;

    font-size: 16px;
    line-height: 26px;

    background: #343b41;
    color: #f8f9fe;

    border: 1.2182px solid #343b41;
    border-radius: 4px;

    option {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;

      color: #f8f9fe;
    }
  }

  button {
    justify-content: center;
    align-items: center;

    position: relative;
    top: 34%;
    left: 5%;

    padding: 0px 22px;
    gap: 10px;

    width: 330px;
    height: 48px;

    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: #f8f9fe;

    background: #ff577f;

    border: 1px solid #ff577f;
    border-radius: 4px;
  }
`;

import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.75);

  z-index: auto;
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 40%;
  top: 30%;

  width: 369px;
  height: 342px;

  border-radius: 4px;

  background: var(--color-grey-3);

  z-index: 9999;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 369px;
    height: 50px;

    gap: 10px;

    background: var(--color-grey-2);
    border-radius: 4px 4px 0px 0px;

    h2 {
      position: relative;
      top: 1%;
      left: 10%;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;

      color: var(--color-grey0);
    }

    button {
      display: flex;

      position: relative;
      top: 3.5%;
      left: 19%;

      width: 65px;

      font-size: 20px;

      color: var(--color-grey-1);

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

    color: var(--color-grey0);
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

    background: var(--color-grey-2);

    border: 1.2182px solid var(--color-grey-2);
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

    color: var(--color-grey0);
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

    background: var(--color-grey-2);
    color: var(--color-grey0);

    border: 1.2182px solid var(--color-grey-2);
    border-radius: 4px;

    option {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;

      color: var(--color-grey0);
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

    color: var(--color-grey0);

    background: var(--color-primary);

    border: 1px solid var(--color-primary);
    border-radius: 4px;
  }
`;

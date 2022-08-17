import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  left: 0px;
  top: 0px;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 72px;

  border-bottom: 1px solid var(--color-grey-1);

  background: var(--color-grey-4);

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  @media screen and (max-width: 767px) {
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 31%;
    padding: 1%;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 106px;
    width: 105.53px;
    height: 14.63px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 56px;
    width: 55.49px;
    height: 32px;

    color: var(--color-grey0);
    background: var(--color-grey-3);

    border-radius: 4px;
    border: none;
  }
`;

export const Main = styled.main`
  position: absolute;
  left: 0px;
  top: 72px;

  width: 100%;
  height: 90px;

  background: var(--color-grey-4);

  border-bottom: 1px solid var(--color-grey-1);

  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 36%;
    padding: 1.5%;

    margin-left: 4%;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 28px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;

    color: var(--color-grey0);
  }

  span {
    display: flex;

    width: 100%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    color: var(--color-grey-1);
  }
`;

export const DivNovidades = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 6%;

  width: 75%;

  background-color: red;

  height: 50px;

  .subHeader {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    margin-left: 82.5%;

    height: 40px;

    gap: 1020%;
  }

  .h3SubHeader {
    display: flex;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: var(--color-grey0);
  }

  .btnSubHeader {
    background-color: transparent;
    border: none;

    color: var(--color-grey-1);
  }

  .iconSubHeader {
    font-size: 38px;
  }

  ////////////////////////////////////////

  .tagForm {
    display: flex;
    justify-content: center;

    margin-top: 3%;

    width: 100%;
    min-height: 416px;
    right: 6px;
    top: 50px;

    background: var(--color-grey-3);
    border-radius: 4px;

    overflow-y: scroll;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 96%;
  }

  img {
    position: relative;
    top: 30%;
    left: 3%;

    width: 150px;
    height: 150px;
    
  }

  li {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 49px;

    margin-top: 1%;
    margin-left: 1%;

    padding: 20px;

    background: var(--color-grey-4);
    border-radius: 4px;
  }

  li:hover {
    background: var(--color-grey-2);
  }

  .tagH3 {
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 22px;

    color: var(--color-grey0);
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    margin-left: 50%;

    color: var(--color-grey-1);
  }

  .btnAdd {
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-grey0);
    background-color: transparent;

    border: none;
  }

  .btnDelete {
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-grey0);
    background-color: transparent;

    border: none;
  }
`;

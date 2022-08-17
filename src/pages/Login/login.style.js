import styled from "styled-components";

export const Logotipo = styled.img`
  position: relative;
  width: 144.06px;
  height: 19.97px;
  left: 5px;
  bottom: 40px;
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 22px;
  gap: 26px;

  width: 369px;
  height: 502px;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #F8F9FA;
  }

  label {
    position: relative;
    top: 0;
    right: 146px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    color: #F8F9FA;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 329.93px;
    height: 48px;

    background: #868E96;

    border: 1.2182px solid #F8F9FA;
    border-radius: 4px;
  }

  span{
    position: relative;
    bottom: 58px;
    left: 365px;

    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;

    width: 117%;

    margin-bottom: -35px;

    border-radius: 5px;
    background-color: #868E96;

    color: #F8F9FA;
  }

  .btnEntrar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 324px;
    height: 48px;

    margin-top: 20px;

    background: #FF577F;

    color: #F8F9FA;

    border: 1.2182px solid #FF577F;
    border-radius: 4.07px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: #868E96;
  }

  .btnCadastrar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 324px;
    height: 48px;

    background: #868E96;
    color: #F8F9FA;

    border: 1.2182px solid #FF577F;
    border-radius: 4px;
  }
`;

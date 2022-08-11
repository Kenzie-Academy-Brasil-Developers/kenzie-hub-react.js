import styled from "styled-components";

export const Home = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #2a2a2a;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-direction: column;
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1{
    color: #FF577F
  }

  button {
    color: #fff;
    background-color: #59323f;

    border: none;
    padding: 10px;

    cursor: pointer;

    border-radius: 5px;
  }
`;

export const Title = styled.h2`
      color:#fff
`
export const Title2 = styled.h4`
color: #fff
`

export const Text = styled.p`
color: #fff
`
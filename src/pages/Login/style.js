import styled from 'styled-components'

export const LoginPage = styled.div`
width: 100%;
height: 100vh;

background-color: #2b2b2b;

display: flex;
justify-content: center;
align-items: center;

flex-direction: column;

h1{
    color: #FF577F
}

h3{
    font-size: 14px; 
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #212529;

    padding: 50px;
    margin-top: 20px;

    box-shadow: 0px 0px 10px 8px #59323F;
}

label{
    display: flex;
    flex-direction: column;

    font-size: 10px;
    color: #F8F9FA;

    margin: 5px;
}

input{
    background-color: #343B41;
    
        padding: 12px 8px;
    
        border: 1px solid #343841;
    
        border-radius: 4px;
}

button{
    background-color: #FF577F;
    color: #fff;

    margin-top: 10px;

    padding: 12px 30px;

    border: none;
    border-radius: 5px;

    cursor: pointer;
}
`
export const RedirectRegister = styled.div`
padding: 50px;

display: flex;
justify-content: center;
align-items: center;
 
gap: 10px;

h6{
    color: #fff;
    font-size: 12px;
}

button{
    border: none;
    background-color: #59323F;
    color: #fff;

    padding: 6px;

    cursor: pointer;
}
`
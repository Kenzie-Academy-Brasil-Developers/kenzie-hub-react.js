import styled from 'styled-components'

export const FormRegister = styled.div`
width: 100%;
    height: 100%;
    background-color: #2b2b2b;

`
export const HeaderRegister = styled.header`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;

h1{
    color: #FF577F;
    font-size: 24px;
}

button{
    padding: 9px;
    height: 40px;
    font-size: 12px;

    background-color: #FF577F;

    border: none;
    border-radius: 5px;

    cursor: pointer;
}
`
export const MainRegister = styled.main`
display: flex;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 50px;
    margin: 60px;

    border-radius: 8px;

    background-color: #212529;

    box-shadow: 0px 0px 4px 10px #59323F;
    }

    h3{
        color: #F8F9FA;
    }
    
    p{
        color: #868E96
    }
    
    label{
        display: flex;
        flex-direction: column;
    
        font-size: 10px;
        color: #F8F9FA;
    
        margin: 5px;
    }
    
    input, select{
        background-color: #343B41;
    
        padding: 12px 8px;
    
        border: 1px solid #343841;
    
        border-radius: 4px;
    }
    
    select{
        color: #F8F9FA;
        padding: 10px 30px;
    }
    
    option{
        color: #fff;
    }

    button{
        margin-top: 20px;
        padding: 10px 24px;
    
        font-size: 15px;
    
        background-color: #59323F;
    
        border: none;
        border-radius: 5px;
    }
    
    button:hover{
        cursor: pointer;
    
        background-color: #FF577F;
    }
`
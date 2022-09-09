

import styled from 'styled-components'



const Principal = styled.main`
    display: flex;
    flex-direction: row;

    background-color: #FBF0FF;

    .capa-fundo {
        width: 70%;
    }
    
    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        text-align: center;

        width: 30%;
    }

    .logo {
        margin-top: 5em;
        margin-bottom: 4em;
    }

    .logo-img{
        width: 260px;
    }

    .logo-texto {
        color: #3A1248;

        font-size: 14px;
        font-weight: 400;

        margin-top: 0px;
        margin-bottom: 0px;
    }

    h2 {
        font-weight: 600;
        font-size: 20px;
    }

    .input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    input {
        background-color: #DBCCE2;
        border-radius: 18.5px;
        
        width: 286px;
        height: 42px;

        font-size: 15px;

        border: none;

        
    }

    .esqueci-senha {
        margin-top: 0px;
        margin-bottom: 0px;

        text-align: end;

        text-decoration: underline;
    }

    button {
        margin-top: 2em;
        border: none;
    }

    .icone-sair {
        background: #AB99BA;
        border-radius: 13px;
        
        width: 49px;
        height: 51px;
        border-radius: 15px;
    }
`;

export { Principal };
import styled, { createGlobalStyle } from 'styled-components'
import { ImBook } from 'react-icons/im'

export const PageBody = createGlobalStyle`
   body {
    background: #6E6C78;
  };
   * {
    font-family: "Encode Sans Expanded",
    sans-serif;
}
`;

export const MainContainer = styled.div`
    display: ${({ isShown }) => (isShown ? 'none' : 'flex')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #6E6C78;
`;

export const MainTitle = styled.h1`
    color: white;
`

export const BookCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #3B3A3D;
    margin: 10px;
    width: 600px;
    border-radius: 20px;

    @media screen and (min-width: 668px) and (max-width: 991px) {
        width: 500px;
    }

    @media screen and (max-width: 668px){
        width: 300px;
    }
`;


export const BookTitle = styled.p`
    color: white;
    margin-left: 20px;
    font-size: 25px;
    font-weight: 700;

    @media screen and (min-width: 668px) and (max-width: 991px) {
        margin-left: 15px;
        font-size: 22px
    }

    @media screen and (max-width: 668px){
        margin-left: 0px;
        font-size: 19px
    }
`;

export const BookAuthor = styled.p`
    color: white;
    margin-left: 20px;
    font-size: 16px;
    margin-top: -10px;

    @media screen and (min-width: 668px) and (max-width: 991px) {
        margin-left: 15px;
        font-size: 15px
    }

    @media screen and (max-width: 668px){
        margin-left: 0px;
        font-size: 12px
    }
`;

export const BookIcon = styled(ImBook)`
    color: white;
    margin: 0px 20px;
    width: 50px;
    height: 50px;

    @media screen and (min-width: 668px) and (max-width: 991px) {
        width: 45px;
        height: 45px;
    }

    @media screen and (max-width: 668px){
        width: 40px;
        height: 40px;
    }
`
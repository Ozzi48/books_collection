import styled from 'styled-components'

export const BookForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #27263D;
  border-radius: 20px;
  width: 600px;

  @media screen and (min-width: 668px) and (max-width: 991px) {
        width: 500px;
    }

  @media screen and (max-width: 668px){
        width: 300px;
    }
`;

export const FormShow = styled.div`
  justify-content: center;
  align-items: center;
  display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
`;

export const FormTitle = styled.h2`
  color: white;
  justify-content: center;
  display: flex;
`;

export const FormInput = styled.input`
  width: 400px;
  padding: 6px 10px;
  display: flex;

  @media screen and (min-width: 668px) and (max-width: 991px) {
        width: 350px;
    }

    @media screen and (max-width: 668px){
        width: 250px;
    }
`;

export const FormLabel = styled.p`
  color: white;
  display: flex;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
`;

export const FormButton = styled.button`
  justify-content: center;
  display: flex;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 5px 2px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5
  }

  @media screen and (min-width: 668px) and (max-width: 991px) {
        padding: 14px 28px;
    }

    @media screen and (max-width: 668px){
        padding: 8px 14px;
    }
`;

export const DescriptionInput = styled.textarea`
  display: flex;
  width: 400px;
  height: 100px;
  padding: 6px 10px;

  @media screen and (min-width: 668px) and (max-width: 991px) {
        width: 350px;
    }

    @media screen and (max-width: 668px){
        width: 250px;
    }
`;
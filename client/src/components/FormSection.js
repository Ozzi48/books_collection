import React, { useState } from "react"
import { useToasts } from "react-toast-notifications"
import axios from "axios"
//import styled components from FormEelements file
import {
  BookForm, FormShow, FormTitle, FormInput,
  FormLabel, FormButton, DescriptionInput,
  ButtonsContainer
} from "./FormElements"

const FormSection = ({ isShown, bookInfo, emptyList }) => {
  //create the state where by defauld we store selected book paramaters
  const [form, setForm] = useState({ title: bookInfo[0].title, author: bookInfo[0].author, description: bookInfo[0].description })
  const { addToast } = useToasts()

  //on change inputs text save it to state
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  //save new book using axios to call api and reload page. If there are errors we use toast package to show error message
  const saveNewBook = async () => {
    try {
      await axios({
        method: 'post',
        url: '/api/create',
        data: { ...form }
      });
      window.location.reload(true);
    } catch (error) {
      addToast(error.response.data.message, {
        appearance: 'error',
        autoDismiss: true,
      })
    }
  }

  //delete book and reload page
  const deleteBook = async () => {
    try {
      await axios({
        method: 'post',
        url: `/api/remove/${bookInfo[0].id}`,
      });
      window.location.reload(true);
    } catch (error) {
      addToast(error.response.data.message, {
        appearance: 'error',
        autoDismiss: true,
      })
    }
  }

  //update book and reload page
  const updateBook = async () => {
    try {
      await axios({
        method: 'post',
        url: `/api/update/${bookInfo[0].id}`,
        data: { ...form }
      });
      window.location.reload(true);
    } catch (error) {
      addToast(error.response.data.message, {
        appearance: 'error',
        autoDismiss: true,
      })
    }
  }

  return (
    //show only if we select book
    <FormShow isShown={isShown}>
      <BookForm>
        <div>
          <FormTitle>Edit Book</FormTitle> 
          <FormLabel>Title</FormLabel>
          <FormInput type="text" name="title" defaultValue={bookInfo[0].title} onChange={changeHandler} />
          <FormLabel>Author</FormLabel>
          <FormInput type="text" name="author" defaultValue={bookInfo[0].author} onChange={changeHandler} />
          <FormLabel>Description</FormLabel>
          <DescriptionInput name="description" defaultValue={bookInfo[0].description} onChange={changeHandler} />
          <ButtonsContainer>
            <FormButton onClick={() => saveNewBook()}>Save New</FormButton>
            <FormButton disabled={emptyList} onClick={() => updateBook()}>Save</FormButton>
            <FormButton disabled={emptyList} onClick={() => deleteBook()}>Delete</FormButton>
          </ButtonsContainer>
        </div>
      </BookForm>
    </FormShow>
  );
};

export default FormSection;
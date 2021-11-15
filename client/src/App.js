import React, { useState, useEffect } from 'react'
import { ToastProvider } from 'react-toast-notifications'
import axios from 'axios'
//import Form component
import FormSection from './components/FormSection'
//import styled components from AppElements file
import { BookAuthor, BookTitle, BookCard, MainContainer, MainTitle, BookIcon } from './AppElements'

const App = () => {
  const [books, setBooks] = useState([]) //create books state to store all books
  const [loading, setLoading] = useState(false)
  const [isShowForm, setIsShowForm] = useState(false) //store the boealean which will be updated on selected book
  const [formIndex, setFormIdex] = useState(null) //store the index of selected book
  const [bookInfo, setBookInfo] = useState([{ title: '', author: '', description: '' }]) //store the info about one selected book

  //on start of page call the function to fecth all books
  useEffect(() => {
    fetchBooks()
  }, [])

  //fetch all books and store them in books state
  const fetchBooks = async () => {
    setLoading(true)
    try {
      await axios.get('/api/books')
        .then(response => {
          setBooks(response.data)
          setLoading(false)
        });
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  // on click the book in list we get all info about this book and open or close the form
  const handleShowOnClick = (index, title, author, descritpion, id) => {
    //if the same book was clicked second time close or open the form for this book
    if (index === formIndex) {
      setIsShowForm(!isShowForm);
    } else { //if clicked book is another we set new index of the book, set all info about this book and open the form
      setIsShowForm(true);
      setFormIdex(index);
      setBookInfo([{ id: id, title: title, author: author, description: descritpion }])
      // console.log(bookInfo)
    }
  }

  //map our aray of books and render cards for every book. If the book index equal to state index and isShowForm == true, we show the form for one book, else we not show
  const renderBooks = () => {
    if (books.length > 0) {
      return (
        books.map((item, index) =>
          <div key={index}>
            <BookCard onClick={() => handleShowOnClick(index, item.title, item.author, item.description, item._id)}>
              <BookIcon />
              <div>
                <BookTitle>{item.title}</BookTitle>
                <BookAuthor><span style={{ fontWeight: 'bold' }}>Author:</span> {item.author}</BookAuthor>
              </div>
            </BookCard>
            {index === formIndex ?
              <FormSection isShown={isShowForm} bookInfo={bookInfo} />
              :
              null
            }
          </div>
        )
      )
    } else {
      //if list is empty just show form to add new book
      return (
        <div>
          <h2>List are empty</h2>
          <FormSection isShown={true} bookInfo={bookInfo} emptyList={true}/>
        </div>
      )
    }
  }

  if (loading) {
    return (
      <MainContainer>
        <p>Loading...</p>
      </MainContainer>
    )
  } else {
    //if loading is false, return our styled-components with list of the books
    return (
      <ToastProvider>
        <MainContainer>
          <MainTitle>Books List</MainTitle>
          {renderBooks()}
        </MainContainer>
      </ToastProvider>
    )
  }
}

export default App


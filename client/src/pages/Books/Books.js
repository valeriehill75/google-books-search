import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Books() {
  //Initial State
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({
    id: "",
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
  });

  //Load and store books
  useEffect(() => {
    loadBooks();
  }, []);

  //Load and set books
  function loadBooks() {
    API.getGoogleBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }
  //Delete book by id and reload
  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }
  //Update State
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }
  //Save book data and reload
  function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        description: formObject.description,
        image: formObject.image,
        link: formObject.link,
      })
        .then(() =>
          setFormObject({
            title: "",
            author: "",
            description: "",
            image: "",
            link: "",
          })
        )
        .then(() => loadBooks())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>(React) Google Book Search</h1>      
            <h2>Search by Title and Author</h2>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
              value={formObject.title}
            />
            <Input
              onChange={handleInputChange}
              name="author"
              placeholder="Author (required)"
              value={formObject.author}
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        </Col>
        <Col size="md-12">
          {books.length ? (
            <List>
              {books.map((book) => {
                return (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3></h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}
export default Books;

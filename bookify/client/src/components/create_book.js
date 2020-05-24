import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class CreateBook extends Component {
    constructor(props) {
      super(props)

      this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
      this.onChangeauthor = this.onChangeAuthor.bind(this);
      this.onChangeGenre = this.onChangeGenre.bind(this);
      this.onChangeIsbn = this.onChangeIsbn.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        title: '',
        author: '',
        genre: '',
        isbn: ''
      }
    }

    onChangeBookTitle(e) {
      this.setState({booktitle: e.target.value})
    }

    onChangeAuthor(e) {
      this.setState({author: e.target.value})
    }

    onChangeGenre(e) {
      this.setState({genre: e.target.value})
    }

    onChangeIsbn(e) {
      this.setState({isbn: e.target.value})
    }

    onSubmit(e) {
      e.preventDefault()

      console.log(`Book was successfully created`);
      console.log(`BookTitle: ${this.state.booktitle}`);
      console.log(`Author ${this.state.author}`);
      console.log(`Genre: ${this.state.genre}`);
      console.log(`Isbn: ${this.state.isbn}`);

      const bookObject = {
        title: this.state.title,
        author: this.state.author,
        genre: this.state.genre,
        isbn: this.state.isbn
      };
      axios.post('http://localhost:3000/books/create-book', bookObject)
        .then(res => console.log(res.data));
    

    this.setState({booktitle: '', author: '', genre: '', isbn: ''})
 }

    render() {
        return (<div class = "form-wrapper">
             <Form>
                 <Form.Group controlId="Title">
                     <Form.Label>Title</Form.Label>
                     <Form.Control type="text"/>
                 </Form.Group>
        
             <Form.Group controlId="Author">
                 <Form.Label>Author</Form.Label>
                 <Form.Control type="text"/>
             </Form.Group>

             <Form.Group controlId="Genre">
                 <Form.Label>Genre</Form.Label>
                 <Form.Control type="text" />
             </Form.Group>

             <Form.Group controlId="Isbn">
                 <Form.Label>Isbn</Form.Label>
                 <Form.Control type="text" />
             </Form.Group>

             <Button variant="info" size="lg" block="block" type="submit">
                Create Book
            </Button>
            </Form>
            </div>);   
    }
}

export default CreateBook;
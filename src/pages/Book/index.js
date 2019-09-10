import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Separator from '../../components/Separator';
import { Container, BookLink } from './styles';

const GET_BOOK = gql`
{
  books {
    title
    author {
      name
    }
  }
}
`;

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: Int! = 1) {
    addBook(title: $title, author: $author) {
      title
      author {
        name
      }
    }
  }
`;

export default function BookList() {
  const [book, setBook] = useState('Teste');

  const { loading, data: booksResult } = useQuery(GET_BOOK);
  const [addBook, { data: bookCreated }] = useMutation(ADD_BOOK);

  function handleCreate() {
    addBook({ variables: { title: book, author: 2 } });
  }

  if (loading) return <p>Loading...</p>
  if (bookCreated) {
    return (
      <>
        <h3>Created book</h3>
        <p>{bookCreated.addBook.title}</p>
        <p>{bookCreated.addBook.author.name}</p>
      </>
    );
  }

  return (
    <Container>

      <Input value={book} onChange={(e) => setBook(e.target.value)} />
      <Button onClick={handleCreate}>Create</Button>

      <Separator />

      <BookLink>
        {booksResult && booksResult.books.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong>
            <span>{book.author.name}</span>
          </li>
        ))}
      </BookLink>
    </Container>
  );
}

import React, { useState, useEffect, useMemo } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_TODO = gql`
  {
    allTodoes {
      id,
      text
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    createTodo(text: $type) {
      id
      text
    }
  }
`;

function TodoList() {
  const [data, setData] = useState([]);
  const [newTodo, setNewTodo] = useState('Ir para academia');

  const { loading: loadingList, error, data: list } = useQuery(GET_TODO);
  const [addTodo, { loading: loadingCreate, data: created }] = useMutation(ADD_TODO);

  const loading = useMemo(() => loadingList || loadingCreate, [loadingList, loadingCreate]);

  useEffect(() => {
    if (list)
      setData(list.allTodoes)
  }, [list]);

  useEffect(() => {
    if (created) {
      setData([...list.allTodoes, created.createTodo]);
      setNewTodo('');
    }
  }, [created, list]);

  function handleCreate() {
    addTodo({ variables: { type: newTodo } });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button type="button" onClick={handleCreate}>Add</button>
    </>
  );
}

export default TodoList;
import React, { useContext } from 'react';
import { DeleteTodo, UpdateTodo } from '../../helper/API';
import TodoContext from '../../TodoContext';
import { Button } from '../Button/Button';
import './styles.css';

export const Tab = ({ content, userId, filter }) => {
  const { dispatch } = useContext(TodoContext);
  const handleToggleTodo = async (id) => {
    const body = content.find((todo) => todo.id === id);
    const data = await UpdateTodo({...body, userId});
    dispatch({
      type: 'updateTodo',
      payload: {
        ...data
      },
    });
  };

  const handleDeleteTodo = async (e, id) => {
    e.stopPropagation();
    const status = await DeleteTodo(id);
    if (status === 200) {
      dispatch({
        type: 'deleteTodo',
        payload: {
          userId,
          id
        },
      });
    }
  };

  return (
    <>
      {content.map(({id, title, completed}) => (
        <div
          key={id}
          className={`list-item ${completed ? 'completed' : ''}
          list-item-${
            (filter === 'all'
            || (filter === 'completed' && completed)
            || (filter === 'uncompleted' && !completed)) ? 'show' : ''}`}
          onClick={() => {handleToggleTodo(id)}}
        >
          <div>
            {title}
          </div>
          <div>
            <Button
              moreClass="btn btn-danger"
              text="Delete"
              onClick={(e) => handleDeleteTodo(e, id)}
            />
          </div>
        </div>
      ))}
    </>
  )
}

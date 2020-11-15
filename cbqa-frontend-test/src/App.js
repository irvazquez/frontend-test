import React, { useEffect, useReducer } from 'react'
import { GetTodos } from './helper/API';
import { SortTodos } from './helper/SortTodos';
import { todoReducer } from './todoReducer';
import TodoContext from './TodoContext';
import { Tabs } from './components/Tabs/Tabs';

const init = async () => {
  const data = GetTodos();
  return data;
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, {});
  useEffect(() => {
    init().then(res => {
      const sortTodos = SortTodos(res);
      dispatch({
        type: 'init',
        payload: sortTodos
      });
    });
  }, [])

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {todos !== {} && (
        <Tabs />
      )}
    </TodoContext.Provider>
  )
}

export default App;

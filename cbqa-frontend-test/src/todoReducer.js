export const todoReducer = (state = {}, action) => {
  const { type, payload } = action;
  const { userId } = payload;
  let userTodos = [];
  if (!!userId) {
    userTodos = state[userId];
  }
  switch(type) {
    case 'init':
      return payload;
    
    case 'updateTodo':
      userTodos.forEach((todo, idx) => {
        if (todo.id === payload.id) {
          userTodos[idx].completed = !todo.completed;
        }
      });

      return {...state, [userId]: userTodos};

    case 'deleteTodo':
      return {...state, [userId]: userTodos.filter((todo) => todo.id !== payload.id)};
    default:
      return state;
  }
}
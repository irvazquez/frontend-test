const { GetTodos, UpdateTodo, DeleteTodo, GetTodo } = require("../helper/API");

describe('Testing the API endpoints', () => {
  test('Get and array of todos', async () => {
    const getTodos = await GetTodos();
    
    expect(typeof getTodos).toBe('object');
    expect(getTodos.length).toBeGreaterThan(0);
  });

  test('Update a todo', async () => {
    const todo = await GetTodo(119);
    const updatedTodo = await UpdateTodo({
      ...todo,
      completed: !todo.completed,
    });

    expect(todo.id).toEqual(updatedTodo.id);
    expect(todo.completed === updatedTodo.completed).toBeFalsy();
  });

  test('Deleted a todo', async () => {
    const status = await DeleteTodo(119);

    expect(status).toBe(200);
  });

});
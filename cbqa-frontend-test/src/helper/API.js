const prefix = 'https://jsonplaceholder.typicode.com/';

export const GetTodos = async () => {
  const url = `${prefix}todos/`;
  const res = await fetch( url );
  const data = await res.json();

  return data;
};

export const GetTodo = async (id) => {
  const url = `${prefix}todos/${id}`;
  const res = await fetch( url );
  const data = await res.json();

  return data;
};

export const UpdateTodo = async (body) => {
  const url = `${prefix}todos/${body.id}`;
  const res = await fetch( url, {
    method: 'PUT',
    body: JSON.stringify({
      ...body,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await res.json();

  return data;
};

export const DeleteTodo = async (id) => {
  const url = `${prefix}todos/${id}`;
  const res = await fetch( url, {
    method: 'DELETE',
  });

  return res.status;
};

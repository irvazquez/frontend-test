export const SortTodos = (data) => {
  let newData = {};
  data.forEach(({userId, ...content}) => {
    if (!!newData[userId]) {
      newData[userId].push({...content});
      
    } else {
      newData[userId] = [];
      newData[userId].push({...content});
    }
  });

  return newData;
}
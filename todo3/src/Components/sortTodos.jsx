export const sort = (event, { todos, setTodos, setRefresh }) => {
  event.preventDefault();
  // Преобразование объекта в массив
  const todosArray = Object.entries(todos).map(([id, todo]) => ({
    id,
    ...todo,
  }));
  // Сортировка массива
  const sortedTodosArray = todosArray.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  // Преобразование отсортированного массива обратно в объект
  const sortedTodos = sortedTodosArray.reduce((obj, item) => {
    obj[item.id] = { title: item.title };
    return obj;
  }, {});
  setTodos(sortedTodos);
  setRefresh(true);
};

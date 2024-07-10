import { ref, push } from "firebase/database";
import { db } from "../firebase";

export const addTodos = (event, { setRefresh, refresh, addTodo }) => {
  event.preventDefault();

  const todosDbRef = ref(db, "todos");

  push(todosDbRef, {
    title: `${addTodo}`,
  }).then((data) => {
    console.log(data);
    setRefresh(!refresh);
  });
};

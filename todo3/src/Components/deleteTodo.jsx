import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export const deleteTodo = ({ id }) => {
  const todoDBRef = ref(db, `todos/${id}`);
  remove(todoDBRef);

  // fetch(`http://localhost:3000/todos/${id}`, {
  //   method: "DELETE",
  // })
  //   .then((it) => it.json())
  //   .then((data) => {
  //     setRefresh(!refresh);
  //     console.log(data);
  //   });
};

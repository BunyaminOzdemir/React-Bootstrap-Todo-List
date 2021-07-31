import React from "react";
import ListItem from "./ListItem";

const List = ({ Todos, setTodos }) => {
  return (
    <div className="container bg-secondary mt-5">
      <ol className="list-group p-4 list-unstyled">
        {Todos.map((todo) => (
          <ListItem
            text={todo.text}
            id={todo.id}
            key={todo.id}
            setTodos={setTodos}
            todo={todo}
            Todos={Todos}
          />
        ))}
      </ol>
    </div>
  );
};
export default List;

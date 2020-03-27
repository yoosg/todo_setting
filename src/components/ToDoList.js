import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, remove } from '../store/actions';
const ToDoList = ({ changeInput, insert, remove, todos }) => {
  console.log(todos);
  const valueChange = e => {
    console.log(e.target.value);
    changeInput(e.target.value);
  };
  const onClick = () => {
    insert();
  };
  const deleteBtn = id => {
    console.log(id);
    remove(id);
  };
  return (
    <div>
      <input onChange={valueChange}></input>
      <button onClick={() => onClick()}>등록</button>
      <div>
        {todos.map((element, index) => (
          <div key={element.id}>
            <div>{element.text}</div>
            <button onClick={() => deleteBtn(element.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};

export default connect(mapStateToProps, { changeInput, insert, remove })(
  ToDoList
);

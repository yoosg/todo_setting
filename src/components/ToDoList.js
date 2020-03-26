import React from 'react';
import { connect } from 'react-redux';
import { changeInput } from '../store/actions';
const ToDoList = ({ changeInput, todos }) => {
  console.log(todos);
  const valueChange = e => {
    console.log(e.target.value);
    changeInput(e.target.value);
  };
  return (
    <div>
      <input onChange={valueChange}></input>
      <button>등록</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};

export default connect(mapStateToProps, { changeInput })(ToDoList);

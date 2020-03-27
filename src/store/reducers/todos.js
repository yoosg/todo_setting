const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false
    }
  ]
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        input: action.payload
      };
    case 'INSERT':
      return {
        ...state,
        todos: [...state.todos, { id: action.payload.id, text: state.input }]
      };
    case 'TOGGLE':
      return {};
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter(element => element.id !== action.payload)
      };

    default:
      return state;
  }
}

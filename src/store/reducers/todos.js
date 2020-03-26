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

function todos(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {};
    case 'INSERT':
      return {};
    case 'TOGGLE':
      return {};
    case 'REMOVE':
      return {};

    default:
      return state;
  }
}

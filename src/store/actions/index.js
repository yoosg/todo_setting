export const changeInput = input => {
  return {
    type: 'CHANGE_INPUT',
    payload: input
  };
};

let id = 3;
export const insert = text => {
  return {
    type: 'INSERT',
    payload: {
      text: text,
      id: id++
    }
  };
};

export const toggle = id => {
  return {
    type: 'TOGGLE',
    payload: id
  };
};

export const remove = id => {
  return {
    type: 'REMOVE',
    payload: id
  };
};

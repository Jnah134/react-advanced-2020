export const reducer = (state, action) => {
  if (action.type === 'EXISTENT_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      people: [],
      isModalOpen: true,
      modalContent: 'please enter a value',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPerson = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPerson,
      isModalOpen: true,
      modalContent: 'item has been removed',
    };
  }

  throw new Error('no matching action type');
};

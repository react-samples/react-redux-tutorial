export function addToDo(todo) {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

export function removeToDo(todo) {
  return {
    type: 'REMOVE_TO_DO',
    todo
  }
}

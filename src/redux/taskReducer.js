const tasksInitState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

export const taskReducer = (state = tasksInitState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];

    case "tasks/deleteTask":
      return state.filter((item) => item.id !== action.payload);

    case "tasks/toggleCompleted":
      return state.map((task) =>
        task.id !== action.payload
          ? task
          : { ...task, completed: !task.completed },
      );

    default:
      return state;
  }
};

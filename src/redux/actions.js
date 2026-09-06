export const addTask = (text) => {
  return {
    type: "tasks/addTask",
    payload: {
      id: crypto.randomUUID(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};

export const toggleCompleted = (taskId) => {
  return {
    type: "tasks/toggleCompleted",
    payload: taskId,
  };
};

export const setStatusFilter = (filter) => {
  return {
    type: "filters/setStatusFilter",
    payload: filter,
  };
};

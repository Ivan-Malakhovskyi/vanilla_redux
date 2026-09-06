import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

const devtoolsRedux = devToolsEnhancer();

export const store = createStore(rootReducer, devtoolsRedux);

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "tasks/addTask":
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };

//     case "tasks/deleteTask":
//       return {
//         ...state,
//         tasks: state.tasks.filter((item) => item.id !== action.payload),
//       };

//     case "tasks/toggleCompleted":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id !== action.payload
//             ? task
//             : { ...task, completed: !task.completed },
//         ),
//       };

//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

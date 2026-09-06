import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { statusFilters } from "../constants";
import { getStatusFilter, getTasks } from "../../redux/selectors";

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);

  const getVisibleTasks = (tasksList, filters) => {
    switch (filters) {
      case statusFilters.active:
        return tasksList.filter((item) => !item.completed);

      case statusFilters.completed:
        return tasksList.filter((item) => item.completed);

      default:
        return tasksList;
    }
  };

  return (
    <ul className={css.list}>
      {getVisibleTasks(tasks, statusFilter).map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

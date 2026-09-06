import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { getTasks } from "../../redux/selectors";

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const calcTasks = tasks.reduce(
    (acc, currentItem) => {
      if (currentItem.completed) {
        acc.completed += 1;
        acc.active -= 1;
      }
      acc.active += 1;

      return acc;
    },
    {
      active: 0,
      completed: 0,
    },
  );

  return (
    <div>
      <p className={css.text}>Active: {calcTasks.active}</p>
      <p className={css.text}>Completed: {calcTasks.completed}</p>
    </div>
  );
};

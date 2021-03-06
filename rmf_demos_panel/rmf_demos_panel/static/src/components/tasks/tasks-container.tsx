import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { TaskCard } from "./task-card";
import { useContainerStyles } from "../styles";
import { getTasks } from "../services";
import { socket } from "../socket";

const TasksContainer = (): React.ReactElement => {
  const classes = useContainerStyles();
  const [taskStates, setTaskStates] = React.useState([]);

  const refreshTaskData = async () => {
    let updatedData = await getTasks();
    if (updatedData != taskStates) {
      setTaskStates(updatedData);
    }
  };

  React.useEffect(() => {
    let isSubscribed = true;
    socket.on("task_status", (taskData) => {
      if (isSubscribed) {
        setTaskStates(taskData);
      }
    });
    return () => {
      isSubscribed = false;
    };
  });

  const allTasks = taskStates.map((taskState) => {
    return (
      <Grid item>
        <TaskCard taskState={taskState} />
      </Grid>
    );
  });

  return (
    <div>
      {/* <Typography variant="h5">Tasks</Typography>
      <Button variant="outlined" onClick={refreshTaskData}>
        Refresh
      </Button> */}
      <Grid container className={classes.grid}>
        {taskStates.length > 0 ? (
          allTasks
        ) : (
          <div className="pa-8 mb-2">
            <span className="text-muted fw-bold fs-7">Not founded</span>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default TasksContainer;

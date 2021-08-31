import React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ScheduledTaskForm from "./forms/scheduled-task-form";
import RobotContainer from "./robots/robot-cards-container";
import TasksContainer from "./tasks/tasks-container";
import RostimeClock from "./fixed-components/rostime-clock";
import RequestForm from "./forms/request-form";
import { usePanelContainerStyles } from "./styles";
import { submitAllTasks } from "./services";

const PanelsContainer = (): React.ReactElement => {
  const classes = usePanelContainerStyles();

  return (
    <Grid className={classes.panels}>
      <div className={`card col-xxl-12`}>
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-3 mb-1">Send Task</span>
            <span className="text-muted fw-bold fs-7">
              You could send task to your robot from this section.
            </span>
          </h3>
        </div>

        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={10}>
            <RequestForm />
          </Grid>
          {/* <Grid item xs={5}>
                        <ScheduledTaskForm submitTaskList={submitAllTasks} />
                    </Grid> */}
        </Grid>
      </div>
      <Divider variant="middle" />
      <div className={`card col-xxl-12 mt-8 pa-6`}>
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-3 mb-1">Robot Status</span>
            <span className="text-muted fw-bold fs-7">
              It shows robots status in the fleet.
            </span>
          </h3>
        </div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <RobotContainer />
          </Grid>
        </Grid>
      </div>

      <div className={`card col-xxl-12 mt-8 pa-6`}>
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-3 mb-1">
              Assigned Task Status
            </span>
            <span className="text-muted fw-bold fs-7">
              It show asigned robots task in the fleet
            </span>
          </h3>
        </div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <TasksContainer />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default PanelsContainer;

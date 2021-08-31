import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Autocomplete, {
  AutocompleteRenderInputParams,
} from "@material-ui/lab/Autocomplete";
import { useFormStyles } from "../styles";
import CleaningForm from "./cleaning-form";
import LoopRequestForm from "./loop-request-form";
import DeliveryForm from "./delivery-form";
import { WorldContext } from "../fixed-components/app-context";
import { submitRequest } from "../services";

const RequestForm = (): React.ReactElement => {
  const { config } = React.useContext(WorldContext);
  const [requestTypes, setRequestTypes] = React.useState(config.valid_task);
  console.log(requestTypes);
  const [formType, setFormType] = React.useState("");
  const [loopPlaces, setLoopPlaces] = React.useState([]);
  const [deliveryOptions, setDeliveryOptions] = React.useState({});
  const [cleaningZones, setCleaningZones] = React.useState([]);
  const [minsFromNow, setMinsFromNow] = React.useState(0);
  const [priority, setPriority] = React.useState(0);
  const [timeError, setTimeError] = React.useState("");
  const [priorityError, setPriorityError] = React.useState("");

  React.useEffect(() => {
    if (Object.keys(config).length > 0) {
      setRequestTypes(config.valid_task);
      setLoopPlaces(config.task.Loop.places);
      setDeliveryOptions(config.task.Delivery.option);
      setCleaningZones(config.task.Clean.option);
    } else {
      setRequestTypes([]);
      setFormType("");
      setLoopPlaces([]);
      setDeliveryOptions({});
      setCleaningZones([]);
    }
  }, [config]);

  const returnFormType = (formType: string) => {
    const timeAndPriority = {
      minsFromNow,
      priority,
      setTimeError,
      setMinsFromNow,
      setPriority,
      setPriorityError,
    };
    switch (formType) {
      case "Loop":
        return (
          <LoopRequestForm
            availablePlaces={loopPlaces}
            submitRequest={submitRequest}
            timeAndPriority={timeAndPriority}
          />
        );
      case "Delivery":
        return (
          <DeliveryForm
            deliveryOptions={deliveryOptions}
            submitRequest={submitRequest}
            timeAndPriority={timeAndPriority}
          />
        );
      case "Clean":
        return (
          <CleaningForm
            cleaningZones={cleaningZones}
            submitRequest={submitRequest}
            timeAndPriority={timeAndPriority}
          />
        );
    }
  };

  const classes = useFormStyles();

  return (
    <Box className={classes.form}>
      <div className={classes.divForm}>
        {/* <Typography variant="h6">Submit a Task</Typography>
         */}
        <span className=" fw-bolder fs-4 mb-1">Submit Task</span>

        <div className="mb-4">
          <label className="form-label fw-bold">Task</label>

          <div>
            <select
              className="form-select form-select-solid"
              data-kt-select2="true"
              data-placeholder="Select option"
              data-allow-clear="true"
              defaultValue={"0"}
              onChange={(e) => setFormType(e.target.value)}
            >
              <option></option>

              {typeof requestTypes !== "undefined" ? (
                requestTypes.map((requestType, i) => (
                  <option key={i} value={requestType}>
                    {requestType}
                  </option>
                ))
              ) : (
                <option value="1">None</option>
              )}
            </select>
          </div>
        </div>
        {/* <Autocomplete
          options={requestTypes}
          getOptionLabel={(requestType) => requestType}
          id="set-form-type"
          openOnFocus
          defaultValue={formType}
          onChange={(_, value) => setFormType(value)}
          renderInput={(params: AutocompleteRenderInputParams) => (
            <TextField
              {...params}
              label="Select a request type"
              variant="outlined"
              margin="normal"
            />
          )}
        /> */}
      </div>
      <div className={classes.divForm}>
        <label className="form-label fw-bold">
          Set start time (mins from now)
        </label>
        <input
          type="number"
          className="form-control form-control-lg form-control-solid"
          name="appname"
          placeholder="Set start time (mins from now)"
          value={minsFromNow || 0}
          onChange={(e) => {
            setMinsFromNow(e.target.value ? parseInt(e.target.value) : 0);
          }}
        />
        {/* <TextField
          className={classes.input}
          onChange={(e) => {
            setMinsFromNow(e.target.value ? parseInt(e.target.value) : 0);
          }}
          placeholder="Set start time (mins from now)"
          type="number"
          value={minsFromNow || 0}
          label="Set start time (mins from now)"
          variant="outlined"
          id="set-start-time"
          error={!!timeError}
          helperText={timeError}
        /> */}
      </div>
      <div className={classes.divForm}>
        <label className="form-label fw-bold">
          Choose a priority (Default: 0)
        </label>
        <input
          type="number"
          className="form-control form-control-lg form-control-solid"
          name="appname"
          placeholder="Choose a priority (Default: 0)"
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value ? parseInt(e.target.value) : 0);
          }}
        />
        {/* <TextField
          className={classes.input}
          onChange={(e) => {
            setPriority(e.target.value ? parseInt(e.target.value) : 0);
          }}
          placeholder="0"
          type="number"
          value={priority}
          label="Choose a priority (Default: 0)"
          variant="outlined"
          id="set-priority"
          error={!!priorityError}
          helperText={priorityError}
          InputProps={{ inputProps: { max: 1, min: 0 } }}
        ></TextField> */}
      </div>
      <div className={classes.divForm}>
        {formType && returnFormType(formType)}
      </div>
    </Box>
  );
};

export default RequestForm;

import react from "react";

export const DateRangePikcer = (props) => {
  const updateStartDate = (event) => {
    props.updateStartDate(event.target.value);
  };
  const updateEndDate = (event) => {
    props.updateEndDate(event.target.value);
  };
  const appliFilter = () => {
    props.applyFilter();
  };
  return (
    <div>
      <div className="justify-content-center row d-flex mt-3 p-3">
        <div className="col-md-4 ml-2 ">
          <lable>Start Date:</lable>
          <input
            type="date"
            className="form-control col-md-12"
            value={props.startDate}
            onChange={(event) => {
              updateStartDate(event);
            }}
          />
        </div>
        <div className="col-md-4 ml-2 ">
          <lable>End Date:</lable>
          <input
            type="date"
            className="form-control col-md-12"
            value={props.endDate}
            onChange={(event) => {
              updateEndDate(event);
            }}
          />
        </div>
        <div className="col-md-2 mt-4">
          <button type="button" class="btn btn-primary" onClick={appliFilter}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

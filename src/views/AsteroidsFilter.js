import react, { useEffect, useState } from "react";
import _ from "loadsh";
import "bootstrap/dist/css/bootstrap.min.css";
import { DateRangePikcer } from "../components/DateRangePicker";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Loader } from "../components/loader";
import { useSelector, useDispatch } from "react-redux";
import { asteroidsFilteredListAction } from "../actions";
import { apiServices } from "../util/apiServices";

export const AsteroidsFilter = () => {
  const API_KEY = "ePvPuFrAc79ssItaC7Cls4IuOCfe0CfdrAL36UW4";
  const [startDate, setStartDate] = useState("2022-02-07");
  const [endDate, setEndDate] = useState("2022-02-13");
  const history = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");



  const asteroidsList = useSelector((state) => {
    return state.asteroidsFilteredList;
  });

  useEffect(() => {
    getDateRangeAsteroids();
  }, []);

  const getDateRangeAsteroids = () => {
    apiServices
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`
      )
      .then((response) => {
        setError("")
        if (_.get(response, "status", 0) == 200) {
          dispatch(asteroidsFilteredListAction(response.data));
        }
        else {
          dispatch(asteroidsFilteredListAction({}));
          setError(_.get(response, "message", 0));
        }
      
      });
  };

  const getDiamenter = (diameter) => {
    const { estimated_diameter_min, estimated_diameter_max } =
      diameter.kilometers;
    return `${
      estimated_diameter_min.toFixed(2) +
      " ~ " +
      estimated_diameter_max.toFixed(2)
    } km `;
  };

  const moreDetails = (id) => {
    history("/details", { state: id });
  };

  const getCloseAProachDate = (date) => {
    if (date.length > 0) {
      const close_approach_date_full = date[0].close_approach_date_full;
      return close_approach_date_full;
    } else {
      return "-";
    }
  };
  return (
    <>
      <div>
        <DateRangePikcer
          startDate={startDate}
          endDate={endDate}
          updateStartDate={(value) => setStartDate(value)}
          updateEndDate={(value) => setEndDate(value)}
          applyFilter={getDateRangeAsteroids}
        />
    
    {error ? <span className=" justify-content-center row d-flex mt-3 p-3 text-center text-danger font-weight-bold">{error}</span> : ''}
        {asteroidsList && asteroidsList ? (
          _.map(asteroidsList.near_earth_objects, (obj, index) => (
            <div>
              <div className="m-4 font-weight-bold">
                {" "}
                Close Approach Date: {moment(index).format("DD-MMM-YYYY")}{" "}
              </div>
              <div className="row m-4">
                {_.map(obj, (closeObject) => (
                  <div class=" col-md-3" key={index}>
                    <div className="card mb-4">
                      <div class="card-body">
                        <h5 class="card-title ">{closeObject.name} </h5>
                        <div class="card-text-diameter">
                          Estimated Diameter :{" "}
                          {getDiamenter(closeObject.estimated_diameter)}
                        </div>
                        <div className="card-text-diameter mb-2">
                          Close Approach on:{" "}
                          {getCloseAProachDate(closeObject.close_approach_data)}
                        </div>
                        <button
                          href="#"
                          class="btn btn-primary"
                          onClick={() => moreDetails(closeObject.id)}
                        >
                          See MoreDetails
                        </button>{" "}
                      </div>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : ( 
         <Loader  /> 
         )}
      </div>
    </>
  );
};

import react, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiServices } from "../util/apiServices";
import { Loader } from "../components/loader";
import { useSelector, useDispatch } from "react-redux";
import { asteroidsDetailsAction } from "../actions";
import _ from "loadsh";

export const Details = (props) => {
  const API_KEY = "ePvPuFrAc79ssItaC7Cls4IuOCfe0CfdrAL36UW4";
  const location = useLocation();
  const id = location.state;
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const detail = useSelector((state) => {
    return state.asteroidsDetail;
  });

  useEffect(() => {
    getDetailOfAsteroids();
  }, []);

  const getDetailOfAsteroids = async () => {
    setisLoading(true);
    setError("");
    await apiServices
      .get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`)
      .then((response) => {
        setisLoading(false);
        if (_.get(response, "status", 0) == 200) {
          dispatch(asteroidsDetailsAction(response.data));
        } else {
          setError(_.get(response, "message", 0));
          console.log("asdfsd", error);
        }
      });
  };

  const getEstimatedDiameter = (detail) => {
    const { estimated_diameter_min, estimated_diameter_max } =
      detail.kilometers;
    return `${
      estimated_diameter_min.toFixed(2) +
      " ~ " +
      estimated_diameter_max.toFixed(2)
    } km `;
  };

  return (
    <div className="m-4">
      {error ? (
        <span className=" justify-content-center row d-flex mt-3 p-3 text-center text-danger font-weight-bold">
          {error}
        </span>
      ) : (
        ""
      )}
      {detail && detail ? (
        <div className=" p-4">
          <div className="aster-name ">
            {" "}
            <h1>{detail.name}</h1>{" "}
          </div>

          <div className="p-4">
            <div className="row">
              <div className="col-md-2 col-sm-6 font-weight-bold">ID :</div>
              <div className="col-md-8 col-sm-12"> {detail.id}</div>
            </div>

            <div className="row">
              <div className="col-md-2 col-sm-6 font-weight-bold">
                Destiantion :
              </div>
              <div className="col-md-8 col-sm-12"> {detail.designation}</div>
            </div>

            <div className="row">
              <div className="col-md-2 col-sm-6 font-weight-bold">
                Estimated Diameter :
              </div>
              <div className="col-md-8 col-sm-12">
                {getEstimatedDiameter(detail.estimated_diameter)}
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 col-sm-6 font-weight-bold">
                Absolute Magnitude :
              </div>
              <div className="col-md-8 col-sm-12">
                {detail.absolute_magnitude_h}
              </div>
            </div>
          </div>
        </div>
      ) : isLoading == true ? (
        <Loader />
      ) : (
        ""
      )}
    </div>
  );
};

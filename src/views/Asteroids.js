import react, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "loadsh";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/loader";
import { asteroidsListAction } from "../actions";
import { apiServices } from "../util/apiServices";

export const Astrtoid = () => {
  const API_KEY = "ePvPuFrAc79ssItaC7Cls4IuOCfe0CfdrAL36UW4";
  const [limit, setLimit] = useState(10);
  const [error, setError] = useState("");
  const history = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  

  //getting the asteroids list from the reducer
  const asteroidsList = useSelector((state) => {
    return state.asteroidsList;
  });

  //calling getAsteroids when page mounted
  useEffect(() => {
    getAsteroids();
  }, []);

  // method to call the api to get the Asteroids
  const getAsteroids = () => {
    setisLoading(true);
    apiServices
      .get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
      .then((response) => {
        setisLoading(false);
        if (_.get(response, "status", 0) == 200) {
          dispatch(asteroidsListAction(response.data));
        } else {
          setError(_.get(response, "message", 0));
        }
      });
  };

  // return the diameter in KM
  const getDiamenter = (diameter) => {
    const { estimated_diameter_min, estimated_diameter_max } =
      diameter.kilometers;
    return `${
      estimated_diameter_min.toFixed(2) +
      " ~ " +
      estimated_diameter_max.toFixed(2)
    } km `;
  };

  //routing for he more details page
  const moreDetails = (id) => {
    history("/details", { state: id });
  };

  return (
    <>
      <div>
        <div className="row m-4">
          
          {asteroidsList && asteroidsList ? (
            _.map(
              asteroidsList.near_earth_objects.splice(0, limit),
              (obj, index) => (
                <div class=" col-md-3" key={index}>
                  <div className="card mb-4">
                    <div class="card-body">
                      <h5 class="card-title ">{obj.name} </h5>
                      <p class="card-text-diameter">
                        Estimated Diameter :{" "}
                        {getDiamenter(obj.estimated_diameter)}
                      </p>
                      <button
                        href="#"
                        class="btn btn-primary"
                        onClick={() => moreDetails(obj.id)}
                      >
                        See MoreDetails
                      </button>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
           isLoading == true ? <Loader  /> : error ? <span className="text-center text-danger font-weight-bold">{error}</span> : ''
          )}
        </div>
      </div>
    </>
  );
};

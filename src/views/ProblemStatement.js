import React from "react";

export const ProblemStatement = () => {
  return (
    <section class="about-us py-5 " id="about-us">
      <div class="container ">
        <div class="row">
          <div class="col-md-12 mt-2">
            <h5 class="text-dark">
              Create a ReactJS Web App using the NASA API for Asteroids.!
            </h5>
          </div>
          <div class="col-md-12 mt-2">
            <h6 class="text-dark">Information About API: Asteroids - NeoWs</h6>
          </div>
          <p>
            NeoWs (Near-Earth Object Web Service) is a set of RESTful web
            service APIs for near-earth Asteroid information. With these APIs, a
            user can browse the NASA JPL dataset, look up a specific Asteroid
            with its NASA JPL small body id and search for Asteroids based on
            their closest approach date to Earth,
          </p>

          <div class="col-md-12 mt-3">
            <h6 class="text-dark">Information About API: Asteroids - NeoWs</h6>
            <ol>
              <li>
                Generate the free developer key using the link:
                https://api.nasa.gov/
              </li>

              <li>
                Display a default list of 10 asteroids using Neo Browse API.
                <p>
                  Example Query: https://api.nasa.gov/neo/rest/v1/neo/browse?
                  api_key=DEMO_KEY
                </p>
              </li>

              <li>
                Date component which takes user input as start date and end
                date. On selecting the dates, the webapp should display a list
                of asteroids based on their closest approach date to Earth using
                <p>
                  Example Query: https://api.nasa.gov/neo/rest/v1/feed?
                  start_date=START_DATE&end_date=END_DATE&api_key= API_KEY
                </p>
              </li>

              <li>
                Create a component to lookup more details on a specific asteroid
                based on its ID using Neo Lookup API
                <p>
                  Example Query: https://api.nasa.gov/neo/rest/v1/neo/3542519?
                  api_key=DEMO_KEY
                  start_date=START_DATE&end_date=END_DATE&api_key= API_KEY
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

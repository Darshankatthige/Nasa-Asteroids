import axios from "axios";
import _ from 'loadsh'

export const apiServices = {
  post(resources, payload = {}) {
    return new Promise((resolve) => {
      axios
        .post(resources, payload)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          resolve(error);
        });
    });
  },
  get(resources,payload) {
    return new Promise((resolve) => {
      axios
        .get(resources, payload)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if(_.get(error,'response.data.code') == 400){
            resolve({code: _.get(error,'response.data.code') , message:_.get(error,'response.data.error_message')})
          }else{
            resolve({code:_.get(error,'response.data.error.code'),message:_.get(error,'response.data.error.message') });
          }
        });
    });
  },
};

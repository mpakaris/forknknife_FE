import axios from "axios";

const API_URL = "http://localhost:8000/api";

const chatCompletion = {
  // Create a new task
  getGeneralInformation: function (prompt) {
    return axios.post(API_URL, prompt);
  },
};

export default chatCompletion;

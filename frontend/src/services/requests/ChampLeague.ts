import axios from "axios";
import "dotenv/config";
require("dotenv").config();

const getChampLeagueData = () => {
  axios
    .get("https://api.football-data.org/v4/competitions/CL/matches", {
      headers: { "X-Auth-Token": process.env.API_KEY },
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

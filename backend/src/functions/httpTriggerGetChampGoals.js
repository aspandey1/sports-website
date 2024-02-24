const { app } = require("@azure/functions");
const axios = require("axios");

app.http("httpTriggerGetChampGoals", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    try {
      const footballAPIResponse = await axios.get(
        "https://api.football-data.org/v4/competitions/CL/scorers",
        {
          headers: {
            "X-Auth-Token": process.env.API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      let topScorers = { scorers: [] };

      await footballAPIResponse.data.scorers.forEach((element) => {
        topScorers.scorers.push({
          name: element.player.name,
          teamCrest: element.team.crest,
          gamesPlayed:
            element.playedMatches == null ? 0 : element.playedMatches,
          goals: element.goals == null ? 0 : element.goals,
          assists: element.assists == null ? 0 : element.assists,
        });
      });
      return {
        body: JSON.stringify(topScorers),
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
    } catch (error) {
      return {
        body: "Error",
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
    }
  },
});

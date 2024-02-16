const { app } = require("@azure/functions");
const axios = require("axios");

app.http("httpTrigger1", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);
    try {
      const footballAPIResponse = await axios.get(
        "https://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED",
        {
          headers: {
            "X-Auth-Token": process.env.API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      let upcoming = { matches: [] };

      await footballAPIResponse.data.matches.forEach((element) => {
        if (element.homeTeam.name != null || element.homeTeam.name != null) {
          upcoming.matches.push({
            homeTeamName: element.homeTeam.name,
            homeTeamCrest: element.homeTeam.crest,
            awayTeamName: element.awayTeam.name,
            awayTeamCrest: element.awayTeam.crest,
            scheduled: element.utcDate,
          });
        }
      });

      return {
        body: JSON.stringify(upcoming),
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
    } catch (error) {
      context.error(error);
      return { body: "Request has failed", status: 400 };
    }
  },
});

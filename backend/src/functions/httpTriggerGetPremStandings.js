const { app } = require("@azure/functions");
const axios = require("axios");

app.http("httpTriggerGetPremStandings", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    try {
      const footballAPIResponse = await axios.get(
        "https://api.football-data.org/v4/competitions/PL/standings",
        {
          headers: {
            "X-Auth-Token": process.env.API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      let table = { standings: [] };

      await footballAPIResponse.data.standings.forEach((element) => {
        element.table.forEach((element) => {
          table.standings.push({
            position: element.position,
            playedGames: element.playedGames,
            points: element.points,
            goalDifference: element.goalDifference,
            crest: element.team.crest,
            teamAbv: element.team.tla,
          });
        });
      });

      return {
        body: JSON.stringify(table),
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
    } catch (error) {
      return {
        body: JSON.stringify({
          standings: [
            {
              position: -1,
              playedGames: -1,
              points: -1,
              goalDifference: -1,
              crest: "NAN",
              teamAbv: "NAN",
            },
          ],
        }),

        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
    }
  },
});

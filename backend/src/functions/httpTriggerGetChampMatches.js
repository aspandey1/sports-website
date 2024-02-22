const { app } = require("@azure/functions");
const axios = require("axios");

app.http("httpTrigger1", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
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
      const timezone = request.query.get("local");

      await footballAPIResponse.data.matches.forEach((element) => {
        if (element.homeTeam.name != null || element.homeTeam.name != null) {
          const utc = new Date(element.utcDate);
          const currTime = utc.toLocaleDateString("en-us", {
            day: "2-digit",
            month: "2-digit",
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
            timeZone: timezone,
          });

          const time = currTime.split(",");

          upcoming.matches.push({
            homeTeamName: element.homeTeam.name,
            homeTeamCrest: element.homeTeam.crest,
            homeTeamAbv: element.homeTeam.tla,
            awayTeamName: element.awayTeam.name,
            awayTeamCrest: element.awayTeam.crest,
            awayTeamAbv: element.awayTeam.tla,
            scheduledDate: time[0],
            scheduledTime: time[1],
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
      return {
        body: JSON.stringify({
          matches: [
            {
              homeTeamName: "null",
              homeTeamCrest: "null",
              homeTeamAbv: "NAN",
              awayTeamName: "null",
              awayTeamCrest: "null",
              awayTeamAbv: "NAN",
              scheduledDate: "MM/DD",
              scheduledTime: "00:00 AM",
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

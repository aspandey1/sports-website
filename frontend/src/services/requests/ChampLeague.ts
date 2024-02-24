import axios from "axios";

export async function getChampLeagueData() {
  let local = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const response = await axios.get(
    "http://localhost:7071/api/httpTriggerGetChampMatches",
    {
      params: { local },
    }
  );
  return response.data;
}

export async function getChampGoalData() {
  const response = await axios.get(
    "http://localhost:7071/api/httpTriggerGetChampGoals"
  );
  return response.data;
}

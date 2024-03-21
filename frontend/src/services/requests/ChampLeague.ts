import axios from "axios";

export async function getChampLeagueData() {
  let local = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const response = await axios.get("", {
    params: { local },
  });
  return response.data;
}

export async function getChampGoalData() {
  const response = await axios.get(
    "https://sports-website-backend.azurewebsites.net/api/httpTriggerGetChampGoals?"
  );
  return response.data;
}

import axios from "axios";

export async function getPremMatches() {
  let local = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const response = await axios.get(
    "https://sports-website-backend.azurewebsites.net/api/httpTriggerGetPremMatches?",
    {
      params: { local },
    }
  );
  return response.data;
}

export async function getPremStandings() {
  const response = await axios.get(
    "https://sports-website-backend.azurewebsites.net/api/httpTriggerGetPremStandings?"
  );
  return response.data;
}

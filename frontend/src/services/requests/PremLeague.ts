import axios from "axios";

export async function getPremMatches() {
  let local = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const response = await axios.get(
    "http://localhost:7071/api/httpTriggerGetPremMatches",
    {
      params: { local },
    }
  );
  return response.data;
}

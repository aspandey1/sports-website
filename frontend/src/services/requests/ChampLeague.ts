import axios from "axios";

export async function getChampLeagueData() {
  let local = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const response = await axios.get("http://localhost:7071/api/httpTrigger1", {
    params: { local },
  });
  return response.data;
}

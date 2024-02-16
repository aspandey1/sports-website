import axios from "axios";

export async function getChampLeagueData() {
  const response = await axios.get("http://localhost:7071/api/httpTrigger1");
  return response.data;
}

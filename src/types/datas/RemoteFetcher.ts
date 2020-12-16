import axios from "axios";
import yaml from "js-yaml";

export type DataSet = "achievements" | "fundamental" | "technical";

const DataSetURLs: Map<DataSet, string> = new Map([
  [
    "achievements",
    "https://raw.githubusercontent.com/loxygenK/loxygenk.d/main/achievements.yaml",
  ],
  [
    "fundamental",
    "https://raw.githubusercontent.com/loxygenK/loxygenk.d/main/fundamental.yaml",
  ],
  [
    "technical",
    "https://raw.githubusercontent.com/loxygenK/loxygenk.d/main/technical.yaml",
  ],
]);

export async function fetchFromDefaultDataSet(dataSet: DataSet) {
  // Get url; if the url is available, stop the operation
  const url = DataSetURLs.get(dataSet);
  if (url == null) return null;

  // Get from remote; if failed, return null
  const result = await axios.get(url);
  if (result.status !== 200 || typeof result.data === "object") return null;

  // Parse fetched data; if the data was invalid, return null
  const parsedData = yaml.safeLoad(result.data);
  if (typeof parsedData !== "object") return null;

  // Return the parsed data
  return parsedData;
}

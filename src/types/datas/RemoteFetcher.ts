import axios from "axios";
import yaml from "js-yaml";
import {Achievement} from "./Acheivement";
import {Fundamental} from "./Fundamental";
import {Technical} from "./Techinal";

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

async function fetchFromDefaultDataSet(dataSet: DataSet): Promise<object | null> {
  const url =
    "https://raw.githubusercontent.com/loxygenK/loxygenk.d" +
    `/main/${dataSet}.yaml`;

  const result = await axios.get(url);
  if (result.status !== 200) return null;

  const parsedData = yaml.safeLoad(result.data);
  if (typeof parsedData !== "object") return null;

  return parsedData;
}

export async function fetchAchievements(): Promise<Achievement | undefined> {
  const data = await fetchFromDefaultDataSet("achievements")
  if(data == null)
    return;
  return data as Achievement;
}

export async function fetchFundamentals(): Promise<Fundamental | undefined> {
  const data = await fetchFromDefaultDataSet("fundamental")
  if(data == null)
    return;
  return data as Fundamental;
}

export async function fetchTechnical(): Promise<Technical | undefined> {
  const data = await fetchFromDefaultDataSet("technical")
  if(data == null)
    return;
  return data as Technical;
}

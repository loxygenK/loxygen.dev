import axios from "axios";
import yaml from "js-yaml";
import { Achievement } from "./Acheivement";
import { Fundamental } from "./Fundamental";
import { Technical } from "./Techinal";

export type DataSet = "achievements" | "fundamental" | "technical";

/* eslint-disable @typescript-eslint/ban-types */
async function fetchFromDefaultDataSet(
  dataSet: DataSet
): Promise<object | undefined> {
  /* eslint-enable */

  const url =
    "https://raw.githubusercontent.com/loxygenK/loxygenk.d" +
    `/main/${dataSet}.yaml`;

  const result = await axios.get(url);
  if (result.status !== 200) return;

  const converted = yaml.safeLoad(result.data);
  if (converted == null || typeof converted !== "object") return;

  return converted;
}

export async function fetchAchievements(): Promise<Achievement | undefined> {
  const data = await fetchFromDefaultDataSet("achievements");
  return data as Achievement;
}

export async function fetchFundamentals(): Promise<Fundamental | undefined> {
  const data = await fetchFromDefaultDataSet("fundamental");
  return data as Fundamental;
}

export async function fetchTechnical(): Promise<Technical | undefined> {
  const data = await fetchFromDefaultDataSet("technical");
  return data as Technical;
}

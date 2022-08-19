<<<<<<< HEAD
import data from "./aptData.json";

export const dataList = data;
=======
import data from "./data.json";

export const dataList = data;

const savedList = [];

export function addSaved(key) {
  savedList.push(key);
}

export function savedLists() {
  const set = new Set(savedList);
  return dataList.filter((item) => {
    return set.has(item.key);
  });
}
>>>>>>> bc110f43929460d54bb503018b72b55ae2e0f7b0

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

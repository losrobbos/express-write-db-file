import fs from "fs";

export const readDb = () => {
  const dbString = fs.readFileSync("./data.json", "utf8");
  return JSON.parse(dbString);
};

export const writeDb = (db) => {  
  fs.writeFileSync("./data.json", JSON.stringify(db), "utf8");
};

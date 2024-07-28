const fs = require("fs");
const jsonFilePath = "../public/json/history.json";

// Function to recursively convert all keys in an object to lowercase
function convertKeysToLowercase(obj) {
  if (Array.isArray(obj)) {
    return obj.map(convertKeysToLowercase);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key.toLowerCase()] = convertKeysToLowercase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
}

// Read the JSON file
fs.readFile(jsonFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Parse the JSON data
  let jsonData = JSON.parse(data);

  // Convert keys to lowercase
  let lowercaseData = convertKeysToLowercase(jsonData);

  // Write the modified JSON to a new file
  fs.writeFile(
    jsonFilePath,
    JSON.stringify(lowercaseData, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("history.json lowercased.");
    }
  );
});

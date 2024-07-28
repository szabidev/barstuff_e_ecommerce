const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const jsonFilePath = "../public/json/cocktails_distilled.json";

// Read the JSON file
fs.readFile(jsonFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Parse the JSON data
  let cocktails = JSON.parse(data);

  // Iterate through each cocktail
  cocktails.forEach((cocktail) => {
    // Iterate through the ingredients
    cocktail.ingredients = cocktail.ingredients.map((ingredient) =>
      ingredient.replace("\n", " ")
    );
  });

  // Add a cocktail_id to each cocktail
  cocktails = cocktails.map((cocktail) => ({
    ...cocktail,
    cocktail_id: uuidv4(),
  }));

  // Write the updated JSON data back to the file
  fs.writeFile(
    jsonFilePath,
    JSON.stringify(cocktails, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log(
        "cocktails_distilled.json has been updated with cocktail_id."
      );
    }
  );
});

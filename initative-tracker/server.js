const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
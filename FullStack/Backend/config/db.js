const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.dpithd6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
    .connect(uri, {
        dbName: "TFP-Project-TODO-LIST",
    })
    .then(() => console.log("------------ MongoDB Connected ✅ ------------\n"))
    .catch((err) => console.log("------------ MongoDB Connection Error ❌ ------------\n", err));

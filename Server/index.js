import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routers/posts.js ";
const app = express();
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
// app.get("/", (req, res) => {
//   res.send("SUCCESS");
// });

app.use("/posts", posts);

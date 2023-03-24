const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;
// require("dotenv").config();
// var jwt = require("jsonwebtoken");
// This is your test secret API key.

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Database Connection /umfWExgBgWy6Itxj
const uri =
  "mongodb+srv://voting-system:J5c8aKNHu3uCtbEz@cluster0.sawjoqx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
/**=======================================
                verifyJWT
  =====================================*/

// function verifyJWT(req, res, next) {
//   console.log("varifay", req.headers.authorization);
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).send("unauthorized access");
//   }
//   const token = authHeader.split(" ")[1];
//   jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
//     if (err) {
//       return res.status(403).send({ message: "forbidden access" });
//     }
//     req.decoded = decoded;
//     next();
//   });
// }

async function run() {
  try {
    /**=======================================
                     mongodb start 
      ======================================*/
    const votersCollection = client.db("votingsystem").collection("voters");

    /**=======================================
                       mongodb End 
      ======================================*/
    app.get("/voters", async (req, res) => {
      const query = {};
      const cursor = votersCollection.find(query);
      const voters = await cursor.toArray();
      res.send(voters);
    });
  } finally {
  }
}

run().catch((err) => console.error(err));

app.get("/", async (req, res) => {
  res.send("VotingSystem is running ....");
});

app.listen(port, () => console.log(`VotingSystem running on ${port}`));

require("dotenv").config();

const server = require("./api/server.js");

// const process = {
//   env: {
//     // The computer the server is running on
//     PORT: 23476,
//   },
// };

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

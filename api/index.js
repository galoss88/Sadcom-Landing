const port = 3001
const serverHttp = require("./src/app");
const { conn } = require("./src/db.js");

conn.sync({ force: false}).then(() => {
  serverHttp.listen(port || 3001, () => {
    console.log(`server ready en el puerto ${3001}`);
  });
});
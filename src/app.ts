import express from "express";

const app = express();

/* app.get("/find", (req, res) => {
  res.status(200).send({
    message: "FIND SUCESSO",
    id: 1,
    name: "João Teste da Silva",
    email: "joaoteste@email.com",
  });
}); */

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

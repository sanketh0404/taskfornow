import express from "express";

const app = express();

const PORT = 5002;

app.use(express.json());



app.get("/", (req, res) => {
  res.status(200).send("hello server");
});


app.get("/global", (req, res) => {
  res.json({  message: "hello global server " });
});


app.post("/register", (req, res) => {
  res.json({message:"user registered succesfully"})

  console.log("user registered succesfully", userData);

});
app.post("/students/:roll",(req,res)=>{
  let id = req.params.roll;//body is not requred
  console.log(id)
  res.json(id)
})

app.put("/update", (req, res) => {
res.json({message:"user updated succesfully"})
  console.log("user updated succesfully", userData);

});

app.delete("/delete", (req, res) => {
res.json({message:"user deleted succesfully"})
  console.log("user deleted succesfully", userData);

});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



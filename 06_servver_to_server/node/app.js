import express from "express"; 

const app = express(); 

app.get("/date", (req, res) => {
    res.send(new Date());
});

app.get("/datefromfastapi", async (req, res) => {

    const response = await fetch("http://127.0.0.1:8000/date") //Fetch data from one API
    const date = await response.json(); //Gem det i en variabel 
    res.send(date); //Send dette som svar til klienten. 

});

const port = 8080;
app.listen(port, () => console.log("server is now running on port", port))
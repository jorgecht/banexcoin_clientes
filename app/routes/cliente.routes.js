module.exports = app => {
    const clientes = require("../controllers/cliente.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", clientes.create);
  
    // Retrieve all clientes
    router.get("/", clientes.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", clientes.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", clientes.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", clientes.delete);
  
    app.use("/api/v1/clientes", router);
  };
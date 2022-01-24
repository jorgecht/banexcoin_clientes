const db = require("../models");
const Cliente = db.clientes;
const Op = db.Sequelize.Op;

// Create and Save a new cliente
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Crea un cliente
  const cliente = {
    fname: req.body.fname,
    lname: req.body.lname,
    address: req.body.address,
    birthdate: req.body.birthdate,
    status: req.body.status
  };

  // Guarda un cliente
  Cliente.create(cliente)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cliente."
      });
    });
};

// Llama a todos clientes
exports.findAll = (req, res) => {
  const fname = req.query.fname;
  //var condition = fname ? { fname: { [Op.iLike]: `%${fname}%` } } : null;
 //{ where: condition }
  Cliente.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clientes."
      });
    });
};

// Encuenctra un cliente
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cliente.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving cliente with id=" + id
      });
    });
};

// Actualiza un cliente
exports.update = (req, res) => {
  const id = req.params.id;

  Cliente.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "cliente was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update cliente with id=${id}. Maybe cliente was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating cliente with id=" + id
      });
    });
};

// Delete a cliente with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Cliente.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "cliente was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete cliente with id=${id}. Maybe cliente was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete cliente with id=" + id
      });
    });
};


module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      fname: {
        type: Sequelize.STRING
      },
      lname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.INTEGER
      }
    });
  
    return Cliente;
  };
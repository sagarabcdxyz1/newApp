module.exports = (sequelize, Sequelize) => {

    const Tutorial = sequelize.define("test", {
    
    name: {
    
    type: Sequelize.STRING
    
    }
    
    });
    
    return Tutorial;
    
};
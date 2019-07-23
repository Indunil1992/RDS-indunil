module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["InduInstance"] = {
        host: process.env.EndPoint_rdsInduInstance,
        port: process.env.Port_rdsInduInstance,
        user: process.env.User_rdsInduInstance,
        password: process.env.Password_rdsInduInstance,
        database: "indunilDBname"
    };
};
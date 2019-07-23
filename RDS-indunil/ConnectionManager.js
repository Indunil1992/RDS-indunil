module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["Sachithraidentifier"] = {
        host: process.env.EndPoint_rdsSachithraidentifier,
        port: process.env.Port_rdsSachithraidentifier,
        user: process.env.User_rdsSachithraidentifier,
        password: process.env.Password_rdsSachithraidentifier,
        database: "sachithraDB"
    };
};
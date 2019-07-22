module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["indunil1234567890"] = {
        host: process.env.EndPoint_rdsIndunil1234567890,
        port: process.env.Port_rdsIndunil1234567890,
        user: process.env.User_rdsIndunil1234567890,
        password: process.env.Password_rdsIndunil1234567890,
        database: "indunil"
    };
};
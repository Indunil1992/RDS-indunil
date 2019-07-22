module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["indunil123123123123123123-"] = {
        host: process.env.EndPoint_rdsIndunil123123123123123123,
        port: process.env.Port_rdsIndunil123123123123123123,
        user: process.env.User_rdsIndunil123123123123123123,
        password: process.env.Password_rdsIndunil123123123123123123,
        database: "indunil"
    };
};
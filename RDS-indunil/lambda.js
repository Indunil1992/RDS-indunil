let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {

    // You must always end/destroy the DB connection after it's used
    rds.beginTransaction({
        instanceIdentifier: 'indunil1234567890'
    }, function (error, connection) {
        if (error) {
            console.log("error 1");
            throw error;
            console.log("error 2");
        }
    });



    callback(null, { "message": "Successfully executed" });
}
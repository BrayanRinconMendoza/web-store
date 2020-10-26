var mysql = require ('mysql')

var conection = mysql.createConnection({
    host: 'localhost',
    user: 'cicla',
    password: 'cicla',
    database: 'dbcicla'
})

conection.connect( function(err) {
    if(err) {
    console.log('la conexion funciona'+ err.stack);
    return;
    }
    console.log('conectado con el identificador'+ conection.threadId);
})

conection.query('SELECT * FROM user', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

conection.end();

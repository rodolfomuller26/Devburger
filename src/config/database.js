module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'devburger',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    },
};
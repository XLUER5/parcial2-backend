import { Sequelize } from "sequelize";

const db =  new Sequelize("database_app","admin","Luisca1704.",{
    host: 'reactcrud.cdvvaibuevei.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
})

export default db;
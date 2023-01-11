import {Sequelize} from "sequelize";
 
const db = new Sequelize('dbjs','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;
import { AnimalesEntity } from "./db.animals.entity"

module.exports = {
    type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'nested',
        entities: [AnimalesEntity],
        synchronize: true,
  }
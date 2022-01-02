import { DataTypes, Database, Model, MySQLConnector } from '../deps.ts';

interface DbConfig {
  host: string;
  database: string;
  username: string;
  password: string;
}

// Define Model
export class Items extends Model {
  static table = 'items';

  static fields = {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING,
    available: DataTypes.BOOLEAN
  };
}

export function initDb(config: DbConfig) {
  // Setup connector: MySQL
  const connection = new MySQLConnector({
    database: config.database,
    host: config.host,
    username: config.username,
    password: config.password,
  });

  // Create DB instance
  const db = new Database(connection);

  // Link Model to DB
  db.link([Items]);

  // Create tables if they do not exist
  // await db.sync();
  return db;
}
import { knex } from "knex"

/*export const db = knex({
    client: "sqlite3",
    connection: {
        filename: "./src/database/poo-2.db",
    },
    useNullAsDefault: true,
    pool: { 
        min: 0,
        max: 1,
        afterCreate: (conn: any, cb: any) => {
            conn.run("PRAGMA foreign_keys = ON", cb)
        }
    }
})*/

export abstract class BaseDatabase{
    protected static connection = knex({
        client: "sqlite3",
        connection: {
            filename: "./src/database/poo-2.db",
        },
        useNullAsDefault: true,
        pool: { 
            min: 0,
            max: 1,
            afterCreate: (conn: any, cb: any) => {
                conn.run("PRAGMA foreign_keys = ON", cb)
            }
        }
    })
}

//const baseDatabase = new BaseDatabase()
//baseDatabase.connection("users").where({id: "u001"})
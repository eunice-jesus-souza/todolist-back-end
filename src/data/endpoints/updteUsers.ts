import { connection } from "../..";

export default async function updateUsers(
    id: string,
    name?: string,
    nickname?: string,
    email?: string
){
    if (name) {
        await connection.raw(`
            UPDATE to_do_list_users
            SET name = ${name}
            WHERE id = ${id}
        `)
    }

    if (nickname){
        await connection.raw(`
            UPDATE to_do_list_users
            SET name = ${nickname}
            WHERE id = ${id}
        `)
    }

    if (email){
        await connection.raw(`
            UPDATE to_do_list_users
            SET name = ${email}
            WHERE id = ${id}
        `)
    }
}
    

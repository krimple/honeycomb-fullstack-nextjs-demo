'use server';

import {getPool} from "@/app/utils/pool";

export async function getLibraryBooks() {
    return new Promise(async (resolve, reject) => {
        try {
            const pool = getPool();
            // renaming to camelCase for returned data, ibid
            const result = await pool.query(
                `SELECT isbn, name, description, publication_date AS "publicationDate"
             FROM books 
             ORDER BY id ASC`);
            resolve(result.rows);
        } catch (err) {
            reject(err);
        }
    });
}
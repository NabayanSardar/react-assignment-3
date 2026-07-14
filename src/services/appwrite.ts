import { Client, TablesDB, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6a5500e00023f2b8f879");

export const tablesDB = new TablesDB(client);

export const account = new Account(client);

export const DATABASE_ID = "6a55020a00073b062ff6";
export const TABLE_ID = "studentsinformation";

export { ID };
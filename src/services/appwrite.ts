// import { Client, Account, Databases, ID } from "appwrite";

// const client = new Client();

// client
//   .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
//   .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// export const account = new Account(client);

// export const databases = new Databases(client);

// export const DATABASE_ID =
//   import.meta.env.VITE_APPWRITE_DATABASE_ID;

// export const COLLECTION_ID =
//   import.meta.env.VITE_APPWRITE_COLLECTION_ID;

// export { ID };


// import { Client, TablesDB, ID } from "appwrite";

// const client = new Client()
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("6a5500e00023f2b8f879");

// export const tablesDB = new TablesDB(client);

// export const DATABASE_ID = "your_database_id";
// export const TABLE_ID = "your_table_id";

// export { ID };


import { Client, TablesDB, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6a5500e00023f2b8f879");

// ✅ Tables (for students data)
export const tablesDB = new TablesDB(client);

// ✅ Account (for login/logout)
export const account = new Account(client);

export const DATABASE_ID = "6a55020a00073b062ff6";
export const TABLE_ID = "studentsinformation";

export { ID };
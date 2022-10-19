import * as SQLite from "expo-sqlite";

const userDB = SQLite.openDatabase("USER.db");

export const CreateTable = () => {
  const promise = new Promise((resolve, reject) => {
    userDB.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS TBLUSER (FLDID TEXT NULL, FLDNAME TEXT NULL, FLDPASSWORD TEXT NULL);",
        [],
        (_, result) => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertLogin = (id, name, password) => {
  const promise = new Promise((resolve, reject) => {
    userDB.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO TBLUSER (
            FLDID,    
            FLDNAME,    
            FLDPASSWORD   
            ) VALUES (?, ?, ?);`,
        [id, name, password],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const checkInsertItem = (FLDID) => {
  const promise = new Promise((resolve, reject) => {
    userDB.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM TBLUSER WHERE FLDID = (?);",
        [FLDID],
        (_, result) => {
          if (result.rows.length > 0) {
            resolve(result.rows._array[0].FLDID);
          } else {
            resolve(null);
          }
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const getUserData = () => {
  const promise = new Promise((resolve, reject) => {
    userDB.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM TBLUSER",
        [],
        (_, result) => {
          resolve(result.rows._array);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

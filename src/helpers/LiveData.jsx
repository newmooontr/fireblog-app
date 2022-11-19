import {getDatabase, set, ref} from "firebase/database";

const database = getDatabase();

export function writeUserData(data, userId, container) {
  const db = getDatabase();
  set(ref(db, `${container}/` + userId), {
    ...data,
  });
}

function LiveData() {}

export default LiveData;

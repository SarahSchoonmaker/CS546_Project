// This data file should export all functions using the ES6 standard as shown in the lecture code
import {users} from "../config/mongoCollections"
import {ObjectId} from "mongodb"

const exportedMethods = {
    create : async (
        username,
        firstName,
        lastName,
        email,
        hashedPW,
        address,
        avatar,
    ) => {},

    getAll : async () => {}, //not sure if we need this

    get : async (userId) => {},

    update : async (
        username,
        firstName,
        lastName,
        email,
        hashedPW,
        address,
        avatar,
    ) => {},
  
    remove : async (userId) => {}
}


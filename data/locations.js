// This data file should export all functions using the ES6 standard as shown in the lecture code
import {locations} from "../config/mongoCollections"
import {ObjectId} from "mongodb"

const exportedMethods = {
  create : async (
    name,
    address,
    locationType,
    rating
  ) => {},

  getAll : async () => {},

  get : async (locationId) => {},

  update : async (
    locationId,
    name,
    address,
    locationType,
    rating
  ) => {},

  remove : async (reviewId) => {}
}


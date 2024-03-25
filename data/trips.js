// This data file should export all functions using the ES6 standard as shown in the lecture code
import {trips} from "../config/mongoCollections"
import {ObjectId} from "mongodb"

const exportedMethods = {
  create : async (
    postTitle,
    userId,
    startLocation,
    endLocation,
    locationList,
    description,
    photoList,
    rating,
  ) => {
    let newTrip = {
      postTitle: postTitle,
      userId: userId,
      datePosted: `${new Date().toLocaleDateString('en-US',{day:'2-digit', month:'2-digit',year:'numeric'})}`,
      startLocation: startLocation,
      endLocation: endLocation,
      locationList: locationList,
      description: description,
      photoList: photoList,
      rating: rating,
      comments:[]
    }
  
    //validation
  
    const tripsCollection = await trips();
  
    const insertTripInfo = await tripsCollection.insertOne(newTrip)
    if(!insertTripInfo.acknowledged || insertTripInfo.insertedId.toString()){
      throw('Could not add trip!')
    }

    console.log("Trip added!")
    const newId = insertTripInfo.insertedId
    const savedTrip = await tripsCollection.findOne({_id: newId})
    return savedTrip
  },
  
  getAll : async () => {},
  
  get : async (tripId) => {},
  
  remove : async (tripId) => {},
  
  update : async (
    tripId,
    postTitle,
    userId,
    startLocation,
    endLocation,
    locationList,
    description,
    photoList,
    rating,
  ) => {},
  
  createComment : async (
    tripId,
    posterId,
    commentBody
  ) => {

  },

  updateComment : async (
    tripId,
    posterId,
    commentBody
  ) => {},

  removeComment : async (
    tripId,
    posterId
  ) => {},
}

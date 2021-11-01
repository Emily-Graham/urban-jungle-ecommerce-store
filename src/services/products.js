import firestore from "./firestore";

//cleaned plants 
const cleanPlant = (docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
})

const cleanedPlants = (querySnapshot) => {
  return querySnapshot.docs.map(cleanPlant);
}

//get products
export const getProducts = async () => {
  const colRef = firestore.collection("plants");
  const snapshot = await colRef.get();
  return cleanedPlants(snapshot);
}

//find plant
export const findPlant = async (id) => {
  const colRef = firestore.collection("plants");
  const docRef = colRef.doc(id);
  const docSnap = await docRef.get();
  return cleanPlant(docSnap);
}

//get plants in cart
export const findCartPlants = async () => {
  const colRef = firestore.collection("plants").where("cart", "==", true);
  const snapshot = await colRef.get();
  return cleanedPlants(snapshot);
}

//get plants with a status
export const findStatusPlants = async () => {
  const colRef = firestore.collection("plants").where("status", "in", ["new", "sale"]);
  const snapshot = await colRef.get();
  console.log(snapshot);
  return cleanedPlants(snapshot);
}

//update plant
export const updatePlant = async (id, newValue) => {
  const colRef = firestore.collection("plants");
  const docRef = colRef.doc(id);
  await docRef.update(newValue);
}
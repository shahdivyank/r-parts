import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";

const handler = async (req, res) => {
  await addDoc(collection(db, "purchases"), {
    ...req.body,
    created: Timestamp.now(),
  });

  res.status(200).json();
};

export default handler;

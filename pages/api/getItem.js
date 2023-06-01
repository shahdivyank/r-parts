import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const handler = async (req, res) => {
  const docSnap = await getDoc(doc(db, "items", req.body.id));

  res.status(200).json({
    id: docSnap.id,
    data: {
      ...docSnap.data(),
      classes: docSnap.data().classes.split(","),
      specifications: docSnap.data().specifications.split(","),
    },
  });
};

export default handler;

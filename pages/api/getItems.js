import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

const handler = async (req, res) => {
  const output = [];
  const docSnap = await getDocs(collection(db, "items"));
  docSnap.forEach((doc) => {
    output.push({
      id: doc.id,
      data: {
        ...doc.data(),
        classes: doc.data().classes.split(","),
        specifications: doc.data().specifications.split(","),
      },
    });
  });

  res.status(200).json(output);
};

export default handler;

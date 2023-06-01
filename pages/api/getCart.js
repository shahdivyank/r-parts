import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const handler = async (req, res) => {
  const docSnap = await getDoc(doc(db, "carts", req.body.uid));
  const ids = [];

  const getItem = async (key) => {
    const docItemSnap = await getDoc(doc(db, "items", key));
    ids.push({ [key]: docSnap.data()[key] });
    return {
      id: key,
      data: { ...docItemSnap.data(), quantity: docSnap.data()[key] },
    };
  };

  const output = await Promise.all(Object.keys(docSnap.data()).map(getItem));

  console.log(ids);

  res.status(200).json({ cart: output, id: ids });
};

export default handler;

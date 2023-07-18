// import Image from "next/image";
// import Plus from "../public/PlusSign.svg";
import { useState } from "react";

const SellPhoto = ({ setImages, images }) => {
  const [image, setImage] = useState(null);

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUpload = async () => {
    const base64String = await readFileAsBase64(image);
    setImages([...images, base64String]);
  };

  return (
    <>
      <div className="border-rparts-subheadingGray border rounded-3xl aspect-square flex justify-center items-center flex-col w-1/5 m-[1%]">
        <div className="w-3/12">
          {/* <Image src={Plus} alt="Landing" layout="responsive" /> */}

          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button onClick={handleUpload}>UPLOAD</button>
        </div>
      </div>
    </>
  );
};

export default SellPhoto;

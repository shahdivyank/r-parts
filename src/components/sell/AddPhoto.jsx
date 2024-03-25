import React, { useState } from "react";

const AddPhoto = ({ setImages, images }) => {
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
    <div className="grid grid-cols-4 gap-4 mb-20">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="border rounded-3xl aspect-square flex justify-center items-center flex-col w-full m-[1%]"
        >
          <div className="w-1/2">
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button
              className="border border-parts-gray-500 py-2 px-3 mt-4 text-parts-gray-500 rounded-3xl text-xs"
              onClick={handleUpload}
            >
              UPLOAD FROM COMPUTER
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddPhoto;

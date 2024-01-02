"use client";
import { COLOR, ROUNDED, SIZE } from "@/data/Button";

const Button = ({ text, onClick, rounded, color, size }) => {
  return (
    <div
      className={`cursor-pointer ease-in-out transition-all text-center ${COLOR[color]} ${ROUNDED[rounded]} ${SIZE[size]}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;

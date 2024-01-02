"use client";
import { COLOR, ROUNDED, SIZE } from "@/data/Button";

const Button = ({ text, onClick, rounded, color, size }) => {
  return (
    <div
      className={`cursor-pointer ease-in-out transition-all duration-300 text-center hover:opacity-90 ${COLOR[color]} ${ROUNDED[rounded]} ${SIZE[size]}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;

"use client";
import { COLOR, ROUNDED, SIZE } from "@/data/Button";

const Button = ({ text, onClick, rounded, color, size }) => {
  return (
    <div
      className={`cursor-pointer hover:opacity-90 ${COLOR[color]} ${ROUNDED[rounded]} ${SIZE[size]}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;

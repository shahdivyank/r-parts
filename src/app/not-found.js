"use client";
import Error from "@/components/Error";

const NotFoundError = () => {
  return (
    <Error
      code="404"
      name="PAGE NOT FOUND"
      message="The page you are looking for does not seem to exist."
    />
  );
};

export default NotFoundError;

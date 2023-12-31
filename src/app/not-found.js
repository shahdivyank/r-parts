"use client";
import Error from "@/components/Error";

const NotFoundError = () => {
  return (
    <Error
      name="Page Not Found"
      code="404"
      message="The page you are looking for does not seem to exist."
    />
  );
};

export default NotFoundError;

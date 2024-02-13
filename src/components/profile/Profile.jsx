import Information from "./Information";
import Data from "./Data";

const Profile = ({ searchParams }) => {
  return (
    <div className="flex w-11/12 gap-4">
      <Information />
      <Data current={searchParams["index"]} />
    </div>
  );
};

export default Profile;

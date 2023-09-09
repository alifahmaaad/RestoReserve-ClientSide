import { useState } from "react";
import ModalUserDetail from "./ModalUserDetails";

const UserCard = ({ userData }) => {
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <div className="relative w-full rounded-md px-5 py-2 font-serif shadow-md">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-bold">Full Name : {userData.fullName}</p>
          </div>
          <p>Username : {userData.username}</p>
        </div>
        <div className="flex gap-5">
          <a className="font-mono text-[#e52535] hover:drop-shadow-xl" href="#">
            Delete
          </a>
          <a className="font-mono text-[#FFB100] hover:drop-shadow-xl" href="#">
            Edit
          </a>
          <button
            className="font-mono text-[#FFB100] hover:drop-shadow-xl"
            onClick={() => SetIsOpen(!isOpen)}
          >
            See details
          </button>
        </div>
      </div>
      <ModalUserDetail open={isOpen} userData={userData} />
    </div>
  );
};

export default UserCard;

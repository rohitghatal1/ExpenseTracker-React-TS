import { Avatar, Drawer, Form, Popconfirm, Popover } from "antd";
import Logo from "../assets/logo/BharoshaLogo.png";
import { LuUser } from "react-icons/lu";
import { MdLock, MdLogout } from "react-icons/md";
import { TfiUser } from "react-icons/tfi";
import { useState } from "react";

const Header: React.FC = () => {
  const [isUpdateProfileDrawerVisible, setIsUpdateProfileDrawerVisible] =
    useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem("expenseTrackerAccessToken");
    window.location.href = "/";
  };

  const content = (
    <div className="">
      <div className="flex items-center my-1">
        <Avatar className="bg-gray-300 text-white mx-4 h-[60px] w-[60px] ">
          <LuUser />
        </Avatar>

        <div className="mr-3">
          <p className=" text-sm font-semibold">Rohit Ghatal</p>
          <p className=" text-sm font-medium text-gray-500">9806415229</p>
        </div>
      </div>

      <hr className="w-full h-3" />
      <div className="m-2">
        <p
          className="flex items-center  font-semibold mb-2  cursor-pointer"
          onClick={() => setIsUpdateProfileDrawerVisible(true)}
        >
          <TfiUser className="mr-2" /> Update profile
        </p>

        <p className="flex items-center  font-semibold mb-2  cursor-pointer">
          <MdLock className="mr-2" /> Change Password
        </p>

        <Popconfirm
          title="Logout"
          placement="bottomRight"
          description="Are you sure to logout?"
          okText="Yes"
          cancelText="No"
          okButtonProps={{ className: "bg-red-400" }}
          onConfirm={handleLogout}
        >
          <p className="flex items-center  font-semibold  mb-2  cursor-pointer">
            <MdLogout className="mr-2" /> Logout
          </p>
        </Popconfirm>
      </div>
    </div>
  );

  return (
    <>
      <header className="flex items-center justify-between px-5 h-[70px] shadow-md">
        <div className="flex items-center gap-3">
          <div>
            <Avatar
              className="bg-gray-300 text-white min-h-[45px] min-w-[45px] "
              src={Logo}
            >
              <span className="text-[30px]">Expense Tracker</span>
            </Avatar>
          </div>

          <div className="flex justify-between gap-5 items-center">
            <div className="">
              <div className="font-semibold text-[14px]">Rohit Ghatal</div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3  px-5">
          <Popover
            placement="bottomRight"
            trigger="click"
            zIndex={100}
            content={content}
            className="flex cursor-pointer items-center gap-2"
          >
            <Avatar className="bg-gray-300 text-white  h-[40px] w-[40px]">
              <LuUser />
            </Avatar>
          </Popover>
        </div>
      </header>

      <Drawer
        open={isUpdateProfileDrawerVisible}
        onClose={() => setIsUpdateProfileDrawerVisible(false)}
        width={500}
        title="Update Profile"
      >
        <Form></Form>
      </Drawer>
    </>
  );
};
export default Header;

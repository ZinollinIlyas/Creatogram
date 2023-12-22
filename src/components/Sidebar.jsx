import Logo from "./Logo";
import CommunitiesLogo from "./icons/CommunitiesLogo";
import HomeLogo from "./icons/HomeLogo";
import JobsLogo from "./icons/JobsLogo";
import MessagesLogo from "./icons/MessagesLogo";
import ProfileLogo from "./icons/ProfileLogo";
import ExploreLogo from "./icons/ExploreLogo";
import Ava from "./icons/Ava";
const Sidebar = () => {
  return (
    <div className="fixed w-64 h-screen bg-white justify-self-start p-5">
      <div className="flex flex-col">
        <Logo/>
        <div className="mt-12 flex justify-start cursor-pointer">
          <HomeLogo/>
          <p>Home</p>
        </div>
        <div className="mt-12 flex justify-start cursor-pointer">
          <ExploreLogo/>
          <p>Explore</p>
        </div>
        <div className="mt-12 flex justify-start">
          <CommunitiesLogo/>
          <p>Communities</p>
          <p className="ml-auto bg-[#394AE2] py-1 px-1.5 rounded-[44px] text-xs white text-white not-italic font-light">Soon</p>
        </div>
        <div className="mt-12 flex justify-start">
          <MessagesLogo/>
          <p>Messages</p>
          <p className="ml-auto bg-[#394AE2] py-1 px-1.5 rounded-[44px] text-xs white text-white not-italic font-light">Soon</p>
        </div>
        <div className="mt-12 flex justify-start">
          <JobsLogo/>
          <p>Jobs</p>
          <p className="ml-auto bg-[#394AE2] py-1 px-1.5 rounded-[44px] text-xs white text-white not-italic font-light">Soon</p>
        </div>
        <div className="mt-12 flex justify-start cursor-pointer">
          <ProfileLogo/>
          <p>Profile</p>
        </div>
        <div className="w-54 mt-16 bg-[#394AE2] py-2 px-3 rounded-[44px] text-white">Post</div>
        <div className="mt-48 flex">
          <Ava/>
          <div className="text-left ml-2">
            <p className="text-sm">Dan Denisov</p>
            <p className="text-xs">dandan2304@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
import "./Sidebar.css"
import CottageIcon from '@mui/icons-material/Cottage';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SidebarOption } from "./SidebarOption";
import MovingIcon from '@mui/icons-material/Moving';


export const Sidebar = () => {
    
  return (
    <div className="sidebar">
    
    <MovingIcon className="sidebar-logo"/>

    <SidebarOption active Icon ={CottageIcon} text="Home"/>
    <SidebarOption Icon ={ExploreIcon} text="Explore"/>
    <SidebarOption  Icon ={BookmarkIcon}text="Bookmarks"/>
    <SidebarOption Icon ={AccountCircleIcon} text="Profile"/>
    </div>
  );
};



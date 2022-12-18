import React from 'react'
import "./Nav_admin.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
const Nav_admin = () => {
  return (
    <div className="anavbar">
      <div className="awrapper">
        <div className="asearch">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="aitems">
          <div className="aitem">
            <LanguageOutlinedIcon className="aicon" />
            English
          </div>
          <div className="aitem">
            <DarkModeOutlinedIcon
              className="aicon"
              //onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="aitem">
            <FullscreenExitOutlinedIcon className="aicon" />
          </div>
          <div className="aitem">
            <NotificationsNoneOutlinedIcon className="aicon" />
            <div className="acounter">1</div>
          </div>
          <div className="aitem">
            <ChatBubbleOutlineOutlinedIcon className="aicon" />
            <div className="acounter">2</div>
          </div>
          <div className="aitem">
            <ListOutlinedIcon className="aicon" />
          </div>
          <div className="aitem">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="aavatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav_admin
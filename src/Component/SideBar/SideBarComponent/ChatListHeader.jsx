import React from "react";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";

const ChatListHeader = () => {
  return (
    <div className="flex justify-between items-center">
      {/* avatar */}
      <div>
        <Avatar
          alt="Remy Sharp"
          src="https://i.pinimg.com/564x/e2/46/4a/e2464a7027458279370c1f3a9a9f9c21.jpg"
        />
      </div>

      {/* icon */}
      <div>
        <IconButton>
          <DataUsageIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatListHeader;
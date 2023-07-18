import React from "react";

const SidebarItemContainer = ({ index, children }) => {
  return (
    <div key={index ? index : 1} className="w-full h-[20px] overflow-hidden">
      {children}
    </div>
  );
};

export default SidebarItemContainer;

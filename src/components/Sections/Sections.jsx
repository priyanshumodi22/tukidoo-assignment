import React, { useState } from "react";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const Section = ({ Icon, title, active, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconColor = (active || isHovered) ? '#000' : '#9ca3af';

  return (
    <div
      className={`flex items-center p-3 rounded-3xl gap-2 cursor-pointer ${
        (active || isHovered) && 'bg-white'
      }`}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover && onHover(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover && onHover(false);
      }}
    >
      <div><Icon style={{ color: iconColor }} /></div>
      <p className={`text-gray-400 font-medium xl:text-sm ${(active || isHovered) && 'text-black'}`}>{title}</p>
    </div>
  );
};

const Sections = () => {
  const [activeSection, setActiveSection] = useState(2);

  return (
    <div className="flex md:gap-16 lg:gap-24 bg-gray-100 rounded-3xl py-1">
      {[GroupOutlinedIcon, ContentPasteOutlinedIcon, OndemandVideoOutlinedIcon, MovieCreationOutlinedIcon, DescriptionOutlinedIcon, CameraAltOutlinedIcon].map((Icon, index) => (
        <Section
          key={index}
          Icon={Icon}
          title={['Classroom', 'Whiteboard', 'Videos', 'Slide Show', 'Documents', 'Doc Cam'][index]}
          active={index === activeSection}
          onHover={(isHovered) => {
            if (isHovered) {
              setActiveSection(index);
            } else {
              setActiveSection(2); 
            }
          }}
        />
      ))}
    </div>
  );
};

export default Sections;

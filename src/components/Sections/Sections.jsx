import React from "react";
import Section from "./Section";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const Sections = () => {
  return (
    <div className="flex md:gap-16 lg:gap-24 bg-gray-100 rounded-3xl py-1">
      <Section Icon={GroupOutlinedIcon} title="Classroom" />
      <Section Icon={ContentPasteOutlinedIcon} title="Whiteboard" />
      <Section Icon={OndemandVideoOutlinedIcon} title="Videos" active />
      <Section Icon={MovieCreationOutlinedIcon} title="Slide Show" />
      <Section Icon={DescriptionOutlinedIcon} title="Documents" />
      <Section Icon={CameraAltOutlinedIcon} title="Doc Cam" />
    </div>
  );
};

export default Sections;

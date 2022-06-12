import React from "react";
import ReactPlayer from "react-player";
import Link from "next/link";
import Video from "../components/Video";

export const AllVideosSection = (props) => {
  return (
    <>
      <div className="w-50 d-flex flex-wrap">
        {props.data && <Video isHomePage={true} video={props.data} />}
        <Link href={"/singleVideo/[id]"} as={`/singleVideo/${props.data.id}`}>
          More about this video
        </Link>
      </div>
    </>
  );
};

export default AllVideosSection;

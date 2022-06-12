import React from "react";
import Video from "../../../components/Video";

export const SingleVideo = ({ video }) => {
  return (
    <>
      <div className="w-50 d-flex m-auto">
        <Video isHomePage={false} video={video} />
      </div>
    </>
  );
};

export default SingleVideo;

export const getServerSideProps = async (context) => {
  const URL = `https://eb69c8de-c627-47d4-b0bd-246d961cbfd3.mock.pstmn.io/youtube/id?id=${context.params.id}`;
  const res = await fetch(URL);
  const video = await res.json();

  if (!video) {
    return {
      notFound: true,
    };
  }
  return {
    props: { video },
  };
};

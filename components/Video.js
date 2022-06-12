import React from "react";
import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import MetaData from "./MetaData";
import moment from "moment";

const Video = ({ video, isHomePage }) => {
  const { createdAt, description, link, subject, tags, title } = video;

  return (
    <div>
      <Card className="p-2">
        <Card.Title className="d-flex justify-content-between mx-3">
          <span>{title}</span>
          <span>{subject}</span>
        </Card.Title>
        <Card.Body>
          <ReactPlayer controls={true} url={link} />
          {!isHomePage && (
            <>
              <div className="d-flex justify-content-between">
                <div>
                  <MetaData field={"About this video:"} data={description} />
                  <br />
                  <MetaData field={"Related Tags:"} data={tags} />
                </div>
                <MetaData
                  field={"Published on:"}
                  data={moment(createdAt).format("DD-MM-YYYY")}
                />
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Video;

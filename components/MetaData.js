import React from "react";

const MetaData = ({ field, data }) => {
  return (
    <div>
      <span>
        <span className="fw-bold">
          {field} <br />
        </span>
        {data}
      </span>
    </div>
  );
};

export default MetaData;

import { Typography } from "antd";
import React, { FC, useEffect } from "react";

const AssignmentDoc: FC<AssignmentDocProps> = ({ setCrumbs }) => {
  useEffect(() => {
    setCrumbs("Assignment Documentation");
  }, [setCrumbs]);
  return (
    <div>
      <Typography.Title level={3}>Assignment Documentation</Typography.Title>

      <iframe
        title="ass-doc"
        src="https://docs.google.com/document/d/e/2PACX-1vTjf9utIxdbhP1yYvmpfhLT5I9_XmymjKrTJF5yt08L__7NiSKoHIkVRIP56I7jCQ6D6NXVtzzA7YEM/pub?embedded=true"
        style={{ width: "100%", height: "80vh" }}
      ></iframe>
    </div>
  );
};

interface AssignmentDocProps {
  setCrumbs: any;
}

export default AssignmentDoc;

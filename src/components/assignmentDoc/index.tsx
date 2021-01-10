import React, { FC } from "react";

const AssignmentDoc: FC<AssignmentDocProps> = ({ setCrumbs }) => {
  setCrumbs("Assignment Documentation");

  return (
    <div>
      <p>Assignment Documentation</p>
    </div>
  );
};

interface AssignmentDocProps {
  setCrumbs: any;
}

export default AssignmentDoc;

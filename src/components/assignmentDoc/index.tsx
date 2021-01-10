import React, { FC, useEffect } from "react";

const AssignmentDoc: FC<AssignmentDocProps> = ({ setCrumbs }) => {
  useEffect(() => {
    setCrumbs("Assignment Documentation");
  }, [setCrumbs]);
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

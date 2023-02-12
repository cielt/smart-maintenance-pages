import React from "react";

const DefaultMaintenanceMessage = ({ appName }) => (
  <p>
    <span className="appName">{appName}</span> is currently unavailable while we
    perform site maintenance. We&rsquo;re working hard to bring you an even
    better experience at <span className="appName">{appName}</span>!
  </p>
);

export default DefaultMaintenanceMessage;

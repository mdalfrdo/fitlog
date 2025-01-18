import React from "react";
import "/home.css"; // Import file CSS

const Program = ({ namalatihan, videolink } ) => {
  return (
    <div className="container">
    {/* Content 1 */}
    <div className="content">
      <p>{namalatihan}</p>
      <div className="video-container">
        <iframe
          src={videolink}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>

  );
};

export default Program;



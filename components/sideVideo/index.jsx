import React from "react";
import { useEffect, useState } from "react";
import { baseAPI } from "../../config";

const SideVideo = () => {
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState("");

  useEffect(() => {
    const getChannel = async () => {
      const response = await fetch(`${baseAPI}/api/video`);
      const data = await response.json();
      return data;
    };

    getChannel().then((data) => {
      setVideo(data.video.video);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return null;
  } else {
    return (
      <div style={{ marginBottom: "30px" }}>
        <iframe
          width="100%"
          height="auto"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
};

export default SideVideo;

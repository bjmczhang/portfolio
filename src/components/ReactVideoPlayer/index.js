import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

import styled from "styled-components";

const StyledVideoContainer = styled.div`
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const ReactVideoPlayer = ({ videoUrl }) => {
  return (
    <StyledVideoContainer>
      <Video autoPlay loop>
        <source src={videoUrl} type="video/webm" />
      </Video>
    </StyledVideoContainer>
  );
};

export default ReactVideoPlayer;

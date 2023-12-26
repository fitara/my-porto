/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import profilePict from "../assets/picture.png";
import blobshape from "blobshape";

function getRandomPath() {
  return blobshape({
    growth: 8,
    edges: 18,
  }).path;
}

function Blob(props: any) {
  const [flip, set] = useState(false);

  const { path } = useSpring({
    to: { path: getRandomPath() },
    from: { path: getRandomPath() },
    reverse: flip,
    config: {
      duration: props.image ? 9000 : 6000,
    },
    onRest: () => { set(!flip)}
  });

  return (
    <svg viewBox="0 0 500 500" width="40%" style={props.style} preserveAspectRatio="xMidYMid meet">
      {!props.image && <animated.path fill={props.color} d={path} />}

      {props.image && (
        <>
          <defs>
            <clipPath id="clipPath">
              <animated.path fill={props.color} d={path} />
            </clipPath>
          </defs>
          <image
            width="70%"
            clipPath="url(#clipPath)"
            xlinkHref={profilePict}
            preserveAspectRatio="xMidYMid slice"
          />
        </>
      )}
    </svg>
  );
}

const Home: React.FC = () => {
  return (
    <>
      <div className="blob">
        <div style={{ position: "relative" }}>
          <Blob color="#000000" style={{ opacity: 0.2, position: "absolute", top: "15%", left: "5%" }} />
          <Blob color="#000000" style={{ opacity: 0.4, position: "absolute", top: "15%", left: "5%" }} />
          <Blob image style={{ width: "40%", opacity: 0.8, position: "absolute", top: 20, left: 80, overflow: "hidden" }} />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <p>
          I'm a Fullstack and Frontend developer passionate about creating web applications.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </>
  );
};

export default Home;

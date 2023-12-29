/* Blob.tsx */
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import profilePict from "../assets/images/profile-pict.jpg";
import blobshape from "blobshape";

interface BlobProps {
  color?: string;
  image?: boolean;
  className?: string;
}

function Blob(props: BlobProps) {
  const [flip, set] = useState(false);

  const { path } = useSpring({
    to: { path: getRandomPath(), radius: props.image ? 50 : 0 },
    from: { path: getRandomPath(), radius: 0 },
    reverse: flip,
    config: { duration: props.image ? 9000 : 6000 },
    onRest: () => { set(!flip) },
  });

  return (
    <svg
      className={props.className}
      viewBox='0 0 500 500'
      width='40%'
      preserveAspectRatio='xMidYMid meet'
    >
      <defs>
        <clipPath id='clipPath'>
          <animated.path fill={props.color} d={path} />
        </clipPath>
      </defs>
      {!props.image && (
        <animated.path
          d={path}
          className='blob-path'
          fill={props.color}
        />
      )}
      {props.image && (
        <>
          <animated.g
            clipPath='url(#clipPath)'
            style={{ transformOrigin: "center" }}
          >
            <image
              width='100%'
              xlinkHref={profilePict}
              preserveAspectRatio='xMidYMid slice'
              className='blob-image'
            />
          </animated.g>
        </>
      )}
    </svg>
  );
}

function getRandomPath() {
  return blobshape({
    growth: 8,
    edges: 18,
  }).path;
}

export default Blob;

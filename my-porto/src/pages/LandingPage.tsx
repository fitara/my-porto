import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Transitions from "../utils/Transition";
import Typewriter from "typewriter-effect";
import Rubber from "../utils/RubberEffect";
import { motion } from "framer-motion";
import PopUp from "../components/PopUp";

function LandingPage() {
  const [input, setInput] = useState<string>("");
  const [showPopUp, setShowPopUp] = useState(true);
  const { updateUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopUp(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleChange =
    (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInput(value);
  };

  const handleKeyDown =
    (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input !== "") {
      handleClick();
    }
  };

  const handleClick = () => {
    if (input !== "") {
      updateUser(input);
      navigate("/home");
    }
  };

  const closePopup = () => {
    setShowPopUp(false);
  };

  return (
    <section>
      <Background />
      <div className='lp-container'>
        <div className='introduction-wrapper'>
          <div className='introduction'>
            <h2>
              Hello, I'm&nbsp;
              <span className="dark">
                <Rubber text="Fitra" />
              </span>
            </h2>
            <Typewriter
              options={{
                strings: ["Fullstack Developer", "Frontend Developer"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
          <motion.h3 whileHover={{ scale: 1.05 }} className='short-intro'>
            A passionate developer with a background in fullstack development.
            Currently, focused on creating engaging frontend user experiences.
          </motion.h3>
        </div>
        <div className='user-wrapper'>
          <h4 className='instruction'>
            Before we begin, please let me know your name.
          </h4>
          <input
            type='text'
            placeholder='Insert your name'
            className='input-name'
            spellCheck='false'
            autoComplete="false"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            role='button'
            className={`lp-button ${input.trim() ? "visible" : "hidden"}`}
            onClick={handleClick}
          >
            <span className='lp-button-text'>Explore More</span>
            <span className='lp-button-arrow'></span>
            <span className='lp-button-arrow'></span>
          </button>
        </div>
      </div>
      {showPopUp && <PopUp onClose={closePopup} />}
      <Transitions />
    </section>
  );
}

export default LandingPage;
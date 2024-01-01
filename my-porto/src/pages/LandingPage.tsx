import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Transitions from "../utils/Transition";
import Background from "../components/Background";
import Rubber from "../utils/RubberEffect";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function LandingPage() {
  const [input, setInput] = useState<string>("");
  const { updateUser } = useUser();
  const navigate = useNavigate();

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const trimmedValue = value.trim();

    setInput(
      /^[A-Za-z\s]*[A-Za-z][A-Za-z\s]*$/
        .test(trimmedValue)
        ? trimmedValue
        : ""
    );
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && input) {
      updateUser(input);
      navigate("/home");
    }
  };

  return (
    <>
      <Background />
      <div className='lp-container'>
        <div className='introduction-wrapper'>
          <div className='introduction'>
            <h2>
              Hello, I'm&nbsp;
              <Rubber text="Fitra" className="dark" />
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
          <motion.h3
            whileHover={{scale: 1.05}}
            className='short-intro'
          >
            A passionate developer with a background in fullstack development.
            Currently, focused on creating engaging frontend user experiences.
          </motion.h3>
        </div>
        <div className='user-wrapper'>
          <h4 className='instruction'>
            Before we begin, please let me know your name.
          </h4>
          <input
            id='name'
            type='text'
            placeholder='Insert your name'
            className='input-name'
            autoComplete='false'
            spellCheck='false'
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
          <button
            role='button'
            className={`lp-button ${input ? "visible" : "hidden"}`}
            onClick={() => navigate("/home")}
          >
              <span className='lp-button-text'>Explore More</span>
              <span className='lp-button-arrow'></span>
              <span className='lp-button-arrow'></span>
          </button>
        </div>
      </div>
      <Transitions />
    </>
  );
}

export default LandingPage;

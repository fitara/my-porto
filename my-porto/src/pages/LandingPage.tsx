import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
import { useUser } from "../contexts/UserContext";
import Background from "../components/Background";
import Typewriter from "typewriter-effect";

export default function LandingPage() {
  const [input, setInput] = useState<string>("");
  const isPresent = useIsPresent();
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const trimmedValue = value.trim();

    if (/^[A-Za-z\s]*[A-Za-z][A-Za-z\s]*$/.test(trimmedValue)) {
      setInput(trimmedValue);
    } else {
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
            <h2>Hello, I'm Fitra</h2>
            <Typewriter
              options={{
                strings: ["Fullstack Developer", "Frontend Developer"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
          <h3 className='short-intro'>
            A passionate developer with a background in fullstack development.
            Currently, focused on creating engaging frontend user experiences.
          </h3>
        </div>
        <div className='user-wrapper'>
          <h4 className='instruction'>
            Before we begin, please let me know your name.
          </h4>
          <input
            id='name'
            type='text'
            placeholder='Insert your name'
            spellCheck='false'
            autoComplete='false'
            className='input-name'
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
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
          exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
    </>
  );
}

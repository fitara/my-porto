import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import Typewriter from "typewriter-effect";

export default function LandingPage() {
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

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
      navigate("/home");
    }
  };

  return (
    <>
      <Background />
      <div className='lp-container'>
        <div className='occupation-wrapper'>
          <div className='occupation'>
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
            type='text'
            id='name'
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
    </>
  );
}

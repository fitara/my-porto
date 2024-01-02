import { Reveal } from "../utils/Reveal";

function Play() {
  return (
    <section className='playground-container'>
      <div className="play-title">
        <Reveal>
          <h1>Playground Page.</h1>
        </Reveal>
        <Reveal>
          <h3>This is the Playground page content.</h3>
        </Reveal>
      </div>
      <Reveal>
        <p>
          Currently in the research and development phase for this feature, I am
          diligently working to enhance its capabilities. Thank you for your
          patience and support.
        </p>
      </Reveal>
    </section>
  );
}

export default Play;

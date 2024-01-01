import certificates from "../data/certificates.json";
import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

function Certificate() {
  return (
    <div className='certificate-container'>
      <div className='certificate-title'>
        <div className='title-wrapper'>
          <span className='title-line'></span>
          <Reveal>
            <h1>Certificates.</h1>
          </Reveal>
        </div>
        <Reveal>
          <h3>
            Crafting expertise, one certification at a time, to shape a
            proficient web development journey.
          </h3>
        </Reveal>
      </div>
      <div className='card-container'>
        {certificates.map((certificate, index) => (
          <motion.a
            key={index}
            href={certificate.url}
            target='_blank'
            rel='noopener noreferrer'
            className='card-certificate'
          >
            <div className='card-wrapper'>
              <motion.img
                src={certificate.imageUrl}
                alt={`Certificate ${index + 1}`}
                whileHover={{
                  scale: 1.1,
                  rotate: "4deg",
                }}
                className='card-image'
              />
            </div>
            <motion.div className='card-info'>
              <div className='card-title'>
                <Reveal>
                  <h3>{certificate.company}</h3>
                </Reveal>
                <span className='card-line'></span>
              </div>
              <Reveal>
                <p>{certificate.name}</p>
              </Reveal>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Certificate;

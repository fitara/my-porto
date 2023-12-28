import React from 'react';
import certificates from '../data/certificates.json';
import { motion } from 'framer-motion';

const Certificate: React.FC = () => {
  return (
    <div className='certificate-container'>
      <div className="certificate-title">
          <h1>Certifications</h1>
          <h3>Crafting expertise, one certification at a time, to shape a proficient web development journey.</h3>
      </div>
      <div className="card-container">
        {certificates.map((certificate, index) => (
          <motion.a
            key={index}
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className='card-certificate'
          >
            <div className='card-image-wrapper'>
              <motion.img
                src={certificate.imageUrl}
                alt={`Certificate ${index + 1}`}
                whileHover={{
                  scale: 1.1,
                  rotate: "4deg"
                }}
                className="card-image"
              />
            </div>
            <motion.div className="card-certificate-info">
              <h3>{certificate.company}</h3>
              <p>{certificate.name}</p>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

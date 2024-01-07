// components/PopUp.tsx

import { useState, useEffect } from 'react';

const PopUp = ({ onClose }: { onClose: () => void }) => {
  const [popupOpen, setPopupOpen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPopupOpen(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  console.log('PopUp is rendering');

  return (
    <dialog className="popup" open={popupOpen}>
      <div className="popup-content">
        <p>
          For a more engaging experience, please use a laptop.
        </p>
        <button className='popup-button' onClick={onClose}>
          Close
        </button>
      </div>
    </dialog>
  );
}

export default PopUp;
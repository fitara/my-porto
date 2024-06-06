function PopUp({ onClose }: { onClose?: () => void }) {
  return (
    <dialog className="popup" open={true}>
      <div className="popup-content">
        <p>
          For a more engaging experience, please use a laptop.
        </p>
        <button
          className='popup-button'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </dialog>
  );
}

export default PopUp;
// src/components/MyModal/MyModal.jsx
import "./MyModal.module.css"; // Стилі для модального вікна

const MyModal = ({ visible, setVisible, children }) => {
  if (!visible) return null;

  return (
    <div className="modal" onClick={() => setVisible(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;

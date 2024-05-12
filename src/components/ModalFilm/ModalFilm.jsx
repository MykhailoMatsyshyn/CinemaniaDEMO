import css from "./ModalFilm.module.css";

export default function ModalFilm() {
  return (
    <section className="modal-film">
      <h2 className="visually-hidden">Film info</h2>
      <div className="modal-film__overlay">
        <button type="button" className="modal-film__close"></button>

        <div className="modal-card"></div>

        <div className="modal-film__buttons">
          <button type="button" className="modal-film__btn-watched">
            add to Watched
          </button>
          <button type="button" className="modal-film__btn-queque">
            add to queue
          </button>
        </div>
      </div>
    </section>
  );
}

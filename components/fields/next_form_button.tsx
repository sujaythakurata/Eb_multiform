import style from '../../styles/home.module.scss';

export default function NextFormButton() {
  return (
    <button
      className={`btn btn-lg btn-light ${style.next__btn}`}
      type="submit"
      data-testid="next-button">
      Next
    </button>
  );
}

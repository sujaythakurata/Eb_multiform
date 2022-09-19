import style from '../../styles/home.module.scss';

export default function NextBtn() {
  return (
    <>
      <div className={style.form__content__area}>
        <button
          className={`btn btn-lg btn-light ${style.next__btn}`}
          type="submit">
          Next
        </button>
      </div>
    </>
  );
}

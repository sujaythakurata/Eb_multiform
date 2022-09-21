import { setNextForm } from '../../features/formslice';
import { useAppDispatch } from '../../states/hook';
import style from '../../styles/home.module.scss';

export default function PreviousFormButton({ state }: { state: number }) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setNextForm(state - 1));
  };
  return (
    <button
      className={`btn btn-lg btn-light ${style.next__btn} me-2`}
      onClick={handleClick}
      type="button">
      Previous
    </button>
  );
}

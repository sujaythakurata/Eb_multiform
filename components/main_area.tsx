import SideBar from './sidebar';
import style from '../styles/main_area.module.scss';

export default function MainArea({ children }: { children: JSX.Element }) {
  return (
    <>
      <div className={`card ${style.main__area}`}>
        <div className="row card-body">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-10">{children}</div>
        </div>
      </div>
    </>
  );
}

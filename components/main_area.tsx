import SideBar from './sidebar';

export default function MainArea({ children }: { children: JSX.Element }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-lg-12">
            <SideBar />
          </div>
          <div className="col-sm-8 col-lg-12">{children}</div>
        </div>
      </div>
    </>
  );
}

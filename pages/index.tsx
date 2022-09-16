import Form from '../components/form';
import Header from '../components/header';
import MainArea from '../components/main_area';
import style from '../styles/home.module.scss';

function Index() {
  return (
    <div className={style.grid__container}>
      <div className={style.grid__area__1}>
        <Header />
      </div>
      <div className={style.grid__area__2}>
        <MainArea>
          <Form />
        </MainArea>
      </div>
    </div>
  );
}

export default Index;

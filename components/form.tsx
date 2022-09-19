import env from '../env/env.json';
import { useAppSelector } from '../states/hook';
import Form1 from './form_1/form_1';
import Form2 from './form_2';
import Form3 from './form_3';
import Form4 from './form_4';
import Form5 from './form_5';
import Preview from './preview';

export default function Form() {
  const curState = useAppSelector(state => state.form.curForm);
  if (curState === env.form.form1.state) return <Form1 />;
  if (curState === env.form.form2.state) return <Form2 />;
  if (curState === env.form.form3.state) return <Form3 />;
  if (curState === env.form.form4.state) return <Form4 />;
  if (curState === env.form.form5.state) return <Form5 />;
  if (curState === env.form.preview.state) return <Preview />;
}

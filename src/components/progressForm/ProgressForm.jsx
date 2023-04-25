import { useState } from 'react';
import * as s from './ProgressFormStyle';
import { Button } from '../commonComponents/button/button';
import { updateDataByRef, ref } from '../../backEnd';

const tasksDefault = [
  'Наклон вперед (10 повторений)',
  'Наклон назад (10 повторений)',
  'Поднятие ног, согнутых в коленях (5 повторений)',
];

export default function ProgressForm({
  onClick,
  tasks = tasksDefault,
  userID,
}) {
  const [isClick, setIsClick] = useState(false);
  const [values, setValues] = useState({});
  const [complete, setComplete] = useState({});

  const userId = userID;
  const courseId = window.localStorage.getItem('courseID');
  const workoutId = window.localStorage.getItem('workoutID');
  const pathToFillProgress = ref(
    `users/${userId}/courses/${courseId}/workouts/${workoutId}/exercise`
  );
  const pathToSetComplete = ref(
    `users/${userId}/courses/${courseId}/workouts/${workoutId}`
  );

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: {
        done: e.target.value,
        goal: e.target.id,
      },
    });

    if (e.target.value >= Number(e.target.id)) {
      setComplete({
        ...complete,
        [e.target.name]: { done: 'complete' },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.entries(values).forEach(([item, value]) => {
      const newData = { [item]: value };
      updateDataByRef(() => {}, { ref: pathToFillProgress, newData });
    });
    if (Object.keys(complete).length === Object.keys(tasks).length) {
      const newData = { complete: true };
      updateDataByRef(() => {}, { ref: pathToSetComplete, newData });
    }
    onClick();
    setIsClick(true);
  };

  const list = Object.keys(tasks).map((item) => (
    <s.Item key={item.toString()}>
      Сколько раз вы сделали {item.split('(')[0].toLowerCase()}?
      <s.Input
        type="number"
        placeholder="Введите значение"
        name={item}
        id={parseInt(item.match(/\d+/), 10)}
        onChange={onChange}
      />
    </s.Item>
  ));

  return isClick ? (
    <s.ContentComplete>
      <s.TitleComplete>Ваш прогресс засчитан!</s.TitleComplete>
      <s.ImgComplete src="../../img/complete.svg" />
    </s.ContentComplete>
  ) : (
    <s.Content>
      <s.Title>Мой прогресс</s.Title>
      <s.List onSubmit={handleSubmit}>
        {list}
        <s.ButtonContainer>
          <Button.s18.blue width="278px" type="submit">
            Отправить
          </Button.s18.blue>
        </s.ButtonContainer>
      </s.List>
    </s.Content>
  );
}

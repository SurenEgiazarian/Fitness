import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginDataSelector } from '../../store/selectors/selectors';
import { getDataByRef, ref } from '../../backEnd';
import * as s from './SelectWorkoutStyle';

export default function SelectWorkout({ courseId }) {
  const [workouts, setWorkouts] = useState([]);
  const { localId } = useSelector(loginDataSelector);
  const userId = localId;

  const handleClick = (id) => {
    window.localStorage.setItem('workoutID', id);
    window.localStorage.setItem('courseID', courseId);
  };
  const parseData = (responseData) => {
    setWorkouts(
      Object.values(responseData.data[userId].courses[courseId].workouts).sort(
        (a, b) => a.order - b.order
      )
    );
  };

  useEffect(() => {
    getDataByRef(parseData, { ref: ref('users') });
  }, []);

  const list = workouts.map((item) => (
    <Link
      key={item.name.toString()}
      to="/exercise"
      style={{ textDecoration: 'none' }}
      onClick={() => handleClick(item._id)}
    >
      <s.Item style={{ border: `${item.complete ? '1px solid #06B16E' : ''}` }}>
        <s.ItemText style={{ color: `${item.complete ? '#06B16E' : ''}` }}>
          <s.ItemTitle>{item.name.split('/')[0] || item.name}</s.ItemTitle>
          <s.ItemDesc>
            {item.name.split('/')[1]
              ? `${item.name.split('/')[1]}/${item.name.split('/')[2]}`
              : ''}
          </s.ItemDesc>
        </s.ItemText>{' '}
        {item.complete && <s.ItemComplete src="/img/exercise-complete.svg" />}
      </s.Item>
    </Link>
  ));
  return (
    workouts && (
      <s.Content>
        <s.Title>Выберите тренировку</s.Title>
        <s.List>{list}</s.List>
      </s.Content>
    )
  );
}

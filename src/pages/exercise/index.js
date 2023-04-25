import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loginDataSelector } from '../../store/selectors/selectors';
import { getDataByRef, ref } from '../../backEnd';
import * as s from './ExerciseSyle';
import Header from '../../components/header/Header';
import Tasks from '../../components/tasks/Tasks';
import TasksProgress from '../../components/tasksProgress/TasksProgress';
import ProgressForm from '../../components/progressForm/ProgressForm';

const tasksExapmle = [
  'Наклон вперед (10 повторений)',
  'Наклон назад (10 повторений)',
  'Поднятие ног, согнутых в коленях (5 повторений)',
];

export default function Exercise() {
  const [isProgressClick, setIsProgressClick] = useState(false);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [tasks, setTasks] = useState(tasksExapmle);
  const { localId } = useSelector(loginDataSelector);

  const userId = localId;
  const courseId = window.localStorage.getItem('courseID');
  const workoutId = window.localStorage.getItem('workoutID');

  const parseData = (responseData) => {
    setTitle(responseData.data[userId].courses[courseId].name);
    setSubtitle(
      responseData.data[userId].courses[courseId].workouts[workoutId].name
    );
    setVideoURL(
      responseData.data[userId].courses[courseId].workouts[workoutId][
        'video-link'
      ]
    );
    setTasks(
      responseData.data[userId].courses[courseId].workouts[workoutId].exercise
    );
  };

  useEffect(() => {
    getDataByRef(parseData, { ref: ref('users') });
    console.log(tasks);
  }, [isProgressClick]);

  return (
    <s.Container>
      <Header />
      <s.Title>{title}</s.Title>
      <s.Subtitle>{subtitle}</s.Subtitle>

      {isProgressClick && (
        <ProgressForm
          tasks={tasks}
          userID={localId}
          onClick={() => setTimeout(() => setIsProgressClick(false), 2000)}
        />
      )}

      <s.Video>
        <iframe
          width="100%"
          height="639"
          src={`https://www.youtube-nocookie.com/embed/${videoURL}`}
          title={subtitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </s.Video>

      {tasks && (
        <s.TasksAndProgress>
          <Tasks tasks={tasks} onClick={() => setIsProgressClick(true)} />
          <TasksProgress tasks={tasks} />
        </s.TasksAndProgress>
      )}
    </s.Container>
  );
}

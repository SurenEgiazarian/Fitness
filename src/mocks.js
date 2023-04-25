import { ref, getDataByRef, updateDataByRef } from 'backEnd';
import { dbDataHandler } from 'backEnd/controllers/db/handlers/index';

/* ========================================= LOCAL DB ========================================= */

export const courses = [
  {
    id: 'ecf0abb07a6547e09abe876e4084a843',
    title: 'Йога',
    img: '/img/SVG_for_Course_Cards/yoga.png',
    name: 'yoga',
  },
  {
    id: 'fa860a88db7e4c839437427ab863bb1a',
    title: 'Стретчинг',
    img: '/img/SVG_for_Course_Cards/stretching.png',
    name: 'stretching',
  },
  {
    id: '37cd2b14182e4e69aad6e60e6c25015e',
    title: 'Бодифлекс',
    img: '/img/SVG_for_Course_Cards/bodyflex.png',
    name: 'bodyflex',
  },
  {
    id: '2ed340464ea14d4db46cc34cb8046f40',
    title: 'Танцевальный фитнес',
    img: '/img/SVG_for_Course_Cards/dance-fitness.png',
    name: 'dance-fitness',
  },
  {
    id: 'faecf3d0549a47a18c81de625af61312',
    title: 'Степ-аэробика',
    img: '/img/SVG_for_Course_Cards/step-aerobics.png',
    name: 'step-aerobics',
  },
];

/* ===================================== DB FUNX ===================================== */
/* responseFunc - функция в которую будет передан ответ сервера */

export async function getUserCourses(userID) {
  const usersRef = ref('users');
  const userRef = usersRef.child(userID);

  return userRef
    .once('value')
    .then((response) => dbDataHandler({ response, userRef }))
    .then(async (result) => {
      const userCourses = result?.data?.courses;
      const promisesArr = [];
      for (const c of Object.keys(userCourses)) {
        promisesArr.push(
          getCourseById(c).then((cd) => ({
            id: c,
            title: cd.data?.name,
            cardImgSrc: cd.data?.cardImgSrc,
          }))
        );
      }
      return promisesArr;
    })
    .then((pa) => Promise.all(pa).then((values) => values));

  async function getCourseById(courseId) {
    const coursesRef = ref('courses');
    const courseRef = coursesRef.child(courseId);

    const response = await courseRef.once('value');
    const result = dbDataHandler({ response, courseRef });

    return result;
  }
}

// костыль
export const mapCourseData = (courseEngName) => {
  const foundCourse = courses.find((course) => course.name === courseEngName);

  if (foundCourse) {
    return {
      id: foundCourse.name,
      name: courseEngName,
      title: foundCourse.title,
      cardImgSrc: foundCourse.img,
    };
  }

  return null;
};

// Получить данные курса по его названию (название на английском и в нижнем регистре)
export const getCorseData = (responseFunc, { courseName }) => {
  let rusCourseName;
  for (const item of courses)
    if (item.name === courseName) rusCourseName = item.title;

  const coursesRef = ref('courses');
  const courseRef = coursesRef.orderByChild('name').equalTo(rusCourseName);
  getDataByRef(
    (receivedData) => {
      const { data, error } = receivedData;
      const course = data ? data[Object.keys(data)[0]] : null;
      if (error) console.error(`getCorseData: ${error}`);
      else if (!course) console.error('getCorseData: data not found');
      else responseFunc(course);
    },
    { ref: courseRef }
  );
};

// Получить данные пользователя по его id
export const getUserData = (responseFunc, { userID }) => {
  const userRef = ref('users').child(userID);
  getDataByRef(
    (receivedData) => {
      const { data, error } = receivedData;
      if (error) console.error(`getUserData: ${error}`);
      else if (data) responseFunc(data);
      // else console.error('getUserData: data not found');
    },
    { ref: userRef }
  );
};

// Добавить пользователя в Realtime Database по его id
export const addUser = (responseFunc, { userID }) => {
  const userInitData = { _id: userID, courses: {} };

  const usersRef = ref('users');
  getDataByRef(
    (receivedData) => {
      const { data, error } = receivedData;
      if (error) console.error(`addUserData: ${error}`);
      else if (data) console.error('addUser: user already exist');
      else {
        let newData = {};
        newData[userID] = userInitData;
        updateDataByRef(
          (responseData) => {
            const { data } = responseData;
            if (data) if (data[userID]) responseFunc(data[userID]);
          },
          { ref: usersRef, newData }
        );
      }
    },
    { ref: usersRef.child(userID) }
  );
};

// Получить все курсы пользователя по его id
export const getUserCoursesData = (responseFunc, { userID }) => {
  getUserData(
    (data) => {
      if (!data) console.error('getUserCoursesData: unknown error');
      else {
        const { courses } = data;
        if (!courses) console.error('getUserCoursesData: unknown error');
        else responseFunc(courses);
      }
    },
    { userID }
  );
};

// Добавить курс в БД пользователя по его id и наименованию курса
export const addUserCourse = (responseFunc, { userID, courseName }) => {
  const courseInitData = { name: courseName, workouts: null };

  for (const course of courses)
    if (course.name === courseName) courseInitData.name = course.title;

  getCorseData(getWorkouts, { courseName });
  function getWorkouts(data) {
    if (!data) console.error('addUserCourse: unknown error');
    else {
      courseInitData.workouts = data.workouts;
      checkUserExistence();
    }
  }

  const usersRef = ref('users');
  function checkUserExistence() {
    getDataByRef(
      (receivedData) => {
        const { data, error } = receivedData;
        if (error) console.error(`addUserCourse: ${error}`);
        else if (!data) addUser(addCourse, { userID });
        else addCourse(data);
      },
      { ref: usersRef.child(userID) }
    );
  }

  const userCoursesRef = usersRef.child(userID).child('courses');
  function addCourse() {
    getDataByRef(
      (receivedData) => {
        const { data, error } = receivedData;
        if (error) console.error(`addUserCourse: ${error}`);
        else if (data)
          console.error('addUserCourse: user course already exist');
        else {
          let newData = {};
          newData[courseName] = courseInitData;
          updateDataByRef(responseFunc, { ref: userCoursesRef, newData });
        }
      },
      { ref: userCoursesRef.child(courseName) }
    );
  }
};

const data = {
  Page: {},
  Title: {},
  Recording: {},
};

const courses = {
  yoga: {
    rusName: `Йога`,
  },
  bodyflex: {
    rusName: `Бодифлекс`,
  },
  'dance-fitness': {
    rusName: `Танцевальный фитнес`,
  },
  stretching: {
    rusName: `Стретчинг`,
  },
  'step-aerobics': {
    rusName: `Степ-аэробика`,
  },
};
for (const courseName of Object.keys(courses)) {
  data.Page[courseName] = {
    rusCourseName: courses[courseName].rusName,
  };
  data.Title[courseName] = {
    bgSrc: `/img/pages/description/title/${courseName}.png`,
  };
}

export default data;

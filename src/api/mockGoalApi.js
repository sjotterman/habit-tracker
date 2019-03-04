import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const goals = [
        {
            id: 'brush-my-teeth',
            name: 'Brush my teeth',
            done: false,
            dates_done: [
                  '2019-03-01',
                  '2019-03-02',
            ]
        },
        {
            id: 'sit-with-my-feelings',
            name: 'Sit with my feelings',
            done: false,
            dates_done: [
            ]
        },
        {
            id: 'look-out-of-the-window',
            name: 'Look out of the window',
            done: false,
            dates_done: [
                  '2019-02-01',
                  '2019-02-02',
                  '2019-02-03',
                  '2019-02-04'
            ]
        }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (goal) => {
  return replaceAll(goal.title, ' ', '-');
};

class GoalApi {
  static getAllGoals() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], goals));
      }, delay);
    });
  }

  /*
  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.id == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
  */
}

export default GoalApi;
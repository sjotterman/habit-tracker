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
  return replaceAll(goal.name, ' ', '-');
};

class GoalApi {
  static getAllGoals() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], goals));
      }, delay);
    });
  }

  static saveGoal(goal) {
    goal = Object.assign({}, goal); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minGoalNameLength = 4;
        if (goal.name.length < minGoalNameLength) {
          reject(`Name must be at least ${minGoalNameLength} characters.`);
        }

        if (goal.id) {
          const existingGoalIndex = goals.findIndex(a => a.id === goal.id);
          goals.splice(existingGoalIndex, 1, goal);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          goal.id = generateId(goal);
          goal = {
            ...goal,
            streak: 0,
            done: false,
            dates_done: []
          };
          // course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          goals.push(goal);
        }

        resolve(goal);
      }, delay);
    });
  }

  /*

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
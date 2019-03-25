import delay from "./delay";
import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

const goals = [
  {
    id: "brush-my-teeth",
    name: "Brush my teeth",
    done: false,
    dates_done: ["2019-03-01", "2019-03-02"]
  },
  {
    id: "sit-with-my-feelings",
    name: "Sit with my feelings",
    done: false,
    dates_done: []
  },
  {
    id: "look-out-of-the-window",
    name: "Look out of the window",
    done: false,
    dates_done: ["2019-02-01", "2019-02-02", "2019-02-03", "2019-02-04"]
  }
];

export function getAllGoals() {
  return get("goals");
}

export function saveNewGoal(goal) {
  return post("goals", goal);
}

export function modifyGoal(goal) {
  const { _id } = goal;
  return put(`goals/${_id}`, goal);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function post(url, data) {
  return fetch(baseUrl + url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(onSuccess, onError);
}

function put(url, data) {
  return fetch(baseUrl + url, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(onSuccess, onError);
}

export function deleteGoalById(id) {
  return del(`goals/${id}`);
}

function del(url) {
  return fetch(baseUrl + url, {
    method: "delete"
  }).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error);
}

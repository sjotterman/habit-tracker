// import delay from "./delay";
import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

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
  }).then(() => true, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error);
}

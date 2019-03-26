import * as timeFormatter from "../timeFormatter";

describe("time formatter", () => {
  it("should calculate the best streak", () => {
    const dates_done = ["2019-02-01", "2019-02-02", "2019-02-03", "2019-02-15"];
    expect(timeFormatter.calculateBestStreak(dates_done)).toEqual(3);
  });

  it("should calculate the current streak with one day done", () => {
    const dates_done = ["2019-02-15"];
    const today = "2019-02-15";
    expect(timeFormatter.calculateCurrentStreak(dates_done, today)).toEqual(1);
  });

  it("should calculate the current streak with one previous day done", () => {
    const dates_done = ["2019-02-14"];
    const today = "2019-02-15";
    expect(timeFormatter.calculateCurrentStreak(dates_done, today)).toEqual(1);
  });

  it("should calculate the current streak with two days done", () => {
    const dates_done = ["2019-02-14", "2019-02-15"];
    const today = "2019-02-15";
    expect(timeFormatter.calculateCurrentStreak(dates_done, today)).toEqual(2);
  });

  it("should calculate the current streak with no days done", () => {
    const dates_done = ["2019-02-10", "2019-02-11"];
    const today = "2019-02-15";
    expect(timeFormatter.calculateCurrentStreak(dates_done, today)).toEqual(0);
  });

  it("should calculate the current streak with a broken streak", () => {
    const dates_done = ["2019-02-11", "2019-02-14", "2019-02-15"];
    const today = "2019-02-15";
    expect(timeFormatter.calculateCurrentStreak(dates_done, today)).toEqual(2);
  });

  it("should calculate another best streak", () => {
    const dates_done = [
      "2019-02-01",
      "2019-02-02",
      "2019-02-28",
      "2019-03-01",
      "2019-03-02",
      "2019-03-03",
      "2019-03-04",
      "2019-03-05"
    ];
    expect(timeFormatter.calculateBestStreak(dates_done)).toEqual(6);
  });

  it("should calculate full date from short date", () => {
    const date = "2019-01-01";
    const time = new Date("2019-01-01 00:00:00");
    expect(timeFormatter.timeFromDate(date)).toEqual(time);
  });

  it("should calculate second full date from short date", () => {
    const date = "2019-01-02";
    const time = new Date("2019-01-02 00:00:00");
    expect(timeFormatter.timeFromDate(date)).toEqual(time);
  });

  it("should calculate diff in days", () => {
    const dayOne = new Date("2019-01-01T12:00:00Z");
    const dayTwo = new Date("2019-01-02T12:00:00Z");
    expect(timeFormatter.dateDiffInDays(dayOne, dayTwo)).toEqual(1);
  });

  it("should format the date properly", () => {
    const date = new Date("2019-01-01 04:00:00");
    const formatttedDate = timeFormatter.formatDateShort(date);
    expect(formatttedDate).toEqual("2019-01-01");
  });

  it("should confirm a goal was already done on that day", () => {
    const date = "2019-02-02T12:00:00Z";
    const datesDone = [
      "2019-01-01T11:30:00Z",
      "2019-01-03T11:30:00Z",
      "2019-02-02T11:30:00Z"
    ];
    expect(timeFormatter.alreadyDone(datesDone, date)).toEqual(true);
  });

  it("should confirm a goal was not already done on that day", () => {
    const date = "2019-02-02T12:00:00Z";
    const datesDone = [
      "2019-01-01T11:30:00Z",
      "2019-01-03T11:30:00Z",
      "2019-01-05T11:30:00Z"
    ];
    expect(timeFormatter.alreadyDone(datesDone, date)).toEqual(false);
  });
});

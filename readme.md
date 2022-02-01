### Readme generated using gitpod

```js
const localData = util.getDataId(monthCardId);
let checkCount = 0;
localData
  .map((list, i) => {
    return list.month_tasks;
  })[0]
  .map((list, i) => {
    if (list.day === day) {
      return (checkCount += 1);
    }
    checkCount = 0;
  });

if (checkCount > 0) {
  let monthTasks = util.getDataId(monthCardId).map((list, i) => {
    return list.month_tasks;
  })[0];
  monthTasks.map((list, i) => {
    list.day_tasks = [...list.day_tasks, ...daysTasksStore];
  });

  targetMonthData = util.getDataId(monthCardId);
  targetMonthData[0].month_tasks = monthTasks;

  // save both the previous data and updated data in localstorage
  prevData = util.getData();

  newData = prevData.filter((list, id) => {
    return list.id !== monthCardId;
  });

  fullUpdatedData = [...newData, ...targetMonthData];

  localStorage.setItem("timerz", JSON.stringify(fullUpdatedData));
  daysTasksStore = [];
  return util.success("day task added");
}

daysPayload = {
  id: util.genId(),
  day: day,
  day_tasks: daysTasksStore,
};
mainDaysStore.push(daysPayload);
targetMonthData = util.getDataId(monthCardId);
targetMonthData[0].month_tasks = [
  ...targetMonthData[0].month_tasks,
  ...mainDaysStore,
];

// save both the previous data and updated data in localstorage
prevData = util.getData();

newData = prevData.filter((list, id) => {
  return list.id !== monthCardId;
});

fullUpdatedData = [...newData, ...targetMonthData];

localStorage.setItem("timerz", JSON.stringify(fullUpdatedData));
// hide addDaysForm
openAddDays();
util.success("days added");
```

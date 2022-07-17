var dt = new Date();
var currentHour = dt.getHours();
document.getElementById("date-time").innerHTML = dt;
var mainContainer = document.getElementById("main-container");

var hours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"];

hours.forEach(function (hour) {
  //create the html block
  var newRow = document.createElement("div");
  newRow.classList.add("row", "time-block");
  newRow.innerHTML = `<div class="hour col-md-1">${getHourText(hour)}</div>
    <textarea class="description col-md-10 ${getTextAreaClass(
      hour
    )}" id='hour-${hour}' placeholder="Schedule task"></textarea>
    <button data-hour=${hour} class="savebtn col-md-1" onclick="saveText(this)">Save</button>`;
  mainContainer.append(newRow);
  //append it to the container
});

function saveText(button) {
  //   console.log();
  var textArea = document.getElementById(`hour-${button.dataset.hour}`);
  console.log(textArea.value);
}

function getTextAreaClass(hour) {
  if (hour < currentHour) {
    return "past";
  } else if (hour == currentHour) {
    return "present";
  } else if (hour > currentHour) {
    return "future";
  }
}

function getHourText(hour) {
  switch (hour) {
    case "08":
      return "08:00am";
    case "09":
      return "09:00am";
    case "10":
      return "10:00am";
    case "11":
      return "11:00am";
    case "12":
      return "12:00pm";
    case "13":
      return "01:00pm";
    case "14":
      return "02:00pm";
    case "15":
      return "03:00pm";
    case "16":
      return "04:00pm";
    case "17":
      return "05:00pm";
  }
}

/*WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/

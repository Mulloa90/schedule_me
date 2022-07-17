var dt = new Date();
document.getElementById("date-time").innerHTML = dt;
var mainContainer = document.getElementById("main-container");

var hours = ["08", "09", "10", "11", "12", "01", "02", "03", "04", "05"];

hours.forEach(function (hour) {
  //create the html block
  var newRow = document.createElement("div");
  newRow.classList.add("row", "time-block");
  newRow.innerHTML = `<div class="hour col-md-1">${hour}:00</div>
    <textarea class="description col-md-10" name="2" id="8" placeholder="Schedule task"></textarea>
    <button class="savebtn col-md-1" onclick="saveText(8)">Save</button>`;
  mainContainer.append(newRow);
  //append it to the container
});

/*WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/

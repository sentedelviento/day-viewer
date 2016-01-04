var date_today = new Date();
var holder_days = {0: "Monday", 1: "Tueday", 2: "Wednesday", 3: "Thursday", 4: "Friday", 5: "Saturday", 6: "Sunday"};
var match_id = {0: "mon", 1: "tues", 2: "wed", 3: "thurs", 4: "fri", 5: "sat", 6: "sun"};
pre_date = date_today.getDay();
//this key matches up to holder_days
curr_day_key = day_convert(pre_date);

//selects the space in html to inject text
todays_date_space = document.getElementById("todays_day");
todays_date_space.innerHTML = holder_days[curr_day_key];

//grab id of the day, make border black
//how to match curr_day to id
var day_id = document.getElementById(match_id[curr_day_key]);
day_id.style.border = "2px solid black";


//takes day_today as input, formats output to account for formatting
function day_convert(old_format) {
	if (old_format === 0) {
		return 6;
	}
	else {
		var new_format = old_format - 1;
		return new_format;
	}
}


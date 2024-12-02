
// Sample data for classes
const classes = {
    monday: [{
            time: "8:00 AM",
            class: "Yoga"
        },
        {
            time: "10:00 AM",
            class: "Cardio Blast"
        },
        {
            time: "6:00 PM",
            class: "Pilates"
        }
    ],
    tuesday: [{
            time: "9:00 AM",
            class: "Spin Class"
        },
        {
            time: "5:00 PM",
            class: "Zumba"
        },
    ],
    wednesday: [{
            time: "8:30 AM",
            class: "Aerobics"
        },
        {
            time: "7:00 PM",
            class: "Kickboxing"
        }
    ],
    thursday: [{
            time: "10:30 AM",
            class: "Strength Training"
        },
        {
            time: "6:30 PM",
            class: "Yoga"
        }
    ],
    friday: [{
            time: "7:00 AM",
            class: "HIIT"
        },
        {
            time: "4:00 PM",
            class: "Pilates"
        }
    ],
    saturday: [{
            time: "8:00 AM",
            class: "Spin Class"
        },
        {
            time: "10:00 AM",
            class: "Zumba"
        },
        {
            time: "12:00 PM",
            class: "Strength Training"
        }
    ]
};

// Function to display timetable for the selected day
function showTimetable(day) {
    const timetableBody = document.getElementById("timetable-body");
    timetableBody.innerHTML = ""; // Clear previous timetable
    if (classes[day]) {
        classes[day].forEach(entry => {
            const row = `<tr>
        <td class="text-start" style="width: 10%;">${entry.time}</td>
        <td class="text-start" style="width: 90%;">${entry.class}</td>
      </tr>`;
            timetableBody.insertAdjacentHTML("beforeend", row);
        });

    }
}

// Event listeners for day selection
document.querySelectorAll(".day-selector").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        // Remove active class from all links and add it to the clicked one
        document.querySelectorAll(".day-selector").forEach(link => link.classList.remove(
            "active"));
        event.target.classList.add("active");

        // Show the timetable for the selected day
        const selectedDay = event.target.getAttribute("data-day");
        showTimetable(selectedDay);
    });
});

// Show Monday's timetable by default
document.addEventListener("DOMContentLoaded", () => showTimetable("monday"));
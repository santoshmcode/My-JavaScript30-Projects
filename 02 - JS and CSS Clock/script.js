setInterval(date, 1000);

function date() {
    var hour = Date().split(" ")[4].split(":").map(Number)[0];
    var min = Date().split(" ")[4].split(":").map(Number)[1];
    var second = Date().split(" ")[4].split(":").map(Number)[2];

    if (hour > 12) {
        hour = hour - 12;
    }

    console.log("hour", hour, "min", min, "second", second);

    document.querySelector(".hour-hand").style.transform = `rotate(${((360 / 12) * hour) + 90 + (0.2 * min)
        }deg)`;
    document.querySelector(".min-hand").style.transform = `rotate(${((360 / 60) * min) + 90 
        }deg)`;
    document.querySelector(".second-hand").style.transform = `rotate(${((360 / 60) * second) + 90
        }deg)`;
}
var start = new Date().getTime();

function getRandomColor() {

    var letters = "0123456789ABCDEF".split("");
    var color = "#";

    for(var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    } // end for loop

    return color;

} // end getRandomColor function

function makeShapeAppear() {

    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var width = (Math.random() * 300) + 100;
    var height = (Math.random() * 400) + 100;

    if(Math.random() > 0.5) {

        document.getElementById("shape").style.borderRadius = "50%";

    } // end if
    else {

        document.getElementById("shape").style.borderRadius = "0%";

    } // end else

    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = height + "px";

    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();

} // end makeShapeAppear function

function appearAfterDelay() {

    setTimeout(makeShapeAppear, Math.random() * 2000);

} // end appearAfterDelay function

appearAfterDelay();

document.getElementById("shape").onclick = function() {

    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    document.getElementById("time-taken").innerHTML = timeTaken + "s";

    appearAfterDelay();

} // end shape.onclick function
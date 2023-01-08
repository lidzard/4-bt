Status = "";
img = "";
objects = [];
function preload() {
    img = loadImage("imageService.jpg")
}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting...";
}
function draw() {
    image(img, 0, 0, 500, 500);
    if(objects.length != 0)
    {
        for( i = 0; i < objects.length; i++)
        {
            con = Math.floor(objects[i].confidence * 100) + "%";
            name = objects[i].label;
            x = objects[i].x;
            y = objects[i].y;
            width = objects[i].width;
            height = objects[i].height;
            text(name, x, y);
            noFill();
            stroke("red");
            rect(x, y, width, height);
            document.getElementById("objectdec").innerHTML = "There is 1 object cocossd detected " + objects.length;
            document.getElementById("status").innerHTML = " Detected";
        }
    }
}
function modelLoaded() {
    console.log("Model Loaded");
    Status = true;
    objectdetector.detect(img, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}
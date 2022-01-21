difference = 0
leftWristX = 0
rigthWristX = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(150, 150)

    canvas = createCanvas(550, 550);
    canvas.position(800,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0) {
      console.log(results)
  
  leftWristX = results[0].pose.leftWrist.x;
  rightWristX = results[0].pose.rightWrist.x;
  difference = floor(leftWristX - rightWristX);

  console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
    background('#969A97');
    document.getElementById("font_size").innerHTML = "The Font size will be = " + difference +"px";
    text('simsam', 50, 400);
    textSize(difference);
    fill('#800080')  
    }
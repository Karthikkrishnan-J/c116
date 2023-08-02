noseX = 0 ;
noseY = 0 ;
function preload() {
 moustache = loadImage("png tree.png");      
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.size(300, 300);
    camera.hide();
    posenet = ml5.poseNet(camera, modelLoaded);
    posenet.on('pose', gotresult);
}
function draw() {
    image(camera, 0, 0, 300, 300);
    image(moustache, noseX-35, noseY-20, 100, 100);
}
function snap() {
    save("yourpic.png");
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotresult(result){
    console.log(result);
    noseX = result[0].pose.nose.x;
    noseY = result[0].pose.nose.y;
    console.log("noseX = " + noseX);
    console.log("noseY = " + noseY);
}
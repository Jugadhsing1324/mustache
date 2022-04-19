mooch_x=0;
mooch_y=0;

function preload(){
mooch_img=loadImage("https://i.gifer.com/GqjH.gif");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
  image(video,0,0,499,499);
  image(mooch_img,mooch_y,mooch_x);
}

function take_snapshot(){
    save("Filtered_image.png");
}

function modelLoaded(){
    console.log("PoseNet initialised(model is loaded)");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        mooch_x=results[0].pose.mooch.x;
        mooch_y=results[0].pose.mooch.y;
        console.log("mooch_x="+results[0].pose.mooch.x);
        console.log("mooch_y="+results[0].pose.mooch.y);
        
    }
}

function down(){
    save("https://www.filehorse.com/download/file/UxxrrwFQ-iV20XwBRuCA5xNyfEMHFBfAgm-fwwUJrJN2Uw6xTZruVzquHPWaWlQzHQAQbneZ_h5PnFbDEeeVRDplU8fGmTtMBx8kowpvl_g/")
}

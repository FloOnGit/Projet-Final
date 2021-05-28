function setup() {

  function preload() {
    myFont = loadFont('/police/DS-DIGIT.TTF');
  }
  createCanvas(900,900);
  }
  
  function draw() {
  
  
  background(0);
    
  
  strokeWeight(4);
    
  
  
  var sec = second();
  var min = minute();
  var hrs = hour();
    
  
  
  var mer = hrs < 12 ? "AM":"PM";
    
  
  
  sec = formatting(sec);
  min = formatting(min);
  hrs = formatting(hrs % 12);

 // textFont ()
  textFont('police/DS-DIGIT.TTF')
  textFont(myFont);
  fill(255, 149, 0);
    
  
  textSize(60);
  
  
  
  
  textAlign(CENTER, CENTER);
    
 
  text(hrs + ":" + min + ":" + sec +
    " " + mer, width/2, height/5);
  }
  
  
  
  
  function formatting(num){
    
 
  
  if(int(num) < 10) {
    
    
    return "0" + num;
  }
    
  
  
  return num;
  }
  
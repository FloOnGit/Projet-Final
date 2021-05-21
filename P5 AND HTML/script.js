function setup() {
    createCanvas(windowWidth,windowHeight) ;
    }
    function setup() {

        // Create Canvas of given size
        createCanvas(200,200);
        }
        
        function draw() {
        
        // Set the background color
        background(0);
            
        // Set the strokeWeight to be thicker
        strokeWeight(4);
            
        // Get the current second, minute and hours
        // and assign them to res variables
        var sec = second();
        var min = minute();
        var hrs = hour();
            
        // Check for AM or PM based on the
        // hours and store it in a variable
        var mer = hrs < 12 ? "AM":"PM";
            
        // Format the time so that leading
        // 0's are added when needed
        sec = formatting(sec);
        min = formatting(min);
        hrs = formatting(hrs % 12);
            
        // Set the color of the background
        fill(255);
            
        // Set the font size
        textSize(12);
            
        // Set the text alignment in center
        // and display the result
        textAlign(CENTER, CENTER);
            
        // Display the time
        text(hrs + ":" + min + ":" + sec +
            " " + mer, width/2, height/2);
        }
        
        // This function pads the time
        // so that 0's are shown
        // eg. 06,08,05 etc.
        function formatting(num){
            
        // Convert to int and check
        // if less than 10
        if(int(num) < 10) {
            
            // Return the padded number
            return "0" + num;
        }
            
        // Return the original number if
        // padding is not required
        return num;
        }
        
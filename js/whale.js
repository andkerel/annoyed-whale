// WHALE.JS

// By: Andrea Kereliuk, 2015
// For use with the Annoyed Whale game.

//Requires CreateJS library; http://code.createjs.com/createjs-2014.12.12.min.js
//Requires stageW and stageH variables be initialized in any documents that reference whale.js

var whale = function(whale) { 

    //make tail shape; format function(integer, integer, boolean)
    whale.Tail = function(scale, xPosition, wiggle) {

      var innerTail = function() {

        //check for scale set (ups by factor of 100 each +1)
        var scaleTest = parseInt(scale, 10);
        if (isNaN(scaleTest) != true && scaleTest != 0) {
           scale = scale; // custom scale factor
        } else {
            scale = 5; // default scale factor
        }

        //create tail container
        this.tailContainer = tailContainer = new createjs.Container();
        //scale input consideration (by factor of)
        tailContainer.setBounds(0,0,100*scale,100*scale);

        //y position
        tailContainer.y = stageH/2;
        //x position
        var xIntTest = parseInt(xPosition, 10);
        if (isNaN(xIntTest) != true && xIntTest !== 0) {
            tailContainer.x = xIntTest; // custom x
        } else {
            tailContainer.x = stageW/2; // default x
        } // end x position statement

        //
        //create Tail shape
        var tail = new createjs.Shape();
        tail.x = 0;
        tail.y = 0;
        tail.graphics.f("#484848")
        .ss("3")
        .s("#282828")
        .mt(tail.x, tail.y)
        .quadraticCurveTo(tail.x + tailContainer.getBounds().width/2 - 10*scale, 
                          tail.y - tailContainer.getBounds().height/5, 
                          tailContainer.getBounds().width/2, 
                          tail.y - 5*scale)
        .quadraticCurveTo(tail.x + tailContainer.getBounds().width/2 + 10*scale, 
                          tail.y - tailContainer.getBounds().height/5, 
                          tailContainer.getBounds().width, 
                          tail.y)
        .quadraticCurveTo(tail.x + tailContainer.getBounds().width/2 + 10*scale, 
                          tail.y - tailContainer.getBounds().height/5 + 20*scale, 
                          tailContainer.getBounds().width/2 + 5*scale, 
                          tailContainer.getBounds().height)
        .lt(tailContainer.getBounds().width/2 - 10*scale, tailContainer.getBounds().height)
        .quadraticCurveTo(tail.x + tailContainer.getBounds().width/2 - 5*scale, 
                          tail.y - tailContainer.getBounds().height/5 + 20*scale, 
                          tail.x, 
                          tail.y);

        //add tail to container
        tailContainer.addChild(tail);
        //add tailContainer to stage
        stage.addChild(tailContainer);
        stage.update();

        //wiggle tail
        if (wiggle == true) {
            createjs.Tween.get(tailContainer, {loop:true})
            .to({x:tailContainer.x + 10*scale, alpha:1}, createjs.Ease)
            .wait(100)
            .to({x:tailContainer.x, alpha:1}, createjs.Ease)
            .wait(100)
            .to({x:tailContainer.x + 10*scale, alpha:1}, createjs.Ease)
            .wait(100)
            .to({x:tailContainer.x, alpha:1}, createjs.Ease)
            .wait(100)
            .to({x:tailContainer.x + 10*scale, alpha:1}, createjs.Ease)
            .wait(100)
            .to({x:tailContainer.x, alpha:1}, createjs.Ease)
            .wait(1000);
        } else if (wiggle != true) {
            return;
        } // end wiggle statement

      } // end innerTail function

    innerTail.prototype = new createjs.Container();
    innerTail.constructor = whale.innerTail;
    return new innerTail;

    } // end whale.Tail



    //make waves; format function(integer, integer)
    whale.Waves = function(scale, speed) {

      var innerWaves = function() {

        // set up variables
        var waves;

        //check for scale set (ups by factor of 100 each +1)
        var scaleTest = parseInt(scale, 10);
        if (isNaN(scaleTest) != true && scaleTest != 0) {
           scale = scale; // custom scale factor
        } else {
            scale = 3; // default scale factor
        }

        //create container for waves
        waveContainer = new createjs.Container();
        waveContainer.setBounds(0,0,stageW, stageH/2-scale*100);
        waveContainer.x = 0;
        waveContainer.y = stageH/2+scale*100;

        //
        //create waves shape
        waves = new createjs.Shape();
        waves.x = 0;
        waves.y = 0 - scale*15;
        waves.graphics.f("#36bdf1")
        .ss("1")
        .s("#36bdf1")
        .mt(waves.x, waves.y)
        //up
        .quadraticCurveTo(waves.x + 1*stageW/14 + 5*scale, 
                          waves.y - 30*scale, 
                          waves.x + 1*stageW/14 - 20*scale, 
                          waves.y - 60*scale)
        //back
        .quadraticCurveTo(waves.x + 2*stageW/14, 
                          waves.y - 30*scale, 
                          waves.x + 2*stageW/14, 
                          waves.y)
        //up
        .quadraticCurveTo(waves.x + 3*stageW/14 + 5*scale, 
                          waves.y - 30*scale, 
                          waves.x + 3*stageW/14 - 20*scale, 
                          waves.y - 60*scale)
        //back
        .quadraticCurveTo(waves.x + 4*stageW/14, 
                          waves.y - 30*scale, 
                          waves.x + 4*stageW/14, 
                          waves.y)
        //up
        .quadraticCurveTo(waves.x + 5*stageW/14 + 5*scale, 
                          waves.y - 30*scale, 
                          waves.x + 5*stageW/14 - 20*scale, 
                          waves.y - 60*scale)
        //back
        .quadraticCurveTo(waves.x + 6*stageW/14, 
                          waves.y - 30*scale, 
                          waves.x + 6*stageW/14, 
                          waves.y)
        //up
        .quadraticCurveTo(waves.x + 7*stageW/14 + 5*scale, 
                          waves.y - 30*scale, 
                          waves.x + 7*stageW/14 - 20*scale, 
                          waves.y - 60*scale)
        //back
        .quadraticCurveTo(waves.x + 8*stageW/14, 
                          waves.y - 30*scale, 
                          waves.x + 8*stageW/14, 
                          waves.y)
        //up
        .quadraticCurveTo(waves.x + 9*stageW/14 + 5*scale, 
                          waves.y - 30*scale, 
                          waves.x + 9*stageW/14 - 20*scale, 
                          waves.y - 60*scale)
        //back
        .quadraticCurveTo(waves.x + 10*stageW/14, 
                          waves.y - 30*scale, 
                          waves.x + 10*stageW/14, 
                          waves.y)
        //up
        .quadraticCurveTo(waves.x + 11*stageW/14 + 5*scale, 
                          waves.y - 30*scale, 
                          waves.x + 11*stageW/14 - 20*scale, 
                          waves.y - 60*scale)
        //back
        .quadraticCurveTo(waves.x + 12*stageW/14, 
                          waves.y - 30*scale, 
                          waves.x + 12*stageW/14, 
                          waves.y)
        //up
        .quadraticCurveTo(waves.x + 13*stageW/14 + 5*scale, 
                          waves.y - 30*scale, 
                          waves.x + 13*stageW/14 - 20*scale, 
                          waves.y - 60*scale)
        //back
        .quadraticCurveTo(waves.x + 14*stageW/14, 
                          waves.y - 30*scale, 
                          waves.x + 14*stageW/14, 
                          waves.y)
        //up
        .quadraticCurveTo(waves.x + 15*stageW/14 + 5*scale, 
                          waves.y - 30*scale, 
                          waves.x + 15*stageW/14 - 20*scale, 
                          waves.y - 60*scale)
        //back
        .quadraticCurveTo(waves.x + 16*stageW/14, 
                          waves.y - 30*scale, 
                          waves.x + 16*stageW/14, 
                          waves.y)
        //bottom
        .lt(stageW+2*stageW/14, stageH)
        .lt(0, stageH)
        .lt(0, 0);

        //add waves to container
        waveContainer.addChild(waves);
        //add waveContainer to stage
        stage.addChild(waveContainer);
        stage.update();

        var speedTest = parseInt(speed, 10);
        if (isNaN(speedTest) != true && speedTest != 0) {
           speed = speed; // custom scale factor
        } else {
            speed = 1; // default scale factor
        }

        // animate waves
        createjs.Tween.get(waveContainer, {loop:true})
        .to({x:0-2*stageW/14, y:waveContainer.y+scale*10, alpha:1}, 2000/speed, createjs.Ease.quadInOut)
        .wait(15)
        .to({x:0, y:waveContainer.y, alpha:1}, 2000/speed, createjs.Ease.quadInOut)
        .wait(15);

      } // end innerWaves

    innerWaves.prototype = new createjs.Container();
    innerWaves.constructor = whale.innerWaves;
    return new innerWaves;

    } // end whale.Waves

    return whale;
} (whale || {});
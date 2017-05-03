var myElement = document.getElementById('doubleTap');

// We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
var mc = new Hammer.Manager(myElement);

var press = 0;
var timeout;

// Tap recognizer with minimal 2 taps
mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
// Single tap recognizer
mc.add( new Hammer.Tap({ event: 'singletap' }) );
// add press option
mc.add ( new Hammer.Press({ event: 'press', time: 2000}) );


// we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
mc.get('doubletap').recognizeWith('singletap');
// we only want to trigger a tap, when we don't have detected a doubletap
mc.get('singletap').requireFailure('doubletap');
//press test
mc.get('press').requireFailure('singletap');

mc.on("singletap doubletap", function(ev) {
    console.log(ev.type);
});

mc.on("press", function(ev) {
    console.log(ev.type);
//    console.log(press);
    pressSuccess();
    if (press == 2) {
    console.log ("the shit hit the fan");
}
});





    
function pressSuccess (){
    console.log ("let's go!");
    press++
    console.log(press);
    if (press == 1) {
    timeout = setTimeout(function(){ press = 0; console.log(press)}, 6000);
        }
    else if (press == 2) {
        {
            clearTimeout(timeout);
            console.log ("timeoutCleared");
            
        }
    }
}
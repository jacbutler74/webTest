document.addEventListener('DOMContentLoaded', con);

function con() {
    document.getElementById('buttonB').addEventListener('click', prom);
}

function prom() {
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var windowWidth = 600; // Width of the popup window
    var windowHeight = 400; // Height of the popup window
    var left = (screenWidth - windowWidth) / 2;
    var top = (screenHeight - windowHeight) / 2;

    // Open the popup window with the specified URL and window features
    window.open('pop_up.html', 'popupWindow', 'width=' + windowWidth + ', height=' + windowHeight + ', left=' + left + ', top=' + top);
}

function link() {
    window.close('pop_up.html');
}


function vidImg(url) {
    document.getElementById('source_one').src = url;
}


const videos = [
    "fentWorld.mp4",
    "2nd.mp4"
];
var x = 0;
function vids() {
    var vid = document.getElementById('source_one');
    if (x === 0) {
        vid.src = "2nd.mp4";
        ++x;
    }
    else {
        vid.src = "fentWorld.mp4";
        x = 0;
    }
    vid.load();
    vid.play();
}

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


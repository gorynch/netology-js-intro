console.log('Lets start');
const elementClassName = "volume-rect";
const elementClassNameActive = "volume-rect__active";
const btnVolumeUpClass = "volume-up";
const btnVolumeDownClass = "volume-down";
const numericIndictorClass = "indicator";
const collection = document.getElementsByClassName(elementClassName);
const btnVolumeUp = document.getElementsByClassName(btnVolumeUpClass);
const btnVolumeDown = document.getElementsByClassName(btnVolumeDownClass);
const numericIndicator = document.getElementsByClassName(numericIndictorClass);

[...btnVolumeUp][0].addEventListener("click", () => volumeBtn('up'));
[...btnVolumeDown][0].addEventListener("click", () => volumeBtn('down'));

function volumeBtn (direction) {
    if (([...numericIndicator][0].textContent != '10') && ([...numericIndicator][0].textContent != '0')) {
        Array.from(document.getElementsByClassName(elementClassName)).forEach(
            function(element, i, array) {
                if (i < [...numericIndicator][0].textContent) {
                    if (element.className.includes(elementClassNameActive)) {
                        element.classList.remove(elementClassNameActive);
                    }
                }
            }
        );
        let currentVolume = Number([...numericIndicator][0].textContent);
        if (direction == 'up') {
            currentVolume += 1;
        }
        else {
            currentVolume -= 1;
        }
        [...numericIndicator][0].textContent = currentVolume;
        Array.from(document.getElementsByClassName(elementClassName)).forEach(
            function(element, i, array) {
                if (i < [...numericIndicator][0].textContent) {
                    element.classList.add(elementClassNameActive);
                }
            }
        );
    }
    else {
        if (([...numericIndicator][0].textContent == '0') && (direction == 'up')) {
            [...numericIndicator][0].textContent = '1';
            [...collection][0].classList.add(elementClassNameActive);
        }
        if (([...numericIndicator][0].textContent == '10') && (direction == 'down')) {
            [...numericIndicator][0].textContent = '9';
            [...collection][9].classList.remove(elementClassNameActive);
            }
        }
}


Array.from(document.getElementsByClassName(elementClassName)).forEach(
    function(element, index, array) {
        element.addEventListener("click", function() {changeVolume(index)});
    }
);

function changeVolume(index){
    Array.from(document.getElementsByClassName(elementClassName)).forEach(
        function(element, i, array) {
            if (element.className.includes(elementClassNameActive)) {
                element.classList.remove(elementClassNameActive);
            }
        }
    );
    Array.from(document.getElementsByClassName(elementClassName)).forEach(
        function(element, i, array) {
            if (i <= index) {
                element.classList.add(elementClassNameActive);
            }
        }
    );
    [...numericIndicator][0].textContent = (index+1);
}
console.log('done');
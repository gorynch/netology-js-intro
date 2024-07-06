console.log('Lets STARt');
const collection = document.getElementsByClassName("star");
Array.from(document.getElementsByClassName("star")).forEach(
    function(element, index, array) {
        element.addEventListener("click", function() {checkClickIndex(index)});;
    }
);

function checkClickIndex(index){
    console.log('clicked index : ', index);
    Array.from(document.getElementsByClassName("star")).forEach(
        function(element, i, array) {
            if (element.className.includes("star_active")) {
                console.log('includes');
                element.classList.remove("star_active");
                console.log(element.className)
            }
        }
    );
    Array.from(document.getElementsByClassName("star")).forEach(
        function(element, i, array) {
            if (i <= index) {
                console.log('index : ', index, ' i : ', i);
                element.classList.add("star_active");
            }
        }
    );
}
console.log('done');
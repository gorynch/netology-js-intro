const subMenus = document.querySelectorAll('.sub-checkbox');
const mainCheckBox = document.getElementById('main-checkbox');
let countSubsChecked = 0;

function onChangeSubMenu() {
    countSubsChecked = 0;
    subMenus.forEach((el) => {
        if (el.checked) {
            countSubsChecked++;
        }
    });
    if (countSubsChecked == subMenus.length){
        mainCheckBox.checked = true;
    }
    else {
        mainCheckBox.checked = false;
    }
}

mainCheckBox.addEventListener('change', () => {
    if (mainCheckBox.checked) {
        subMenus.forEach((el) => {
            el.checked = true;
        });
    }
    else {
        subMenus.forEach((el) => {
            el.checked = false;
        });
    }
});

subMenus.forEach((el) => {
    el.addEventListener('change', onChangeSubMenu);
})

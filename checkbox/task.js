const subMenus = document.querySelectorAll('.sub-checkbox');
// const subMenu1 = document.getElementsByName('sub-checkbox-1');
// const subMenu2 = document.getElementsByName('sub-checkbox-2');
// const subMenu3 = document.getElementsByName('sub-checkbox-3');
// const subMenuName = 'sub-checkbox-';
const mainCheckBox = document.getElementById('main-checkbox');
let countSubsChecked = 0;
// let isAllChecked = false;

function onChangeSubMenu() {
    // if (el.target.checked == true) {
    //     el.target.checked = false;
    // }
    // else {
    //     el.target.checked = true;
    // }
    // el.target.checked = !el.target.checked;
    // console.log(subMenus.length);
    // console.log(subMenus.length);
    // for (i=0; i<subMenus.length; i++) {
    //     if (!el.checked) {
    //         isAllChecked = false;
    //     }
    // }
    countSubsChecked = 0;
    subMenus.forEach((el) => {
        // console.log(el);
        // console.log(el.closest('label').textContent.trim(), el.checked);
        if (el.checked) {
            countSubsChecked++;
            // console.log('count',countSubsChecked);
            // isAllChecked = true;
        }
    });
    if (countSubsChecked == subMenus.length){
        mainCheckBox.checked = true;
    }
    else {
        mainCheckBox.checked = false;
    }
    // console.log(el);
    // console.log(el[0]);
    // console.log(el.value);
    // console.log(el.target.value);
    // console.log(el.target.checked);
    // console.log(el[0]);
    // console.log(el.currentTarget.param);
    // switch (el.currentTarget.param[0]) {
    //     case 0: 
    //         subMenus
    //         console.log(el.target.checked);
    //         console.log(el.currentTarget.param[1]);
    //         break;
    //     case 1:
    //         console.log(el.target.checked);
    //         console.log(el.currentTarget.param[1]);
    //         break;
    //     case 2: 
    //     console.log(el.target.checked);
    //     console.log(el.currentTarget.param[1]);
    // }
    // switch (el.currentTarget.param) {
    //     case 0: console.log(subMenu1[0].checked);
    //         break;
    //     case 1: console.log(subMenu2[0].checked);
    //         break;
    //     case 2: console.log(subMenu3[0].checked);
    // }
    // if (el.currentTarget.param == 1) {
    //     console.log(subMenu1.checked);
    // }
}

mainCheckBox.addEventListener('change', () => {
    // console.log(mainCheckBox.checked);
    if (mainCheckBox.checked) {
        subMenus.forEach((el) => {
            // console.log(el);
            el.checked = true;
        });
    }
    else {
        subMenus.forEach((el) => {
            // console.log(el);
            el.checked = false;
        });
    }
    // subMenu1[0].checked = true;
});

// console.log(subMenu1[0])
// // subMenu1[0].addEventListener('change', onChangeSubMenu, false);
// console.log(subMenu1[0])
// subMenu1[0].param = 0;
// subMenu2[0].addEventListener('change', onChangeSubMenu, false);
// subMenu2[0].param = 1;
// subMenu3[0].addEventListener('change', onChangeSubMenu, false);
// subMenu3[0].param = 2;

// subMenu2.addEventListener('change', () => {
//     onChangeSubMenu(subMenu2);
// });
// subMenu3.addEventListener('change', () => {
//     onChangeSubMenu(subMenu3);
// });

subMenus.forEach((el, index) => {
    // console.log(el);
    // console.log(el.closest('label').textContent.trim());
    // console.log(el.value);
    el.addEventListener('change', onChangeSubMenu, false);
    // console.log(el)
    // el.param = [index, el.closest('label').textContent.trim()];
    // if (Boolean(el.closest('.book__control_color'))) {
    //     el.addEventListener('click', textColorChange, false);
    //     contentColor[index].param = index;    
    // }
    // if (Boolean(el.closest('.book__control_background'))) {
    //     el.addEventListener('click', bckgdColorChange, false);
    //     contentColor[index].param = index;    
    // }
})

// for (i=0; i<countSubMenu; i++) {
//     let subMenu = document.getElementsByName(subMenuName+i)
//     subMenu.addEventListener('change', (el) => {
//         console.log(subMenu.checked);
//     });
// }


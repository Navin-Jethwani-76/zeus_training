const hamburgerIcon = document.getElementById('hamburger');
const hamburgmenu = document.getElementsByClassName('hamburger-menu')[0];
const dropdown = document.getElementsByClassName('dropdown');
const reverseArrow = document.getElementsByClassName('arrow-down');
const subItems = document.getElementsByClassName('menu-subItems');
const alertIcon = document.querySelector('.alert-icon');
const notificationArea = document.querySelector('.notificationArea');
const announcementIcon = document.querySelector('.announcement-icon');
const announcementArea = document.querySelector('.announcementArea');




hamburgerIcon.addEventListener('click',displayItems);

function displayItems(){
    if (hamburgmenu.style.display == 'block'){
        hamburgmenu.style.display = 'none';
    }
    else{
        hamburgmenu.style.display = 'block';
    }
}   


// submenu button script start
let clickedDropdown;
for (let dropdownbtn of dropdown) {
    dropdownbtn.children[0].addEventListener('click', () => {
        if (clickedDropdown != undefined && clickedDropdown != dropdownbtn) {
            clickedDropdown.children[1].style.display = 'none';
            clickedDropdown.children[1].style.height = '0px';
            clickedDropdown.children[0].children[0].style.rotate = '90deg'
            clickedDropdown.style.backgroundColor = 'white'
        }

        clickedDropdown = dropdownbtn
        const menuSubItems = dropdownbtn.children[1];
        const dropdownArrow = dropdownbtn.children[0].children[0];

        if (menuSubItems.style.display == "block") {
            menuSubItems.style.display = 'none';
            menuSubItems.style.height = '0px';
            dropdownArrow.style.rotate = '90deg'
            dropdownbtn.style.backgroundColor = 'white'
        }
        else {
            menuSubItems.style.display = 'block';
            menuSubItems.style.height = 'max-content';
            dropdownArrow.style.rotate = '-90deg'
            dropdownbtn.style.backgroundColor = '#F3F3F3'
        }
    })
}



// alert icon script start
alertIcon.addEventListener('mouseover', () => {
    notificationArea.style.transform = 'scaleY(1)'
    alertIcon.children[1].style.display = 'none';
    alertIcon.children[0].style.filter = 'brightness(0) invert(1)'

})
alertIcon.addEventListener('mouseout', () => {
    notificationArea.style.transform = 'scaleY(0)'
    alertIcon.children[1].style.display = 'flex';
    alertIcon.children[0].style.filter = 'brightness(1) invert(0)'
})
notificationArea.addEventListener('mouseover', () => {
    notificationArea.style.transform = 'scaleY(1)'
    alertIcon.children[1].style.display = 'none';
    alertIcon.children[0].style.filter = 'brightness(0) invert(1)'
})
notificationArea.addEventListener('mouseout', () => {
    notificationArea.style.transform = 'scaleY(0)'
    alertIcon.children[1].style.display = 'flex';
    alertIcon.children[0].style.filter = 'brightness(1) invert(0)'
})
// alert icon script end


// announcement icon script start
announcementIcon.addEventListener('mouseover', () => {
    announcementArea.style.transform = 'scaleY(1)'
    announcementIcon.children[1].style.display = 'none';
    announcementIcon.children[0].style.filter = 'brightness(0) invert(1)'
})
announcementIcon.addEventListener('mouseout', () => {
    announcementArea.style.transform = 'scaleY(0)'
    announcementIcon.children[1].style.display = 'flex';
    announcementIcon.children[0].style.filter = 'brightness(1) invert(0)'
})
announcementArea.addEventListener('mouseover', () => {
    announcementArea.style.transform = 'scaleY(1)'
    announcementIcon.children[1].style.display = 'none';
    announcementIcon.children[0].style.filter = 'brightness(0) invert(1)'
})
announcementArea.addEventListener('mouseout', () => {
    announcementArea.style.transform = 'scaleY(0)'
    announcementIcon.children[1].style.display = 'flex';
    announcementIcon.children[0].style.filter = 'brightness(1) invert(0)'
})
// announcement icon script end


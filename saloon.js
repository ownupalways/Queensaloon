let navigation = document.querySelector(".internal_Navigation");

let navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");

// RESPONSIVE NAVIGATION  OPERATION

let menuList = document.querySelector(".ulContainer");
console.log(menuList)

let  menuBtn = document.querySelector('.fas')
let closeMenuBtn = document.querySelector('.fa-solid')

menuBtn.addEventListener('click', (e) => {
let menuClicked = e.target
menuClicked.parentElement.style.display = "none"
closeMenuBtn.parentElement.style.display = "block"
menuList.style.left = "0"
})

closeMenuBtn.addEventListener('click', (e) => {
    let closeMenuClicked = e.target;
    closeMenuClicked.parentElement.style.display = "none";
    menuBtn.parentElement.style.display = "block";
    menuList.style.left = "-100%"
    })

    let tabLists = document.querySelectorAll('.tab')
    console.log(tabLists)

    tabLists.forEach(tabList => {
        tabList.addEventListener('click', (e)=> {
            let tabListClicked = e.target
            tabListClicked.parentElement.parentElement.style.left = "-100%"
            menuBtn.parentElement.style.display = "block";
        })
    });

let menubar = document.querySelectorAll(".menu-bar");
let scrollmenupart = document.querySelector(".scrollpart");
let main_content = document.querySelector(".main-content");
console.log(menubar);
console.dir(menubar);
let mainscroll = document.querySelector(".scrollpartmain")


// scrollmenupart.addEventListener("scroll" ,(evt)=>{
//     // console.log(scrollmenupart.scrollHeight);
//     // console.log(scrollmenupart.scrollTop);
//     // console.log(scrollmenupart.scrollLeft);
//     // console.log(scrollmenupart.scrollWidth);
//     // console.log(scrollmenupart.clientHeight);
//     // console.log(scrollmenupart.clientTop);
//     // console.log(scrollmenupart.clientLeft);
//     // console.log(scrollmenupart.clientWidth);
//     if (scrollmenupart.scrollHeight - menubar[0].scrollTop === menubar[0].clientHeight) {
//         // If the scrollable content has reached the bottom
//         // Prevent default scroll behavior of the page
//         evt.preventDefault();
//     }
// });

// menubar[0].addEventListener("scroll",()=>{
//     var scrollableHeight = scrollmenupart.scrollHeight - menubar[0].clientHeight;
//         if (menubar[0].scrollTop === scrollableHeight) {
//             // If the scrollable content has reached the bottom
//             // Scroll to the bottom of the content
//             menubar[0].scrollTo(0, scrollableHeight);
//         }
// });

// mainscroll.addEventListener("scroll" , (evt)=>{
//     if (mainscroll.scrollHeight - main_content.scrollTop === main_content.clientHeight) {
//         // If the scrollable content has reached the bottom
//         // Prevent default scroll behavior of the page
//         evt.preventDefault();
//     }
// })
const search = document.querySelector('.search')
const input = document.querySelector('.input_text')
const btn = document.querySelector('.btn')


//1.Version
// btn.addEventListener('click', () => {
//     search.classList.toggle('active')
// })

// 2.Version
// btn.addEventListener('click', function ()  {
//     search.classList.toggle('active')
// })

//3.Version
// function openSearch() {
//     search.classList.toggle('active')
// }
// btn.addEventListener('click', openSearch)

//4.Version
function openSearch() {
    search.classList.toggle('active')
}
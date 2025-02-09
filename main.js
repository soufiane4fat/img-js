// document.write('first try');
// // window.alert('ello');
// console.dir('test');
// var name = "kyo ";
// var date = 98;
// var z = " kk" ;
// console.log(`this is ${name} since ${date}`);
// let num = 15;
// num += 5;
// document.write(num++);
// document.write(num);
// console.log(typeof '5')
// console.log(Number.isNaN(5 - "amin"))
// // first-projet
// // let zakah = window.prompt()
// // console.log(0.025 * zakah + `dh`)
// console.log(typeof (45).toString());
let btn = document.getElementsByTagName('button')[0];
console.log(btn)
window.onscroll = function () {
    if (scrollY >= 400) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none'
    }    
}
btn.onclick = function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior:'smooth'
    })
}
 
if (localStorage.length > 0) {
    main.src = localStorage.getItem("fix");
}
function fixed(fix) {
    localStorage.setItem('fix', fix);
    // div.src = fix;
    main.src = fix;
}

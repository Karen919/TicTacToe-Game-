const resetWins = document.getElementById("resWins");
const resetWalues = document.getElementById('resWalues');
const theme = document.getElementById('theme');
const body = document.getElementById('body');
let box = Array.from(document.getElementsByClassName('box'));
const xWin = document.getElementById('xWin');
const oWin = document.getElementById('oWin');
let xWinAccum = null;
let oWinAccum = null;
let accum = null;
let x = [];
let combinations = [  
[0, 1, 2], 
[3, 4, 5], 
[6, 7, 8], 
[0, 3, 6], 
[1, 4, 7], 
[2, 5, 8], 
[0, 4, 8], 
[2, 4, 6]
];
let win= (a,z) => {
    this[a[0]].innerHTML = 'win'
    this[a[1]].innerHTML = 'win'
    this[a[2]].innerHTML = 'win'
    alert(`${z} is win`);
}
box.map((value, index) => {
    const foo =(event) => {
        accum++
        if (accum %2 == 0 ) {
            value.innerHTML = 'O'
        } else if (accum %2 !== 0 ){
            value.innerHTML = "X"
        }
        x[index]=event.target.textContent;
        combinations.forEach(function (i){
            if (x[i[0]] =='X' && x[i[1]] =='X' && x[i[2]] =='X') {
                xWinAccum++;
                xWin.innerHTML = xWinAccum;
                win(i, 'X')
            }
        })
        combinations.forEach(function (i){
            if (x[i[0]] =='O' && x[i[1]] =='O' && x[i[2]] =='O') {
                oWinAccum++
                oWin.innerHTML= oWinAccum
                win(i,'O')
            }
        })
    }
    value.addEventListener('click', foo)
});

resetWins.addEventListener('click', function () {
    oWin.innerHTML = 0;
    xWin.innerHTML = 0;
    oWinAccum = 0;
    xWinAccum = 0;
})

resetWalues.addEventListener('click', () => {
    for ( let i = 0; i <= box.length; i++ ) {
        box[i].innerText = null;
        x[i] = null;
    }
});
theme.addEventListener('click', () => {
    let themeArr = ['#d2691e', '#6495ed', '#556b2f', '#1e90ff', '#faf0e6'];
let randomIndex = Math.floor( Math.random() * themeArr.length );

        body.style.backgroundColor = `${themeArr[randomIndex]}`
    

})
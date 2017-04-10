for(let i = 1; i <= 5; i++){
    console.log(i);
}
//console.log("i" + i);

const c = 50;
console.log(c);
//c = 60;

let f = function() {
    return "hello World !!";
}

console.log(f());

let f2 = (x) => {return "Function 2 !!" + x};
console.log(f2(" Hi"));

function temp(fm) {
    console.log("temp: ", fm());
}

function temp1(fm) {
    console.log("temp: ", fm("Hi"));
}

temp(() => "hello WQorld");

temp1(f2);


function temp2(fm) {
    console.log("temp: ", fm);
}

temp2(f2("H"));




function main() {
    var a = document.getElementsByTagName("p");
    console.log(a);
    var b = [];
    for (i = 0; i < a.length; i++) {
        b.push(a[i].innerText);
    }
    console.log(b);
}

function question() {
    var a = document.getElementsByClassName("question");
    console.log(a);
    var b = [];
    for (i = 0; i < a.length; i++) {
        b.push(a[i].childNodes[0].innerText);
    }
    console.log(b);
}

function causes() {
    var a = document.getElementsByClassName("output");
    var b = [];
    for (i = 0; i < a.length; i++) {
        var c = [];
        for (j = 0; j < a[i].childElementCount; j++) {
            if (j === 1 || j === 5) {
                c.push(a[i].childNodes[j].innerText);
            }

        }
        b.push(c);
    }
    console.log("hello b");
    console.log(b);
}

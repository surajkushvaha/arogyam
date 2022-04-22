
var Symptomps = symptoms
window.onload = function () {
    if (window.innerWidth > 650) {
        var a1 = document.getElementById('Que')
        var a2 = document.getElementById('Cau')
        var a3 = document.getElementById('btnCau')
        a1.style.display = "block"
        a2.style.display = "block"
        a3.style.display = "none"
    }
    var select = document.getElementById("Symptomps");
    for (let i = 0; i < Symptomps.length; i++) {
        var option = document.createElement('option');
        option.text = Symptomps[i]
        option.value = i;
        select.add(option)
    }
    selectQue(0);
}

function selectQue(params) {
    if (window.innerWidth < 650) {
        var a1 = document.getElementById('Que')
        var a2 = document.getElementById('Cau')
        var a3 = document.getElementById('btnCau')
        a1.style.display = "block"
        a2.style.display = "none"
        a3.style.display = "none"
    }
    var Question = que[params];
    var listQuestion = document.getElementById('Questions')
    var possibleQue = document.getElementById('possibleQue')

    listQuestion.innerHTML = " "
    possibleQue.innerHTML = " "
    for (let i = 0; i < Question.length; i++) {
        var listItem = document.createElement('li');
        var ans = '<p class="font-medium">' + Question[i] + '</p><div class="form-check"><input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="' + i + '" value="yes" onclick="funPossibleCause(this.name)"><label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">Yes</label></div><div class="form-check"><input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="' + i + '"value="No" onclick="funPossibleCauseNo(this.name)" ><label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">No</label>'

        listItem.innerHTML = ans
        listItem.className = "px-6 py-2 border border-gray-200 w-full rounded m-1"
        listQuestion.appendChild(listItem)
    }
}

function funPossibleCause(params) {
    var possibleQue = document.getElementById('possibleQue')

    possibleQue.innerHTML = " "

    var getSymptomValue = document.getElementById('Symptomps')

    var strUser = getSymptomValue.options[getSymptomValue.selectedIndex].value;

    var getQuestionValue = params
    var Causes = causes[strUser][getQuestionValue]
    var listCause = document.createElement('li')
    var Diagnosis = "<h3 class='font-medium text-red-500'>Diagonosis</h3><p>" + Causes[0] + "</p>"
    var selfCare = "<h3 class='font-medium text-green-500'>Self Care</h3><p>" + Causes[1] + "</p>"

    listCause.innerHTML = Diagnosis + selfCare
    listCause.className = "px-6 py-2 border border-gray-200 w-full rounded m-1"

    possibleQue.appendChild(listCause)

    if (window.innerWidth < 650) {
        var a1 = document.getElementById('Que')
        var a2 = document.getElementById('Cau')
        var a3 = document.getElementById('btnCau')
        a1.style.display = "none"
        a2.style.display = "block"
        a3.style.display = "block"
    }
}


function funPossibleCauseNo(params) {
    var possibleQue = document.getElementById('possibleQue')

    possibleQue.innerHTML = " "


}
function backToQue() {
    if (window.innerWidth < 650) {
        var a1 = document.getElementById('Que')
        var a2 = document.getElementById('Cau')
        var a3 = document.getElementById('btnCau')
        a1.style.display = "block"
        a2.style.display = "none"
        a3.style.display = "none"
    }
}
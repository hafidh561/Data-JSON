//create JSON to object using AJAX
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let student = JSON.parse(this.responseText);
        console.log(student)
    }

}

xhr.open('GET', 'data.json', true);
xhr.send();

//create JSON to object using Jquerry
$.getJSON('data.json', function (data) {
    console.log(data);
})

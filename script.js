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

////create JSON to object using fetching with promise
fetch('data.json')
.then(dataJSON => {
    return dataJSON.json();
}).then(data => {
    console.log(data);
});

////create JSON to object using fetching with async await
const fetchData = async url => {
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data);
};
fetchData('data.json');

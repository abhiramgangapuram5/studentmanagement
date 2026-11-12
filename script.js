
let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    students.push({name, roll, course});

    document.getElementById("list").innerHTML +=
        "<li>" + name + " - " + roll + " - " + course + "</li>";
}

function searchStudent() {
    let roll = document.getElementById("roll").value;
    let s = students.find(x => x.roll === roll);

    alert(s ? s.name + " - " + s.course : "Not Found");
}

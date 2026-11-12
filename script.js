function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    students.push({name, roll});

    alert("Student Registered");
}
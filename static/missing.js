let msg_grade_weight = document.getElementById("missing-grade-weight");
let msg_wanted_grade_weight = document.getElementById("wanted-grade-weight");
let msg_wanted_grade = document.getElementById("wanted-grade");

let msg_all_grade_weights = document.getElementById("missing-grade-weights");
let msg_all_grades = document.getElementById("missing-grades");
let msg_result = document.getElementById("missing-result");

let msg_new_button = document.getElementById("missing-new");
msg_new_button.onclick = () => {
    var msg_new_grade_weight = document.createElement("input");
    msg_new_grade_weight.classList.add("form-control");
    msg_new_grade_weight.classList.add("mt-1");
    msg_new_grade_weight.classList.add("mb-2");
    msg_new_grade_weight.setAttribute("type", "number");
    msg_new_grade_weight.setAttribute("placeholder", "%");

    msg_all_grade_weights.appendChild(msg_new_grade_weight);

    var msg_new_grade = document.createElement("input");
    msg_new_grade.classList.add("form-control");
    msg_new_grade.classList.add("mt-1");
    msg_new_grade.classList.add("mb-2");
    msg_new_grade.setAttribute("type", "number");
    msg_new_grade.setAttribute("placeholder", "1-6");

    msg_all_grades.appendChild(msg_new_grade);
}

let msg__delete_button = document.getElementById("missing-delete");
msg__delete_button.onclick = () => {
    msg_all_grade_weights.removeChild(msg_all_grade_weights.lastChild)
    msg_all_grades.removeChild(msg_all_grades.lastChild);
}

let msg_reset_button = document.getElementById("missing-reset");
msg_reset_button.onclick = () => {
    while (msg_all_grade_weights.children.length > 1) {
        msg_all_grade_weights.removeChild(msg_all_grade_weights.lastChild);
        msg_all_grades.removeChild(msg_all_grades.lastChild);
    }
}

let msg_calculate_button = document.getElementById("missing-calculate");
msg_calculate_button.onclick = () => {
    var s = 0;
    for (var i = 0; i < msg_all_grade_weights.children.length; i++) {
        var weight = msg_all_grade_weights.children[i].value;
        var grade = msg_all_grades.children[i].value;
        console.log("Weight", i, weight);
        console.log("Grade", i, grade);
        s += (weight/100)*grade;
    }
    console.log("avg", s);
    console.log("Wanted grade", msg_wanted_grade.value);

    var x = msg_wanted_grade.value - s;
    console.log("dif", x);
    console.log
    x = x / (msg_grade_weight.value / 100);

    console.log(x);
    msg_result.value = parseFloat(x.toString()).toFixed(1);
}
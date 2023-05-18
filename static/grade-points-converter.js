let grade_convert_result = document.getElementById("grade-convert-result");
let grade_convert = document.getElementById("grade-convert");
grade_convert.oninput = () => {
    if (grade_convert.value == null) {
        grade_convert_result.value = null;
    }
    grade_convert_result.value = parseFloat((17 - (3 * grade_convert.value)).toString()).toFixed(0);;
}


let points_convert = document.getElementById("points-convert");
let points_convert_result = document.getElementById("points-convert-result");
points_convert.oninput = () => {
    if (points_convert.value == null) {
        points_convert_result.value = null;
    }
    points_convert_result.value = parseFloat(((17 - points_convert.value) / 3).toString()).toFixed(2);
}



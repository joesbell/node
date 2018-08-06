const teacher=require("./teacher")
const student = require("./student")

let add = function (teachername, students) {
    teacher.add(teachername)
    for (const iterator of students) {
        student.add(iterator)
    }
}
exports.add=add
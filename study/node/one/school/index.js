const klass=require("./class")

let add=function (classes) {
    for (const item of classes) {
        let teacherName = item.teacherName
        let students = item.students
        klass.add(teacherName, students)
    }
}
exports.add=add;
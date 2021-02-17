
function getStudents(classroom){
    if(classroom.hasTeachingAssistant){
        const {people:[,,...students]} = classroom
        return students;
    }
    else{
        const {people:[,...students]} = classroom
        return students;
    }
}

const classroom = {
    hasTeachingAssistant:true,
    people: ['teacher','teaching assistant','john1','john2','john2','john2']
} // first is teacher, second is TA (if hasTeachingAssistant === true), rest are students


const classroom1 = {
    hasTeachingAssistant:false,
    people: ['teacher','teaching assistant','john1','john2','john2','john2']
} // first is teacher, second is TA (if hasTeachingAssistant === true), rest are students

console.log(getStudents(classroom));
console.log(getStudents(classroom1));
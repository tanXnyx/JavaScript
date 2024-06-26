const ClassInfo = [
    {
        name: "man",
        grade: "A",
        age: 5,
        city: "KOL",
    },
    {
        name: "Subha",
        grade: "A+",
        age: 20,
        city: "BBSR",
    },
    {
        name: "Ravi",
        grade: "C",
        age: 30,
        city: "Mumbai",
    }
]

console.log(ClassInfo);
console.log(ClassInfo[0]);
console.log(ClassInfo[0].name);
console.log(ClassInfo[1].grade);
console.log(ClassInfo[2].age);

ClassInfo[2].city = "Chennai";
console.log(ClassInfo[2].city);

ClassInfo[1].gender = "Male";
console.log(ClassInfo);
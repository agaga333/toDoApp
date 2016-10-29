/**
 * Created by Agnieszka on 2016-10-28.
 */
var offices = [
    { id: "GD", name: "Gdańsk", headquarter: true },
    { id: "GL", name: "Gliwice" },
    { id: "KO", name: "Koszalin" }
];

var workers = [
    { id: 1,  name: "Bartek",     type: "P", office: "GD", salary: 300 },
    { id: 2,  name: "Wojtek",     type: "P", office: "GD", salary: 210 },
    { id: 3,  name: "Piotr",      type: "M", office: "GL", salary: 250 },
    { id: 4,  name: "Damian",     type: "P", office: "KO", salary: 290 },
    { id: 5,  name: "Jan",        type: "P", office: "GL", salary: 210 },
    { id: 6,  name: "Mateusz",    type: "P", office: "GD", salary: 290 },
    { id: 7,  name: "Weronika",   type: "M", office: "KO", salary: 240 },
    { id: 8,  name: "Gabriela",   type: "M", office: "GD", salary: 290 },
    { id: 9,  name: "Alina",      type: "M", office: "KO", salary: 290 },
    { id: 10, name: "Aleksander", type: "P", office: "GL", salary: 260 },
    { id: 11, name: "Tomek",      type: "P", office: "GD", salary: 200 },
    { id: 12, name: "Krzysztof",  type: "M", office: "KO", salary: 290 },
    { id: 13, name: "Marcin",     type: "P", office: "GD", salary: 280 },
    { id: 14, name: "Agata",      type: "P", office: "GD", salary: 230 },
    { id: 15, name: "Magda",      type: "P", office: "KO", salary: 220 }
];


function addWorkerstoOffices(office) {
    return {
        id: office.id,
        name: office.name,
        headquarter: office.headquarter || false,
        workers: workers.filter( function findWorkersOfOffice(worker) {
            return worker.office === office.id;
        })
    }
}

offices = offices.map(addWorkerstoOffices);
console.log(offices);

var company = {};

for (var office of offices) {
    company[office.name] = office;
}

console.log(company);

function calculateAverageWorkersSalary(office) {
        var salarySum = 0;
        for (var i = 0, len = office.workers.length; i < len; i++) {
            salarySum += office.workers[i].salary;
        }
        return salarySum / len;
}

console.log(calculateAverageWorkersSalary(company["Gdańsk"]));
console.log(calculateAverageWorkersSalary(company["Gliwice"]));
console.log(calculateAverageWorkersSalary(company["Koszalin"]));


function calculateAverageGlobalSalary() {
    var salarySum = 0;
    var workersLength = 0;
    for (var office in company) {
        workersLength += company[office].workers.length;
        for (var i = 0, len = company[office].workers.length; i < len; i++) {
            salarySum += company[office].workers[i].salary;
        }
    }
    return salarySum/workersLength;
}

console.log(calculateAverageGlobalSalary());

//Napisz funkcję, która zwraca imię pracownika, który najwięcej zarabia dla wybranego przez nas biura wskazówka: array.sort()//


function compareSalary(a, b) {
    return b.salary - a.salary;
}

function showHighestSalary(office) {
    // for (var i = 0, len = office.workers.length; i < len; i++) {
    var sortedWorkers = office.workers.sort(compareSalary);
    return "The best paid worker is " + sortedWorkers[0].name + " and his salary is " + sortedWorkers[0].salary;
}

console.log(showHighestSalary(company["Gdańsk"]));
console.log(showHighestSalary(company["Gliwice"]));
console.log(showHighestSalary(company["Koszalin"]));
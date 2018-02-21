var app = angular.module('documentazione', []);
app.controller('titleController', ['$scope', function ($scope) {
        $scope.titolo = [
            {
                name: 'TypeScript',
                description: "TypeScript prevede un sistema di annotazione dei Tipi di dati, che possono essere controllati durante la FASE DI COMPILAZIONE.",
                image: 'content/ts.png',
                comments: "commenti Typescript"
            },
            {
                name: 'AngularJs',
                description: "AngularJS e' un framework nato per semplificare lo sviluppo e il test di applicazioni a singola pagina.",
                image: 'content/ajs.png',
                comments: "commenti Angular"
            },
            {
                name: 'React',
                description: "React e' una libreria Javascript fatta per le interfacce utente. Abilita lo sviluppatore Web a creare grandi ApplicazioniWeb che usano dati nel tempo, senza dover ricaricare la pagina.",
                image: 'content/react.png',
                comments: "commenti React"
            }
        ];
    }]);
app.controller("pulsantiController", ['$scope', function ($scope) {
        this.tab = 0;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
    }]);
app.directive("directiveTabs", function () {
    return {
        restrict: 'E',
        templateUrl: './directive-tabs.html'
    };
});
app.directive("stampaImmagini", function () {
    return {
        restrict: 'E',
        templateUrl: './stampa-immagini.html'
    };
});
/*
    app.component('myComp', {
        template: "<div>Ciao da i Components</div>"
    });
*/
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Gian", lastName: "Sullcapuma" };
document.body.innerHTML = greeter(user);

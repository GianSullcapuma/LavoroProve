let app = angular.module('documentazione', []);
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
    }
}]);


app.component("directiveTabs",{
    templateUrl: './directive-tabs.html'
});
app.component("stampaImmagini",{
    templateUrl: './stampa-immagini.html'
});


app.component('myComp', {
    templateUrl: "./prova-component.html"
});

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName + " " + middleInitial + " " + lastName;
    }
}


interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Gian", lastName: "Sullcapuma" };

document.body.innerHTML = greeter(user);
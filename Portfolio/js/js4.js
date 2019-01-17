var students = [
    {
        "first_name": "Jan",
        "last_name": "Kowalski",
        "birth_date": "29-08-1990",
        "personal_id_num": "90290800001",
        "mother_name": "Maria",
        "father_name": "Józef",
        "courses": {
            "Jezyk_Python": 4,
            "Techniki_WWW": 3,
            "Bazy_Danych": 5,
            "Interfejsy_Graficzne": 4,
            "Filozofia": 3
        }
    },
    {
        "first_name": "Jerzy",
        "last_name": "Kowalewski",
        "birth_date": "28-11-1992",
        "personal_id_num": "92281100002",
        "mother_name": "Antonina",
        "father_name": "Klemens",
        "courses": {
            "Jezyk_Python": 4,
            "Techniki_WWW": 3,
            "Bazy_Danych": 4,
            "Interfejsy_Graficzne": 5,
            "Filozofia": 5
        }
    },
    {
        "first_name": "Józef",
        "last_name": "Kowal",
        "birth_date": "14-09-1995",
        "personal_id_num": "95140900003",
        "mother_name": "Karina",
        "father_name": "Tadeusz",
        "courses": {
            "Jezyk_Python": 4.5,
            "Techniki_WWW": 3.5,
            "Bazy_Danych": 3,
            "Interfejsy_Graficzne": 3,
            "Filozofia": 3
        }
    },
    {
        "first_name": "Ambroży",
        "last_name": "Łódka",
        "birth_date": "14-09-1996",
        "personal_id_num": "96140900004",
        "mother_name": "Marianna",
        "father_name": "Ireneusz",
        "courses": {
            "Jezyk_Python": 3,
            "Techniki_WWW": 3.5,
            "Bazy_Danych": 3,
            "Interfejsy_Graficzne": 3,
            "Filozofia": 3
        }
    },
    {
        "first_name": "Ewa",
        "last_name": "Raj",
        "birth_date": "01-01-2001",
        "personal_id_num": "01010100008",
        "mother_name": "Michalina",
        "father_name": "Adam",
        "courses": {
            "Jezyk_Python": 4,
            "Techniki_WWW": 4.5,
            "Bazy_Danych": 4,
            "Interfejsy_Graficzne": 5,
            "Filozofia": 5
        }
    },
    {
        "first_name": "Jan",
        "last_name": "Kozłowski",
        "birth_date": "1-02-1999",
        "personal_id_num": "99010200004",
        "mother_name": "Eleonora",
        "father_name": "Michał",
        "courses": {
            "Jezyk_Python": 4.5,
            "Techniki_WWW": 4.5,
            "Bazy_Danych": 4,
            "Interfejsy_Graficzne": 4,
            "Filozofia": 4
        }
    }];

function srednia_ocen(obj){
    var suma = obj.courses.Filozofia + obj.courses.Bazy_Danych + obj.courses.Interfejsy_Graficzne + obj.courses.Techniki_WWW + obj.courses.Jezyk_Python;
    return suma/5;
}

function wyswietl() {
    var wynik_head="<tr><th>Imię</th><th>Nazwisko</th><th>Średnia ocen</th></tr>";
    var wynik = '';
    for (let i = 0; i < students.length; i++)
        wynik += "<tr><td>" + students[i].first_name + "</td><td>" + students[i].last_name + "</td><td>" + srednia_ocen(students[i]) + "</td></tr>";
    $("#tabela thead").html(wynik_head)
    $("#tabela tbody").html(wynik);
    $("#tabela").tablesorter();
    $("#tabela").trigger("updateAll",[ true,function(){} ]);
    
}

function wyswietl_dane() {
    var wynik_head="<tr><th>Imię</th><th>Nazwisko</th><th>Pesel</th><th data-sorter=false>Data urodzenia</th><th>Imię matki</th><th>Imię ojca</th></tr>";
    var wynik='';
    for (let i = 0; i < students.length; i++)
        wynik += "<tr><td>" + students[i].first_name + "</td><td>" + students[i].last_name + "</td><td>" + students[i].personal_id_num + 
        "</td><td>" + students[i].birth_date + "</td><td>" + students[i].mother_name + "</td><td>" + students[i].father_name + "</td></tr>";
    $("#tabela thead").html(wynik_head);
    $("#tabela tbody").html(wynik);
    $("#tabela").tablesorter();
    $("#tabela").trigger("updateAll",[ true,function(){} ]);
}

function wyswietl_oceny() {
    var wynik_head="<tr><th>Imię</th><th>Nazwisko</th><th>Język Python</th><th>Techniki WWW</th><th>Bazy Danych</th><th>Interfejsy Graficzne</th><th>Filozofia</th><th>Średnia ocen</th></tr>";
    var wynik='';
    for (let i = 0; i < students.length; i++)
        wynik += "<tr><td>" + students[i].first_name + "</td><td>" + students[i].last_name + "</td><td>" + students[i].courses.Jezyk_Python + 
        "</td><td>" + students[i].courses.Techniki_WWW + "</td><td>" + students[i].courses.Bazy_Danych + "</td><td>" + students[i].courses.Interfejsy_Graficzne + "</td><td>" 
        + students[i].courses.Filozofia + "</td><td>" + srednia_ocen(students[i]) + "</td></tr>";
    $("#tabela thead").html(wynik_head);
    $("#tabela tbody").html(wynik);
    $("#tabela").tablesorter();
    $("#tabela").trigger("updateAll",[ true,function(){} ]);
}

const input_name = document.querySelector('#name');
const input_surname = document.querySelector('#surname');
const input_birth = document.querySelector('#birth-date');
const input_id = document.querySelector('#id-num');
const input_mother = document.querySelector('#mother-name');
const input_father = document.querySelector('#father-name');

$("#button-form").on("click", function() { 
    let student = {
      "first_name": $("#name").val(),
      "last_name": $("#surname").val(),
      "birth_date": $("#birth-date").val(),
      "personal_id_num": $("#id-num").val(),
      "mother_name": $("#mother-name").val(),
      "father_name": $("#father-name").val(),
      courses : {"Jezyk_Python" : parseFloat($("#python option:selected").val()),
      "Techniki_WWW" : parseFloat($("#www option:selected").val()),
      "Bazy_Danych" : parseFloat($("#bazy option:selected").val()),
      "Interfejsy_Graficzne" : parseFloat($("#interfejsy option:selected").val()),
      "Filozofia" : parseFloat($("#filozofia option:selected").val())}
    };

    if(input_name.classList.contains("error-field") ||
    input_surname.classList.contains("error-field") ||
    input_id.classList.contains("error-field") ||
    input_birth.classList.contains("error-field") ||
    input_mother.classList.contains("error-field") ||
    input_father.classList.contains("error-field")){
        alert("Błąd dodania, niewłaściwe uzupełnienie danych!");
    }
    else if(!input_name.value.length || !input_surname.value.length ||
        !input_id.value.length || !input_birth.value.length){
        alert("Błąd dodania, brak niezbędnych danych!");
    }
    else{
        students.push(student);
        alert("Dodano studenta");
        document.getElementById("form").reset();
    }
});

function formularz(){
    $("#form").addClass("form-disp");
}

function regEx() {
    const val = this.value;
    const className = 'error-field';
    const reg = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźżŻ]{3,}$/g;

    if (!reg.test(val)) {
        this.classList.add(className);
    } else {
        this.classList.remove(className);
    }
}

function regEx2() {
    const val = this.value;
    const className = 'error-field';
    const reg2 = /^[1-9][0-9]{10}$/g;

    if (!reg2.test(val)) {
        this.classList.add(className);
    } else {
        this.classList.remove(className);
    }
}

function regEx3() {
    const val = this.value;
    const className = 'error-field';
    const reg2 = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/g;

    if (!reg2.test(val)) {
        this.classList.add(className);
    } else {
        this.classList.remove(className);
    }
}

input_name.addEventListener('change', regEx);
input_surname.addEventListener('change', regEx);
input_mother.addEventListener('change', regEx);
input_father.addEventListener('change', regEx);
input_id.addEventListener('change', regEx2);
input_birth.addEventListener('change', regEx3);

$("#select_table").change(function() {
$("#form").removeClass("form-disp");
switch($("#select_table option:selected").text()) {
    case "Tabela podstawowa":
        wyswietl();
        break;
    case "Tabela z ocenami":
        wyswietl_oceny();
        break;
    case "Tabela z danymi":
        wyswietl_dane();
        break;
    case "Dodaj studenta":
        $("#tabela thead").html("");
        $("#tabela tbody").html("");
        $("#tabela").tablesorter();
        formularz();
        break;
    default:
        $("#tabela thead").html("");
        $("#tabela tbody").html("");
        $("#tabela").tablesorter();
        break;
}});
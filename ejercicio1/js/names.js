var nombres = {
    "Personas": [
    {"imagen" : "img/robles.jpeg",
    "nombre" : "Juan",
    "apellido" : "Robles",
    "edad" : 29,
    "profesion" : "Licenciado"},
    {"imagen" : "img/rosales.jpeg",
    "nombre" : "Lilian",
    "apellido" : "Rosales",
    "edad" : 27,
    "profesion" : "Bachiller"},
    {"imagen" : "img/gonzalez.jpeg",
    "nombre" : "Gustavo",
    "apellido" : "Gonzalez",
    "edad" : 28,
    "profesion" : "Arquitecto"},
    {"imagen" : "img/deras.jpeg",
    "nombre" : "Génesis",
    "apellido" : "Deras",
    "edad" : 31,
    "profesion" : "Mercadóloga"},
    {"imagen" : "img/benitez.jpeg",
    "nombre" : "Reina",
    "apellido" : "Benitez",
    "edad" : 25,
    "profesion" : "Secretaria"},
    {"imagen" : "img/perez.jpeg",
    "nombre" : "Hugo",
    "apellido" : "Pérez",
    "edad" : 34,
    "profesion" : "Diseñador"}
    ]
    };
    //Obteniendo el elemento contenedor donde se cargarán
    //todos los datos del objeto JSON
    var div = document.getElementById("info");
    div.innerHTML = volcarDatos(nombres.Personas);
    function volcarDatos(datos){
    var total = datos.length;
    data = "<ul class=\"grid\">\n";
    for(var i=0; i<total; i++){
    data += "<li class=\"box\">\n";
    data += "<div class=\"box-shadow\"></div>\n";
    data += "<div class=\"box-gradient\">\n";
    data += "<img src=\"" + datos[i].imagen + "\" alt=\"Avatar de " +
    datos[i].nombre + " " + datos[i].apellido + "\" class=\"avatar\" />\n";
    data += "<h4>\nNombre: " + datos[i].nombre + " " + datos[i].apellido +  "\n</h4>\n";
    data += "<p>\nEdad: " + datos[i].edad + "\n<br />\n";
    data += "Profesión: " + datos[i].profesion + "\n</p>\n";
    data += "</div>\n";
    data += "</li>\n";
    }
    data += "</ul>\n";
    return data;
    }
    
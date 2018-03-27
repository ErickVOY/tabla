// Initialize Firebase
var config = {
  apiKey: "AIzaSyAi7xq0vaZq9XU0FyEipoXXxv6P0KoiuJI",
  authDomain: "tablaperiodica-8af01.firebaseapp.com",
  databaseURL: "https://tablaperiodica-8af01.firebaseio.com",
  projectId: "tablaperiodica-8af01",
  storageBucket: "tablaperiodica-8af01.appspot.com",
  messagingSenderId: "376808640828"
};
firebase.initializeApp(config);

var database = firebase.database();

var db = firebase.firestore();

function regElements(
	numeroAtomico, 
	masaAtomica, 
	energiaDeIonizacion, 
	simboloQuimico,
	nombre,
	grupo,
	electronegatividad,
	estadosDeOxidacion,
	tipoDeElemento
) {
  firebase.database().ref('elementos/' + numeroAtomico).set({
    numeroAtomico: numeroAtomico,
    masaAtomica: masaAtomica,
    energiaDeIonizacion: energiaDeIonizacion,
    simboloQuimico: simboloQuimico,
    nombre: nombre,
    grupo: grupo,
    electronegatividad: electronegatividad,
    estadosDeOxidacion: estadosDeOxidacion,
    tipoDeElemento:tipoDeElemento
  });
}

var IA = ['1','3','11','19','37','55','87'];

for (var i = 1; i <= 118; i++) {
  var starCountRef = firebase.database().ref('elementos/' + i);
  starCountRef.on('value', function(snapshot) {
    createElement(
      snapshot.val().grupo,
      snapshot.val().tipoDeElemento,
      snapshot.val().simboloQuimico,
      snapshot.val().nombre,
      snapshot.val().masaAtomica,
      snapshot.val().numeroAtomico,
      snapshot.val().electronegatividad
    );
  });
}

function createElement (grupo, tipoDeElemento, simboloQuimico, nombre, masaAtomica, numeroAtomico, electronegatividad) {
    var element;
    switch (tipoDeElemento) {
      case 'No Metales': 
        element = 'nometales';
        break;
      case 'Metales Alcalinos': 
        element = 'metalesalcalinos';
        break;
      case 'Alcalinoterreos': 
        element = 'alcalinoterreos';
        break;
      case 'Otros Metales': 
        element = 'alcalinoterreos';
        break;
      case 'Metales De Transición': 
        element = 'metalesdetrancision';
        break;
      case 'Metales De Transicion': 
        element = 'metalesdetrancision';
        break;
      case 'Lantánidos': 
        element = 'lantanidos';
        break;
      case 'Actínidos': 
        element = 'actinidos';
        break;
      case 'Metaloides': 
        element = 'metaloides';
        break;
      case 'Halógenos': 
        element = 'halogenos';
        break;
      case 'Gases Nobles': 
        element = 'gasesnobles';
        break;
    }
    $( "#" + grupo ).append(
      '<div class="element ' + element + '">' + 
        '<span class="simboloQuimico">' + simboloQuimico + '</span>' +
        '<span class="nombre">' + nombre + '</span>' +
        '<span class="masaAtomica">' + masaAtomica + '</span>' +
        '<span class="numeroAtomico">' + numeroAtomico + '</span>' +
        '<span class="electronegatividad">' + electronegatividad + '</span>' +
      '</div>'
    );
}

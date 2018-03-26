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

function writeUserData(
	numeroAtomico, 
	masaAtomica, 
	energiaDeIonizacion, 
	simboloQuimico,
	nombre,
	configuracionElectronica,
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
    configuracionElectronica: configuracionElectronica,
    electronegatividad: electronegatividad,
    estadosDeOxidacion: estadosDeOxidacion,
    tipoDeElemento:tipoDeElemento
  });
}
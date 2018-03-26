$( function () {
	$('#regElement').on('click', function () {
		var numeroAtomico = $('input[name="numeroAtomico"]').val();
		var masaAtomica = $('input[name="masaAtomica"]').val();
		var energiaDeIonizacion = $('input[name="energiaDeIonizacion"]').val();
		var SimboloQuimico = $('input[name="SimboloQuimico"]').val();
		var nombre = $('input[name="nombre"]').val();
		var configuracionElectronica = $('input[name="configuracionElectronica"]').val();
		var electronegatividad = $('input[name="electronegatividad"]').val();
		var estadosDeOxidacion = $('input[name="estadosDeOxidacion"]').val();
		var TipoDeElemento = $('input[name="TipoDeElemento"]').val();
		
		regElements(
			numeroAtomico, 
			masaAtomica, 
			energiaDeIonizacion, 
			simboloQuimico,
			nombre,
			configuracionElectronica,
			electronegatividad,
			estadosDeOxidacion,
			tipoDeElemento
		);
	});
});
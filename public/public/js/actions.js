$( function () {

	$('#openRegElements').on('click', function () {
		if ('Registrar Elementos' == $(this).text()) {
			$('#form').css('display','block');
			$(this).text('Cerrar');
			$('#table').css('display','none');
		} else {
			$('#form').css('display','none');
			$(this).text('Registrar Elementos');
			$('#table').css('display','block');
		}
	});

	$('#clearElement').on('click', function () {
		$('input[name="numeroAtomico"]').val('');
		$('input[name="masaAtomica"]').val('');
		$('input[name="energiaDeIonizacion"]').val('');
		$('input[name="SimboloQuimico"]').val('');
		$('input[name="nombre"]').val('');
		$('input[name="grupo"]').val('');
		$('input[name="electronegatividad"]').val('');
		$('input[name="estadosDeOxidacion"]').val('');
		$('input[name="TipoDeElemento"]').val('');
	});

	$('#regElement').on('click', function () {
		var numeroAtomico = $('input[name="numeroAtomico"]').val();
		var masaAtomica = $('input[name="masaAtomica"]').val();
		var energiaDeIonizacion = $('input[name="energiaDeIonizacion"]').val();
		var simboloQuimico = $('input[name="SimboloQuimico"]').val();
		var nombre = $('input[name="nombre"]').val();
		var grupo = $('input[name="grupo"]').val();
		var electronegatividad = $('input[name="electronegatividad"]').val();
		var estadosDeOxidacion = $('input[name="estadosDeOxidacion"]').val();
		var tipoDeElemento = $('input[name="TipoDeElemento"]').val();

		if (
			numeroAtomico == "" ||
			masaAtomica == "" ||
			energiaDeIonizacion == "" ||
			simboloQuimico == "" ||
			nombre == "" ||
			grupo == "" ||
			electronegatividad == "" ||
			estadosDeOxidacion == "" ||
			tipoDeElemento == ""
		) {
			alert("Debes llenar todos los campos");
		} else {
			regElements(
				numeroAtomico, 
				masaAtomica, 
				energiaDeIonizacion, 
				simboloQuimico,
				nombre,
				grupo,
				electronegatividad,
				estadosDeOxidacion,
				tipoDeElemento
			);

			alert("Registrado");
		}
	});
});
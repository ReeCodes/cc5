onEvent('recipes', event => {
	
	let canning = (inputs, result, id) => {
	  event.recipes.ftbic.canning({
		inputItems: inputs.map(r => Ingredient.of(r).toJson()),
		outputItems: [ Item.of(result).toResultJson() ]
	  }).id('ftbic:canning/'+id)
	}

})
onEvent('recipes', event => {

	let astralInfuse = (fluid, inputItem, outputItem, consumeChance, duration, consumeFluidsB, chaliceInputB, copyNBTB, id) => {
		event.recipes.astralsorcery.infuser({
			fluidInput: fluid,
			input: Ingredient.of(inputItem).toJson(),
			output: Ingredient.of(outputItem).toResultJson(),
			consumptionChance: consumeChance,
			duration: duration,
			consumeMultipleFluids: consumeFluidsB,
			acceptChaliceInput: chaliceInputB,
			copyNBTToOutputs: copyNBTB
		}).id('astralsorcery:infuser/' + id)
	}
	
	astralInfuse('astralsorcery:liquid_starlight', '#forge:storage_blocks/moonstone', 'waystones:warp_stone', 0.2, 400, true, true, false, 'warp_stone')
});
onEvent('recipes', event => {

	let shaped_fluid = (patternInput, ingredients, result, id) => {
		var key = {};

        for (let keyName in ingredients) {
            key[keyName] = {
                item: ingredients[keyName].item || undefined,
                tag: ingredients[keyName].tag || undefined,
                amount: ingredients[keyName].amount || undefined,
                type: ingredients[keyName].type || undefined
            };
        }
		
		event.recipes.immersiveengineering.shaped_fluid({
			pattern: patternInput,
			key: key,
			result: Ingredient.of(result).toResultJson()
		}).id(id)
	}

	shaped_fluid(
		[
			'SCS',
			'GBG',
			'SCS'
		], {
			C: {
				tag: 'forge:gems/bitumen'
			},
			S: {
				tag: 'forge:sand'
			},
			G: {
				tag: 'forge:gravel'
			},
			B: {
				tag: 'minecraft:water',
				amount: 1000,
				type: 'immersiveengineering:fluid'
			}
		}, '8x immersivepetroleum:asphalt',
		'immersivepetroleum:asphalt'
	)
	
	shaped_fluid(
		[
			'SCS',
			'GBG',
			'SCS'
		], {
			C: {
				tag: 'forge:gems/bitumen'
			},
			S: {
				item: 'immersiveengineering:slag'
			},
			G: {
				tag: 'forge:gravel'
			},
			B: {
				tag: 'minecraft:water',
				amount: 1000,
				type: 'immersiveengineering:fluid'
			}
		}, '12x immersivepetroleum:asphalt',
		'immersivepetroleum:asphalt2'
	)
})
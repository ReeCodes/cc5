onEvent('recipes', event => {

	let anvil_smashing = (input, outputs, weights, rolls, empty, dmg, id) => {

		event.recipes.interactio.item_anvil_smashing({
			inputs: input.map(i => Ingredient.of(i).toJson()),
			output: {
				entries: outputs.map((o, index) => ({
					result: Ingredient.of(o),
					weight: weights[index] || 1
				})),
				rolls: rolls,
				empty_weight: empty
			},
			damage: dmg
		}).id('interactio:item_anvil_smashing/' + id)
	}

	anvil_smashing(['1x bountifulbaubles:ender_dragon_scale'],
		['1x bountifulbaubles:broken_black_dragon_scale'],
		[],
		1, 0, 1,
		'broken_black_dragon_scale')
		
	//I_PETS
	anvil_smashing(['1x #forge:gems/diamond'],
		['9x inventorypets:nugget_diamond'],
		[],
		1, 0, 1,
		'nugget_diamond')
		
	anvil_smashing(['1x #forge:gems/emerald'],
		['9x inventorypets:nugget_emerald'],
		[],
		1, 0, 1,
		'nugget_emerald')
		
	anvil_smashing(['1x #minecraft:coals/coal'],
		['9x inventorypets:nugget_coal'],
		[],
		1, 0, 1,
		'nugget_emerald')
		
	anvil_smashing(['1x minecraft:ender_pearl'],
		['9x inventorypets:nugget_ender'],
		[],
		1, 0, 1,
		'nugget_ender')
		
		anvil_smashing(['1x #forge:gems/lapis'],
		['9x inventorypets:nugget_lapis'],
		[],
		1, 0, 1,
		'nugget_lapis')
		
		anvil_smashing(['1x minecraft:obsidian'],
		['9x inventorypets:nugget_obsidian'],
		[],
		1, 0, 1,
		'nugget_obsidian')
})
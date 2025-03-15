onEvent('recipes', event => {

	let add_mineral_vein = (oreArray, dimArray, emptyWeight, failChance, sampleBlock, id) => {
		event.recipes.immersiveengineering.mineral_mix({
			ores: oreArray.map(o => {
				return {
					chance: o.chance,
					output: Ingredient.of(o.item).toJson()
				}
			}),
			dimensions: dimArray,
			weight: emptyWeight,
			fail_chance: failChance,
			sample_background: sampleBlock
		}).id('immersiveengineering:mineral/' + id)
	}

	add_mineral_vein([{
			chance: 0.1,
			item: '#forge:ores/netherite_scrap'
		},
		{
			chance: 0.2,
			item: 'emendatusenigmatica:diamond_netherrack_ore'
		},
		{
			chance: 0.2,
			item: 'emendatusenigmatica:emerald_netherrack_ore'
		},
		{
			chance: 0.5,
			item: 'minecraft:blackstone'
		}
	], ['minecraft:the_nether'], 8, 0.7, 'minecraft:netherrack', 'ancient_debris')
});
onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anyseeds', table => {
		table.addPool(pool => {
			pool.rolls = 2;
			Ingredient.of(['#forge:seeds']).filter(Ingredient.of([
				'ars_nouveau:mana_bloom_crop',
				'undergarden:gloomgourd_seeds',
				'forbidden_arcanus:golden_orchid_seeds',
				'@betterendforge',
				'@mowziesmobs',
				'@atum',
				'@blue_skies'
			]).not()).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 2.0,
							"max": 4.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
		})
	})
})
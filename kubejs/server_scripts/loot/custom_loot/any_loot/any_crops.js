onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anycrops', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			Ingredient.of(['#forge:crops', '#forge:fruits']).filter(Ingredient.of([
				'minecraft:chorus_fruit',
				'minecraft:melon',
				'@blue_skies',
				'@atum',
				'@betterendforge',
				'@tropicraft'
			]).not()).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 1.0,
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
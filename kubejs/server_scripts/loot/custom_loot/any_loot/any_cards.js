onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anycards', table => {
		table.addPool(pool => {
			pool.rolls = 3
			Ingredient.of(['#buddycards:packs']).filter(Ingredient.of(['buddycards:pack.3']).not()).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 1.0,
							"max": 2.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
		})
		table.addPool(pool => {
			pool.rolls = 2
			pool.addItem('buddycards:grading_sleeve', 1, [1, 4])
			pool.addEntry({
				"type": "empty",
				"weight": 4
			})
		})
	})
})
onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anyarrows', table => {
		table.addPool(pool => {
			pool.rolls = [1, 3];
			pool.addItem('supplementaries:rope_arrow', 1)
			Ingredient.of([
				'#minecraft:arrows'
			]).filter(Ingredient.of([
				'/supplementaries:rope_arrow/',
				'@rats',
				'@iceandfire',
				'/minecraft:tipped_arrow/',
				'/xreliquary:tipped_arrow/',
				'ftbic:nuke_arrow'
			]).not()).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"weight": 7,
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 4.0,
							"max": 16.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
		})
	})
})
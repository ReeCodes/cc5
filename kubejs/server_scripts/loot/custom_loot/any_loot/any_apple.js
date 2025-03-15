onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anyapple', table => {
		table.addPool(pool => {
			pool.rolls = 3;
			Ingredient.of([
			'minecraft:enchanted_golden_apple', 
			'cyclic:apple_lofty_stature', 
			'cyclic:apple_emerald', 
			'cyclic:apple_diamond', 
			'bhc:relic_apple'
			]).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"weight": 2,
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 1.0,
							"max": 1.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
			Ingredient.of([
			'cyclic:apple_lapis', 
			'cyclic:apple_prismarine', 
			'cyclic:apple_bone', 
			'cyclic:apple_chorus', 
			'create:honeyed_apple', 
			'cyclic:apple_iron', 
			'cyclic:apple_chocolate', 
			'minecraft:golden_apple'
			]).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"weight": 10,
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 1.0,
							"max": 1.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
		})
	})
})
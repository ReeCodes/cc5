onEvent('chest.loot_tables', event => {

	event.addChest('rare-ice:rare_ice', table => {
		table.addPool(pool => {
			pool.rolls = [1, 2];
			Ingredient.of([
			'aquaculture:message_in_a_bottle', 
			'aquaculture:tin_can', 
			'aquaculture:driftwood', 
			'aquaculture:box', 
			'rats:plastic_waste'
			]).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"name": stack.id,
					"weight": 9,
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 1.0,
							"max": 1.0,
							"type": "minecraft:uniform"
						}
					}]
				})
			})
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/anyfishes",
				"weight": 14,
				"functions": [{
					"function": "minecraft:set_count",
					"count": {
						"min": 1.0,
						"max": 3.0,
						"type": "minecraft:uniform"
					}
				}]
			})
		})
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('aquaculture:neptunium_nugget', 1, [1, 3])
			pool.addItem('xreliquary:squid_beak', 5, [1, 2])
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/more_metals",
				"weight": 13,
				"functions": [{
					"function": "minecraft:set_count",
					"count": {
						"min": 1.0,
						"max": 3.0,
						"type": "minecraft:uniform"
					}
				}]
			})
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/more_gems",
				"weight": 11,
				"functions": [{
					"function": "minecraft:set_count",
					"count": {
						"min": 1.0,
						"max": 6.0,
						"type": "minecraft:uniform"
					}
				}]
			})
		})
	})
})
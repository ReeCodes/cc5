onEvent('generic.loot_tables', event => {
	event.addGeneric('valhelsia_structures:treasure/jar_treasure', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('minecraft:golden_apple', 13)
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/more_gems",
				"weight": 7,
				"functions": [{
					"function": "minecraft:set_count",
					"count": {
						"min": 1.0,
						"max": 2.0,
						"type": "minecraft:uniform"
					}
				}]
			})
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/more_metals",
				"weight": 18,
				"functions": [{
					"function": "minecraft:set_count",
					"count": {
						"min": 4.0,
						"max": 12.0,
						"type": "minecraft:uniform"
					}
				}]
			})
			pool.addEntry({
			  "type": "minecraft:item",
			  "weight": 12,
			  "functions": [
				{
				  "function": "minecraft:enchant_randomly"
				}
			  ],
			  "name": "minecraft:book"
			})
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/anycards",
				"weight": 12,
				"functions": [{
					"function": "minecraft:set_count",
					"count": {
						"min": 4.0,
						"max": 6.0,
						"type": "minecraft:uniform"
					}
				}]
			})
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/anyarrows",
				"weight": 20,
				"functions": [{
					"function": "minecraft:set_count",
					"count": {
						"min": 1.0,
						"max": 12.0,
						"type": "minecraft:uniform"
					}
				}]
			})
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/anyapple",
				"weight": 14,
				"functions": [{
					"function": "minecraft:set_count",
					"count": {
						"min": 1.0,
						"max": 12.0,
						"type": "minecraft:uniform"
					}
				}]
			})
		})
	})
})
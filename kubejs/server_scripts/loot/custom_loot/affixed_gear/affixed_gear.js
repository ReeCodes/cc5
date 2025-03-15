onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/affixgear1', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "apotheosis:affix_entry",
				"weight": 2000,
				"quality": 1,
				"functions": [{
					"function": "minecraft:enchant_with_levels",
					"levels": {
						"min": 5,
						"max": 20
					}
				}]
			})
		})
	})
	event.addChest('kubejs:loot_randomizer/affixgear2', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "apotheosis:affix_entry",
				"weight": 500,
				"quality": 25,
				"functions": [{
					"function": "minecraft:enchant_with_levels",
					"levels": {
						"min": 20,
						"max": 50
					}
				}]
			})
		})
	})
	event.addChest('kubejs:loot_randomizer/affixgear3', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "apotheosis:affix_entry",
				"weight": 1,
				"quality": 100,
				"functions": [{
					"function": "minecraft:enchant_with_levels",
					"levels": {
						"min": 40,
						"max": 80
					}
				}]
			})
		})
	})
})
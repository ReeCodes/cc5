onEvent('entity.loot_tables', event => {
	event.modifyEntity('specialmobs:brutezombie', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
			  "type": "minecraft:item",
			  "functions": [
				{
				  "function": "minecraft:set_count",
				  "count": {
					"min": 0.0,
					"max": 1.0,
					"type": "minecraft:uniform"
				  }
				},
				{
				  "function": "minecraft:looting_enchant",
				  "count": {
					"min": 0.0,
					"max": 1.0
				  }
				}
			  ],
			  "name": "minecraft:bone"
			})
		})
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('eidolon:zombie_heart', 1)
			pool.addCondition({
			  "condition": "minecraft:killed_by_player"
			})
			pool.addCondition({
			  "condition": "minecraft:random_chance_with_looting",
			  "chance": 0.1,
			  "looting_multiplier": 0.05
			})
		})
	})
})
onEvent('entity.loot_tables', event => {
	event.addEntity('farlanders:classic_enderman', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('minecraft:ender_pearl', 1)
			pool.addCondition({
				"condition": "minecraft:random_chance_with_looting",
				"chance": 0.5,
				"looting_multiplier": 0.15
			})
		})
	})
})
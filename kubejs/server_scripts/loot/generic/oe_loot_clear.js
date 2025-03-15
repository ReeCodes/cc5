onEvent('chest.loot_tables', event => {
	event.addChest('outer_end:end_city_treasure', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
			"type": "empty"
			})
		})
	})
})
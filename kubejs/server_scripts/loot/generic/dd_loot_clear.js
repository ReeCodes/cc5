onEvent('chest.loot_tables', event => {
	event.addChest('dustrial_decor:dungeon', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
			"type": "empty"
			})
		})
	})
})
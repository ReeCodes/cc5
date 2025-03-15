onEvent('generic.loot_tables', event => {
		event.addGeneric('environmental:injections/simple_dungeon', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "empty"
			})
		})
	})
})
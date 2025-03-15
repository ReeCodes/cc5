let lt_bb = [
	'desert_pyramid',
	'jungle_temple'
];

onEvent('generic.loot_tables', event => {
	for (let i of lt_bb) {
		event.addGeneric('buzzier_bees:injections/' + i, table => {
			table.addPool(pool => {
				pool.rolls = 1;
				pool.addEntry({
					"type": "empty"
				})
			})
		})
	}
})
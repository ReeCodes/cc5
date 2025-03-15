let lt_ua = [
	'pickerelweed_structures',
	'tooth_ruins',
	'tooth_treasure'
];

onEvent('generic.loot_tables', event => {
	for (let i of lt_ua) {
		event.addGeneric('upgrade_aquatic:injections/' + i, table => {
			table.addPool(pool => {
				pool.rolls = 1;
				pool.addEntry({
					"type": "empty"
				})
			})
		})
	}
})
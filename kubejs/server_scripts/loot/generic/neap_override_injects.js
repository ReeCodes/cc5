let lt_neap = [
	'jungle_temple',
	'village_plains_house',
	'abandoned_mineshaft',
	'village_plains_house',
	'village_savanna_house',
	'village_snowy_house'
];

onEvent('generic.loot_tables', event => {
	for (let i of lt_neap) {
		event.addGeneric('neapolitan:injections/' + i, table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "empty"
			})
		})
	})
	}
})
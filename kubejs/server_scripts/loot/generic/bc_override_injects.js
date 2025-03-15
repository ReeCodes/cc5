let lt_bc = [
	'abandoned_mineshaft',
	'bastion_bridge',
	'bastion_treasure',
	'buried_treasure',
	'desert_pyramid',
	'nether_bridge',
	'nether_generic',
	'overworld_generic',
	'ruined_portal',
	'shipwreck_treasure',
	'simple_dungeon',
	'spawn_bonus_chest',
	'village_house'
];

onEvent('generic.loot_tables', event => {
	for (let i of lt_bc) {
		event.addGeneric('buddycards:inject/' + i, table => {
			table.addPool(pool => {
				pool.rolls = 1;
				pool.addEntry({
					"type": "empty"
				})
			})
		})
	}
})
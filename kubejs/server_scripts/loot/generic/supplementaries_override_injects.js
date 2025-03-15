let lt_supplementaries = [
	'dungeon_blue_bomb',
	'dungeon_flax',
	'fortress_blue_bomb',
	'fortress_bomb',
	'mineshaft_blue_bomb',
	'mineshaft_bomb',
	'mineshaft_flax',
	'mineshaft_rope',
	'pillager_flax',
	'shipwreck_storage_flax',
	'stronghold_blue_bomb',
	'stronghold_bomb',
	'temple_blue_bomb',
	'temple_bomb',
	'temple_spikes'
];

let tipped_spikes = [
	'minecraft:weakness',
	'atmospheric:worsening',
	'apotheosis:sundering',
	'apotheosis:fatigue',
	'buzzier_bees:unluck',
	'cyclic:wither',
	'cyclic:hunger',
	'undergarden:featherweight',
	'undergarden:brittleness'
];

onEvent('generic.loot_tables', event => {
	for (let i of lt_supplementaries) {
		event.addGeneric('supplementaries:inject/' + i, table => {
			if (!['temple_spikes'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addEntry({
						"type": "empty"
					})
				})
			}
			if (['temple_spikes'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('supplementaries:bamboo_spikes', 4)
				tipped_spikes.forEach(pot => {
				let pot_effect = `{Potion:"${pot}"}`
					pool.addEntry({
						"type": "item",
						"weight": 1,
						"name": "supplementaries:bamboo_spikes_tipped",
						"functions": [{
								"function": "set_nbt",
								"tag": pot_effect
							},
							{
								"function": "set_damage",
								"damage": {
									"min": 0.2,
									"max": 0.9
								}
							}
						]
					})
				})
					pool.addEntry({
						"type": "empty",
						"weight": 48
					})
				})
			}
		})
	}
})
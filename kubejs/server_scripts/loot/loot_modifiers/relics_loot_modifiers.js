const relics_modifiers = [
	'amphibian_boot',
	'arrow_quiver',
	'bastion_ring',
	'blazing_flask',
	'camouflage_ring',
	'chorus_inhibitor',
	'delay_ring',
	'drowned_belt',
	'elytra_booster',
	'enders_hand',
	'fragrant_flower',
	'ghost_skin_talisman',
	'holy_locket',
	'horse_flute',
	'hunter_belt',
	'ice_breaker',
	'ice_skates',
	'infinity_ham',
	'jellyfish_necklace',
	'leather_belt',
	'lucky_horseshoe',
	'magic_mirror',
	'magma_walker',
	'midnight_robe',
	'out_runner',
	'rage_glove',
	'reflection_necklace',
	'scarab_talisman',
	'shadow_glaive',
	'slime_heart',
	'soul_devourer',
	'space_dissector',
	'spatial_sign',
	'spider_necklace',
	'spore_sack',
	'squire_bag',
	'stellar_catalyst',
	'wool_mitten'
];

onEvent('server.datapack.first', event => {
	for (let i of relics_modifiers) {
		let relics_json = (relic_id) => ({
			"type": "relics:relic_gen",
			"conditions": [{
					"condition": "minecraft:alternative",
					"terms": []
				},
				{
					"condition": "random_chance",
					"chance": 0.1
				}
			],
			"entry": {
				"type": "minecraft:item",
				"name": "relics:"+relic_id
			}
		})
		event.addJson(`relics:loot_modifiers/relics/${i}.json`, relics_json(i))
	}
})
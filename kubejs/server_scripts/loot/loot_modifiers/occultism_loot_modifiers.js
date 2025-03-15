let oc_json = {
	"type": "occultism:append_loot",
	"conditions": [
		{
			"condition": "minecraft:random_chance",
			"chance": 0.05
		},
		{
			"condition": "minecraft:inverted",
			"term": {
				"condition": "minecraft:match_tool",
				"predicate": {
					"item": "minecraft:shears"
				}
			}
		},
		{
			"condition": "block_state_property",
			"block": "minecraft:grass"
		}
	],
	"add_loot": "occultism:blocks/datura_seed_additions"
}

onEvent('server.datapack.first', event => {
		event.addJson(`ars_nouveau:loot_modifiers/add_datura_seeds.json`, oc_json)
})
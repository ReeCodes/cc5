onEvent('block.loot_tables', event => {
	event.addBlock('minecraft:ice', table => {
		table.addPool(pool => {
			pool.rolls = 1
			pool.addEntry({
				"type": "minecraft:alternatives",
				"children": [{
						"type": "minecraft:item",
						"conditions": [{
							"condition": "minecraft:match_tool",
							"predicate": {
								"enchantments": [{
									"enchantment": "minecraft:silk_touch",
									"levels": {
										"min": 1
									}
								}]
							}
						}],
						"name": "minecraft:ice"
					},
					{
						"type": "minecraft:item",
						"name": "neapolitan:ice_cubes",
						"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 0.0,
									"max": 2.0,
									"type": "minecraft:uniform"
								}
							},
							{
								"function": "minecraft:apply_bonus",
								"enchantment": "minecraft:fortune",
								"formula": "minecraft:uniform_bonus_count",
								"parameters": {
									"bonusMultiplier": 1
								}
							},
							{
								"function": "minecraft:explosion_decay"
							}
						],
						"conditions": [{
							"condition": "minecraft:entity_properties",
							"entity": "this",
							"predicate": {
								"type": "minecraft:player"
							}
						}]
					}
				]
			})
		})
	})
})
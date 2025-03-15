onEvent('block.loot_tables', event => {
	event.addBlock('quark:root', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "minecraft:alternatives",
				"children": [{
						"type": "minecraft:item",
						"conditions": [{
							"condition": "minecraft:match_tool",
							"predicate": {
								"item": "minecraft:shears"
							}
						}],
						"name": "quark:root"
					},
					{
						"type": "minecraft:item",
						"conditions": [{
								"condition": "minecraft:random_chance",
								"chance": 0.5
							},
							{
								"condition": "minecraft:entity_properties",
								"entity": "this",
								"predicate": {
									"type": "minecraft:player"
								}
							}
						],
						"functions": [{
							"function": "minecraft:explosion_decay"
						}],
						"name": "quark:root_item"
					}
				]
			})
		})
	})
})
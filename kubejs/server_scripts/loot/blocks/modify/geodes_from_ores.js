onEvent('block.loot_tables', event => {
	event.modifyBlock('#forge:ores', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "minecraft:alternatives",
				"children": (function () {
					var children = [];
					children.push({
						"type": "minecraft:tag",
						"name": 'kubejs:geodes',
						"expand": true,
						"conditions": [{
								"condition": "minecraft:random_chance",
								"chance": 0.008
							},
							{
								"condition": "minecraft:inverted",
								"term": {
									"condition": "minecraft:match_tool",
									"predicate": {
										"enchantments": [{
											"enchantment": "minecraft:fortune"
										}]
									}
								}
							}
						]
					});
					for (let i = 1; i <= 8; i++) {
						children.push({
							"type": "minecraft:tag",
							"name": 'kubejs:geodes',
							"expand": true,
							"conditions": [{
									"condition": "minecraft:match_tool",
									"predicate": {
										"enchantments": [{
											"enchantment": "minecraft:fortune",
											"levels": 0 + i
										}]
									}
								},
								{
									"condition": "minecraft:random_chance",
									"chance": 0.016 * i
								}
							]
						});
					}
					return children;
				})()
			});
		});
	});
})
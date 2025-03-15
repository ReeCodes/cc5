onEvent('chest.loot_tables', event => {
	event.addChest('tetra:simple_dungeon_extended', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "group",
				"children": [{
						"type": "minecraft:item",
						"name": "tetra:scroll_rolled",
						"functions": [{
							"function": "tetra:scroll",
							"key": "sword/sturdy_guard",
							"intricate": false,
							"material": 1,
							"ribbon": "bcb8b5",
							"glyphs": [3, 2, 2, 1],
							"schematics": ["sword/sturdy_guard"]
						}]
					},
					{
						"type": "minecraft:item",
						"name": "tetra:scroll_rolled",
						"functions": [{
							"function": "tetra:scroll",
							"key": "sword/throwing_knife",
							"intricate": false,
							"material": 1,
							"ribbon": "b8ced9",
							"glyphs": [4, 1, 0, 5],
							"schematics": ["sword/throwing_knife"]
						}]
					},
					{
						"type": "minecraft:item",
						"name": "tetra:scroll_rolled",
						"functions": [{
							"function": "tetra:scroll",
							"key": "sword/howling",
							"intricate": false,
							"material": 1,
							"ribbon": "faf396",
							"glyphs": [8, 9, 10, 5],
							"schematics": ["sword/howling"]
						}]
					}
				]
			})
			pool.addEntry({
				"type": "empty",
				"weight": 60
			})
		})
	})
	event.addChest('tetra:nether_bridge_extended', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
                "type": "minecraft:item",
                "name": "tetra:scroll_rolled",
                "functions": [{
                    "function": "tetra:scroll",
                    "key": "hone_gild_1",
                    "intricate": true,
                    "material": 2,
                    "ribbon": "c9ae69",
                    "glyphs": [15, 14, 15, 15],
                    "schematics": ["shared/hone_gild_1"]
                }]
            })
			pool.addEntry({
				"type": "empty",
				"weight": 60
			})
		})
	})
})

onEvent('generic.loot_tables', event => {
	event.addGeneric('tetra:bastion_scrolls', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "group",
				"children": [{
						"type": "minecraft:item",
						"name": "tetra:scroll_rolled",
						"functions": [{
							"function": "tetra:scroll",
							"key": "double/adze/warforge",
							"details": "warforge",
							"intricate": false,
							"material": 2,
							"ribbon": "8559b3",
							"glyphs": [6, 7, 11, 7],
							"schematics": ["double/adze/warforge"]
						}]
					},
					{
						"type": "minecraft:item",
						"name": "tetra:scroll_rolled",
						"functions": [{
							"function": "tetra:scroll",
							"key": "double/basic_axe/warforge",
							"details": "warforge",
							"intricate": false,
							"material": 2,
							"ribbon": "b35973",
							"glyphs": [5, 10, 8, 9],
							"schematics": ["double/basic_axe/warforge"]
						}]
					},
					{
						"type": "minecraft:item",
						"name": "tetra:scroll_rolled",
						"functions": [{
							"function": "tetra:scroll",
							"key": "double/basic_hammer/warforge",
							"details": "warforge",
							"intricate": false,
							"material": 2,
							"ribbon": "3d4299",
							"glyphs": [9, 8, 11, 10],
							"schematics": ["double/basic_hammer/warforge"]
						}]
					},
					{
						"type": "minecraft:item",
						"name": "tetra:scroll_rolled",
						"functions": [{
							"function": "tetra:scroll",
							"key": "double/basic_pickaxe/warforge",
							"details": "warforge",
							"intricate": false,
							"material": 2,
							"ribbon": "508cb3",
							"glyphs": [6, 11, 8, 7],
							"schematics": ["double/basic_pickaxe/warforge"]
						}]
					},
					{
						"type": "minecraft:item",
						"name": "tetra:scroll_rolled",
						"functions": [{
							"function": "tetra:scroll",
							"key": "double/claw/warforge",
							"details": "warforge",
							"intricate": false,
							"material": 2,
							"ribbon": "1d262f",
							"glyphs": [8, 10, 5, 11],
							"schematics": ["double/claw/warforge"]
						}]
					},
					{
						"type": "minecraft:item",
						"name": "tetra:scroll_rolled",
						"functions": [{
							"function": "tetra:scroll",
							"key": "double/hoe/warforge",
							"details": "warforge",
							"intricate": false,
							"material": 2,
							"ribbon": "93b350",
							"glyphs": [10, 7, 9, 5],
							"schematics": ["double/hoe/warforge"]
						}]
					},
					{
						"type": "minecraft:item",
						"name": "tetra:scroll_rolled",
						"functions": [{
							"function": "tetra:scroll",
							"key": "double/sickle/warforge",
							"details": "warforge",
							"intricate": false,
							"material": 2,
							"ribbon": "d99e4c",
							"glyphs": [5, 9, 6, 10],
							"schematics": ["double/sickle/warforge"]
						}]
					},
					{
						"type": "minecraft:item",
						"name": "tetra:scroll_rolled",
						"functions": [{
							"function": "tetra:scroll",
							"key": "double/butt/warforge",
							"details": "warforge",
							"intricate": false,
							"material": 2,
							"ribbon": "b33636",
							"glyphs": [11, 5, 8, 9],
							"schematics": ["double/butt_shared/warforge/"]
						}]
					}
				]
			})
			pool.addEntry({
				"type": "empty",
				"weight": 68
			})
		})
	})
})
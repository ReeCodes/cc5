//TIER2 PARTS
onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/tc_parts', table => {

		let tc_materialTypes = [
			'lead',
			'silver',
			'scorched_stone',
			'slimesteel',
			'steel',
			'tinkers_bronze',
			'nahuatl',
			'pig_iron',
			'rose_gold',
			'wood',
			'stone',
			'flint',
			'bone',
			'necrotic_bone',
			'seared_stone',
			'slimewood',
			'constantan',
			'electrum',
			'cobalt',
			'queens_slime',
			'hepatizon',
			'manyullyn',
			'platinum'
		];
		
		let ma_materialTypes = [
			'aluminum',
			'arcane_gold',
			'brass',
			'fairy',
			'livingwood',
			'manasteel',
			'nickel',
			'pewter',
			'plastic',
			'quicksilver',
			'rose_quartz'
		];

		table.addPool(pool => {
			pool.rolls = 1
			tc_materialTypes.forEach(mat => {
				const tcnbt = `{Material:"tconstruct:${mat}"}`
				Ingredient.of(['#tconstruct:parts']).stacks.forEach(parts => {
					pool.addEntry({
						"type": "minecraft:item",
						"name": parts.id,
						"weight": 50,
						"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 1
								}
							},
							{
								"function": "minecraft:set_nbt",
								"tag": tcnbt
							}
						]
					})
				})
			})
			ma_materialTypes.forEach(mat => {
				const tcnbt = `{Material:"materialis:${mat}"}`
				Ingredient.of(['#tconstruct:parts']).stacks.forEach(parts => {
					pool.addEntry({
						"type": "minecraft:item",
						"name": parts.id,
						"weight": 45,
						"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 1
								}
							},
							{
								"function": "minecraft:set_nbt",
								"tag": tcnbt
							}
						]
					})
				})
			})
		})
	})

})
onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/more_metals', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			//t1_ingots
			Ingredient.of([
				'dustrial_decor:rusty_iron_ingot',
				'#forge:ingots/iron',
				'#forge:ingots/silicon_bronze',
				'#forge:ingots/copper',
				'#forge:ingots/aluminum',
				'#forge:ingots/tin',
				'#forge:ingots/zinc'
			]).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"weight": 15,
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 1.0,
							"max": 3.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})

			//t2_ingots
			Ingredient.of([
				'#forge:ingots/invar',
				'#forge:ingots/steel',
				'#forge:ingots/electrum',
				'#forge:ingots/constantan',
				'#forge:ingots/uranium',
				'#forge:ingots/manasteel',
				'#forge:ingots/bronze',
				'#forge:ingots/silver',
				'#forge:ingots/lead',
				'#forge:ingots/nickel',
				'#forge:ingots/platinum',
				'#forge:ingots/gold',
				'#forge:ingots/quicksilver'
			]).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"weight": 5,
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 1.0,
							"max": 2.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})

			//t3_ingots
			Ingredient.of([
				'#forge:ingots/signalum',
				'#forge:ingots/cobalt',
				'#forge:ingots/lumium',
				'#forge:ingots/iridium',
				'#forge:ingots/rose_gold',
				'#forge:ingots/pig_iron'
			]).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"weight": 1,
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 1.0,
							"max": 2.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
		})
	})
})
onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anycarts', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			Ingredient.of([
			'minecraft:minecart', 
			'minecraft:chest_minecart', 
			'minecraft:furnace_minecart', 
			'minecraft:tnt_minecart', 
			'minecraft:hopper_minecart', 
			'immersiveengineering:minecart_woodencrate', 
			'immersiveengineering:minecart_woodenbarrel', 
			'moreminecarts:flag_cart'
			]).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"functions": [{
						"function": "minecraft:set_count",
						"weight": 5,
						"count": {
							"min": 1.0,
							"max": 1.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
			Ingredient.of([
			'immersiveengineering:minecart_reinforcedcrate', 
			'immersiveengineering:minecart_metalbarrel', 
			'moreminecarts:minecart_with_net', 
			'moreminecarts:tank_cart', 
			'moreminecarts:battery_cart'
			]).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"functions": [{
						"function": "minecraft:set_count",
						"weight": 1,
						"count": {
							"min": 1.0,
							"max": 1.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
		})
	})
})
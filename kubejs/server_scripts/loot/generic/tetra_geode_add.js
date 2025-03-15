let condRC = {
	"condition": "tetra:random_chance_with_fortune",
	"chance": 0.1,
	"fortuneMultiplier": 0.15
};

onEvent('generic.loot_tables', event => {
	event.addGeneric('tetra:actions/geode', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('tetra:pristine_diamond', 36).addCondition(condRC)
			pool.addItem('tetra:pristine_emerald', 34).addCondition(condRC)
			pool.addItem('tetra:pristine_lapis', 38).addCondition(condRC)
			Ingredient.of(['#kubejs:geodes']).stacks.forEach(g => {
			pool.addItem(g.id, 4).addCondition(condRC);
			})
			Ingredient.of([
				'#forge:nuggets/platinum',
				'#forge:nuggets/iron',
				'#forge:nuggets/gold',
				'#forge:nuggets/manasteel',
				'#forge:nuggets/quicksilver',
				'#forge:nuggets/obsidian',
				'#forge:nuggets/silicon_bronze',
				'#forge:nuggets/rose_gold',
				'#forge:nuggets/pig_iron',
				'#forge:nuggets/copper',
				'#forge:nuggets/aluminum',
				'#forge:nuggets/silver',
				'#forge:nuggets/lead',
				'#forge:nuggets/nickel',
				'#forge:nuggets/tin',
				'#forge:nuggets/zinc',
				'#forge:nuggets/bronze',
				'#forge:nuggets/pewter'
			]).stacks.forEach(n => {
				pool.addEntry({
					"type": "minecraft:item",
					"name": n.id,
					"weight": 30,
					"functions": [{
							"function": "set_count",
							"count": {
								"min": 8,
								"max": 14
							}
						},
						{
							"function": "minecraft:apply_bonus",
							"enchantment": "minecraft:fortune",
							"formula": "uniform_bonus_count",
							"parameters": {
								"bonusMultiplier": 3
							}
						}
					]
				})
			})
		})
	})
})
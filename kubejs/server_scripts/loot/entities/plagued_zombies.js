let plagued_mobs = ['plaguedrowned', 'plaguezombie', 'plaguezombifiedpiglin'];

onEvent('entity.loot_tables', event => {
	for (let i of plagued_mobs) {
		event.modifyEntity('specialmobs:' + i, table => {
			table.addPool(pool => {
				pool.rolls = 1;
				pool.addItem('botania:virus_necrodermal', 1)
				pool.addItem('botania:virus_nullodermal', 1)
				pool.addEmpty(12)
				pool.addCondition({
					"condition": "minecraft:random_chance_with_looting",
					"chance": 0.1,
					"looting_multiplier": 0.05
				})
			})
		})
	}
})
onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/druidic_loot', table => {
		table.addPool(pool => {
			pool.rolls = [3, 8];
			pool.addItem('mana-and-artifice:vinteum_dust', 15, [4, 8])
			pool.addItem('occultism:datura', 8, [1, 2])
			pool.addItem('malum:coal_fragment', 18, [8, 16])
			pool.addItem('malum:arcane_charcoal', 6, [2, 6])
			pool.addItem('malum:soulstone', 13, [2, 4])
			pool.addItem('malum:hallowed_gold_nugget', 7, [8, 24])
			pool.addItem('eidolon:enchanted_ash', 15, [2, 4])
			pool.addItem('eidolon:soul_shard', 8, [1, 4])
			pool.addItem('eidolon:fungus_sprouts', 11, [1, 4])
			pool.addItem('eidolon:warped_sprouts', 11, [1, 4])
			pool.addItem('eidolon:pewter_blend', 10, [1, 4])
			pool.addItem('forbidden_arcanus:dark_rune', 4, [1, 4])
			pool.addItem('evilcraft:dark_gem_crushed', 13, [2, 7])
			pool.addItem('forbidden_arcanus:arcane_crystal', 8, [4, 8])
			pool.addItem('forbidden_arcanus:xpetrified_orb', 12, [4, 8])
			pool.addItem('forbidden_arcanus:soul', 5)
			pool.addItem('forbidden_arcanus:obsidian_with_iron', 9, [1, 2])
			pool.addItem('forbidden_arcanus:rune', 8, [2, 4])
			pool.addItem('kubejs:unstable_endershard', 3)
		})
		table.addPool(pool => {
			pool.rolls = 2;
			pool.addItem('minecraft:book', 2).addFunction(enchant_levels(30, true))
			pool.addItem('minecraft:book', 2).addFunction(enchant_levels(45, true)).addCondition(entity_advancement('apotheosis:enchanting/30ench'))
			pool.addItem('minecraft:book', 2).addFunction(enchant_levels(60, true)).addCondition(entity_advancement('apotheosis:enchanting/45ench'))
			pool.addItem('minecraft:book', 2).addFunction(enchant_levels(80, true)).addCondition(entity_advancement('apotheosis:enchanting/60ench'))
			pool.addItem('minecraft:book', 2).addFunction(enchant_levels(100, true)).addCondition(entity_advancement('apotheosis:enchanting/80ench'))
			Ingredient.of(['apotheosis:null_book',
				'apotheosis:armor_head_book',
				'apotheosis:armor_chest_book',
				'apotheosis:armor_legs_book',
				'apotheosis:armor_feet_book',
				'apotheosis:weapon_book',
				'apotheosis:digger_book',
				'apotheosis:fishing_rod_book',
				'apotheosis:bow_book',
				'apotheosis:scrap_tome'
			]).stacks.forEach(item => {
				pool.addItem(item.id, 1)
			})
		})
	})
})
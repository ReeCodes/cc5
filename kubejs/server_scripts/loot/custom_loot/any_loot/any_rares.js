onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anyrares_useables', table => {
		//MISC_OTHER
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('ars_nouveau:warp_scroll', 15)
			pool.addItem('enigmaticlegacy:tattered_tome', 7)
			pool.addItem('xreliquary:zombie_heart', 14, [1, 2])
			pool.addItem('calemiutils:money_bag_cheap', 20, [1, 2])
			pool.addItem('pneumaticcraft:bandage', 23, [1, 3])
			pool.addItem('supplementaries:bomb_blue', 17, [3, 6])
			pool.addItem('cyclic:ender_pearl_reuse', 5, [1, 1])
			pool.addItem('securitycraft:codebreaker', 4, [1, 1])
			pool.addItem('xreliquary:angelic_feather', 1, [1, 1])
			pool.addItem('botaniaadditions:regen_ivy', 2, [1, 1])
			pool.addItem('xreliquary:wraith_node', 3, [1, 1])
			pool.addItem('xreliquary:fertile_lily_pad', 8, [1, 1])
			pool.addItem('apotheosis:prismatic_web', 12, [1, 1])
			pool.addItem('apotheosis:farmers_leash', 14, [1, 1])
			pool.addItem('xreliquary:angelheart_vial', 6, [1, 1])
			pool.addItem('kubejs:unstable_endershard', 3, [1, 1])
			pool.addItem('kubejs:golem_summoner', 11, [1, 1])
			pool.addItem('botania:mana_bottle', 8, [1, 1])
			pool.addItem('botania:overgrowth_seed', 16, [1, 1])
			pool.addItem('xreliquary:attraction_potion', 20, [1, 2])
			pool.addItem('supplementaries:bomb', 26, [2, 3])
			pool.addItem('kubejs:orb_of_spectral_sight', 11, [1, 1])
			pool.addItem('botania:world_seed', 10, [1, 2])
			pool.addItem('kubejs:essence_cursed', 5, [1, 1])
			pool.addItem('enigmaticlegacy:recall_potion', 20, [1, 1])
			pool.addItem('calemiutils:money_bag_rich', 8, [1, 2])
			pool.addItem('cyclic:spawner_seeker', 16, [1, 2])
			pool.addItem('kubejs:dreadful_contract', 23, [1, 1])
			pool.addItem('xreliquary:interdiction_torch', 12, [1, 1])
			pool.addItem('botania:black_lotus', 15, [1, 1])
			pool.addItem('#forge:ob_materials/magic_dust', 2, [1, 2])
			pool.addItem('xreliquary:glowing_bread', 18, [2, 4])
			pool.addItem('xreliquary:fertile_potion', 19, [1, 3])
			pool.addItem('bloodmagic:throwing_dagger', 20, [2, 4])
			pool.addItem('waystones:bound_scroll', 20, [1, 2])
			pool.addItem('waystones:return_scroll', 19, [1, 2])
			pool.addItem('waystones:warp_scroll', 18, [1, 2])
			pool.addItem('pneumaticcraft:stop_worm', 1)
			pool.addItem('pneumaticcraft:nuke_virus', 1)
			pool.addItem('buzzier_bees:four_leaf_clover', 8)
			pool.addItem('forcecraft:red_potion', 14)
			pool.addItem('forcecraft:force_filled_force_flask', 11)
			pool.addEntry({
				"type": "minecraft:item",
				"weight": 11,
				"functions": [{
					"function": "minecraft:set_damage",
					"damage": {
						"min": 0.15,
						"max": 0.45
					}
				}],
				"name": 'kubejs:dust_size_down'
			})
			pool.addEntry({
				"type": "minecraft:item",
				"weight": 11,
				"functions": [{
					"function": "minecraft:set_damage",
					"damage": {
						"min": 0.15,
						"max": 0.45
					}
				}],
				"name": 'kubejs:dust_size_up'
			})
			pool.addEntry({
				"type": "minecraft:item",
				"weight": 8,
				"functions": [{
					"function": "minecraft:set_damage",
					"damage": {
						"min": 0.05,
						"max": 0.15
					}
				}],
				"name": 'botania:spell_cloth'
			})
		})
	})
	event.addChest('kubejs:loot_randomizer/anyrares_curio', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('enigmaticlegacy:iron_ring', 3)
			pool.addItem('eidolon:basic_amulet', 3)
			pool.addItem('eidolon:basic_belt', 3)
			pool.addItem('eidolon:basic_ring', 3)
			pool.addItem('malum:gilded_ring', 3)
			pool.addItem('malum:ornate_ring', 3)
			pool.addItem('enigmaticlegacy:earth_heart', 3)
			Ingredient.of([
				'enigmaticlegacy:extradimensional_eye',
				'relics:spatial_sign',
				'enigmaticlegacy:mining_charm',
				'enigmaticlegacy:monster_charm',
				'environmental:thief_hood',
				'environmental:healer_pouch',
				'environmental:architect_belt',
				'environmental:wanderer_boots',
				'@artifacts',
				'cyclic:charm_stealthpotion',
				'cyclic:charm_boostpotion',
				'cyclic:charm_crit',
				'cyclic:quiver_damage',
				'cyclic:quiver_lightning',
				'cyclic:charm_magicdefense',
				'cyclic:charm_xp_blocker',
				'cyclic:charm_wing',
				'xreliquary:mercy_cross',
				'xreliquary:twilight_cloak',
				'xreliquary:shears_of_winter',
				'xreliquary:serpent_staff',
				'xreliquary:magicbane',
				'xreliquary:rending_gale',
				'xreliquary:ice_magus_rod',
				'xreliquary:hero_medallion',
				'xreliquary:midas_touchstone',
				'/bountifulbaubles:(sunglasses|balloon|.+_mirror|amulet_cross|obsidian_skull|gloves_dexterity|lucky_horseshoe|shield_cobalt|amulet.+|ring_overclocking)/'
			]).filter(Ingredient.of([
				'artifacts:mimic_spawn_egg',
				'artifacts:shock_pendant', 
				'artifacts:umbrella', 
				'artifacts:cloud_in_a_bottle',
				'artifacts:flame_pendant', 
				'artifacts:fire_gauntlet', 
				'artifacts:obsidian_skull',
				'artifacts:helium_flamingo',
				'artifacts:plastic_drinking_hat',
				'artifacts:novelty_drinking_hat',
				'artifacts:snorkel',
				'artifacts:flippers',
				'artifacts:aqua_dashers',
				'artifacts:charm_of_sinking',
				'artifacts:everlasting_beef',
				'artifacts:eternal_steak',
				'bountifulbaubles:amulet_sin_empty'
			]).not()).stacks.forEach(stack => {
				pool.addItem(stack.id, 1)
			})
		})
	})
})
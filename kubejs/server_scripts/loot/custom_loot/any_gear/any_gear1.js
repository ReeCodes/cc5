onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anyarmor/anyarmor1', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			Ingredient.of([
				'/.+helmet/', '/.+chestplate/', '/.+leggings/', '/.+boots/'
			]).filter(Ingredient.of([
				'@alexsmobs',
				'@apotheosis',
				'@aquaculture',
				'@aquamirae',
				'@ars_nouveau',
				'@atum',
				'@autumnity',
				'@betterendforge',
				'@bloodmagic',
				'@blue_skies',
				'@buddycards',
				'@create',
				'@createplus',
				'@cyclic',
				'@desolation',
				'@draconicevolution',
				'@dungeons_mobs',
				'@eidolon',
				'@enigmaticlegacy',
				'@environmental',
				'@farlanders',
				'@forcecraft',
				'@ftbic',
				'@gaiadimension',
				'@gobber2',
				'@iceandfire',
				'@inventorypets',
				'@jellyfishing',
				'@malum',
				'@mana-and-artifice',
				'@materialis',
				'@mowziesmobs',
				'@mutantbeasts',
				'@mutantmore',
				'@naturesaura',
				'@nethers_exoticism',
				'@nourished_end',
				'@ob_core',
				'@occultism',
				'@omnis',
				'@outvoted',
				'@pneumaticcraft',
				'@psi',
				'@psipherals',
				'@rats',
				'@resourcefulbees',
				'@rootsclassic',
				'@sanguinearsenal',
				'@scuba_gear',
				'@securitycraft',
				'@tconstruct',
				'@theoneprobe',
				'@tropicraft',
				'@turtlemancy',
				'@twilightforest',
				'@undergarden',
				'@wyrmroost',
				'@xreliquary',
				'/.+alfsteel.+/',
				'/.+amethyst.+/',
				'/.+ametrine.+/',
				'/.+arcane_golden.+/',
				'/.+arcane.+/',
				'/.+bighorn.+/',
				'/.+bone.+/',
				'/.+book.+/',
				'/.+chitin.+/',
				'/.+diamond.+/',
				'/.+draco_arcanus.+/',
				'/.+drake.+/',
				'/.+egg/',
				'/.+elementium.+/',
				'/.+geode.+/',
				'/.+gold.+/',
				'/.+griefer.+/',
				'/.+iron.+/',
				'/.+lead.+/',
				'/.+manasteel.+/',
				'/.+manaweave.+/',
				'/.+moonstone.+/',
				'/.+netherite.+/',
				'/.+obsidian.+/',
				'/.+pendorite.+/',
				'/.+platinum.+/',
				'/.+sapphire.+/',
				'/.+silver.+/',
				'/.+terrasteel.+/',
				'/.+tyr.+/',
				'/.+utheric.+/',
				'/betterlands:horned_cap.+/',
				'/immersiveengineering:.+steel/',
				'/mysticalworld:beetle_.+/',
				'minecraft:turtle_helmet',
				'/botania:terra_.+/'
			]).not()).stacks.forEach(armor => {
				pool.addEntry({
					"type": "minecraft:item",
					"weight": 3,
					"functions": [{
						"function": "minecraft:enchant_with_levels",
						"levels": {
							"min": 1,
							"max": 5
						}
					}],
					"name": armor.id
				})

			})
		})
	})
	event.addChest('kubejs:loot_randomizer/anytools/anytools1', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			Ingredient.of([
				'/.+sword/', '/.+axe/', '/.+shovel/'
			]).filter(Ingredient.of([
				'@additionalbanners',
				'@alexsmobs',
				'@apotheosis',
				'@aquaculture',
				'@aquamirae',
				'@ars_nouveau',
				'@astralsorcery',
				'@atum',
				'@betterendforge',
				'@bloodmagic',
				'@blue_skies',
				'@botaniaadditions',
				'@buddycards',
				'@createplus',
				'@cyclic',
				'@draconicevolution',
				'@dungeons_mobs',
				'@eidolon',
				'@enigmaticlegacy',
				'@evilcraft',
				'@extcaves',
				'@farlanders',
				'@forcecraft',
				'@ftbic',
				'@gaiadimension',
				'@gobber2',
				'@iceandfire',
				'@inventorypets',
				'@jellyfishing',
				'@malum',
				'@mana-and-artifice',
				'@materialis',
				'@mowziesmobs',
				'@mutantbeasts',
				'@mutantmore',
				'@naturesaura',
				'@netheragriculture',
				'@nethers_exoticism',
				'@nourished_end',
				'@ob_core',
				'@occultism',
				'@omnis',
				'@outvoted',
				'@pneumaticcraft',
				'@psi',
				'@psipherals',
				'@quark',
				'@rats',
				'@resourcefulbees',
				'@rootsclassic',
				'@securitycraft',
				'@tconstruct',
				'@theoneprobe',
				'@tropicraft',
				'@turtlemancy',
				'@twilightforest',
				'@undergarden',
				'@wyrmroost',
				'@xreliquary',
				'/.+alfsteel.+/',
				'/.+amethyst.+/',
				'/.+arcane_golden.+/',
				'/.+bighorn.+/',
				'/.+bone.+/',
				'/.+book.+/',
				'/.+diamond.+/',
				'/.+draco_arcanus.+/',
				'/.+egg/',
				'/.+elementium.+/',
				'/.+geode.+/',
				'/.+geode.+/',
				'/.+gold.+/',
				'/.+gold.+/',
				'/.+griefer.+/',
				'/.+iron.+/',
				'/.+lead.+/',
				'/.+manasteel.+/',
				'/.+moonstone.+/',
				'/.+netherite.+/',
				'/.+obsidian.+/',
				'/.+pendorite.+/',
				'/.+platinum.+/',
				'/.+sapphire.+/',
				'/.+silver.+/',
				'/.+terra.+/',
				'/.+terrasteel.+/',
				'/.+tyr.+/',
				'/.+utheric.+/',
				'/.+wooden.+/',
				'/botania:glass_pickaxe/',
				'/forbidden_arcanus:infernum_pickaxe/',
				'/forbidden_arcanus:slimec_pickaxe/',
				'/immersiveengineering:.+steel/',
				'botania:star_sword',
				'botania:thunder_sword',
				'/botania:terra_.+/'
			]).not()).stacks.forEach(weapon => {
				pool.addEntry({
					"type": "minecraft:item",
					"weight": 2,
					"functions": [{
						"function": "minecraft:enchant_with_levels",
						"levels": {
							"min": 1,
							"max": 5
						}
					}],
					"name": weapon.id
				})
			})
		})
	})
})
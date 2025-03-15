// priority: 400

let potionType = [
	'buzzier_bees:long_luck',
	'buzzier_bees:strong_luck',
	'minecraft:luck',
	'minecraft:weakness',
	'minecraft:swiftness',
	'minecraft:strength',
	'minecraft:healing',
	'minecraft:harming',
	'minecraft:leaping',
	'minecraft:regeneration',
	'minecraft:fire_resistance',
	'minecraft:water_breathing',
	'minecraft:invisibility',
	'minecraft:night_vision',
	'minecraft:slow_falling',
	'buddycards:grading_luck',
	'buddycards:grading_luck_strong',
	'buddycards:grading_luck_long',
	'atmospheric:worsening',
	'apotheosis:resistance',
	'apotheosis:absorption',
	'apotheosis:haste',
	'apotheosis:knowledge',
	'alexsmobs:knockback_resistance',
	'alexsmobs:lava_vision',
	'alexsmobs:poison_resistance',
	'alexsmobs:soulsteal',
	'alexsmobs:clinging',
	'ars_nouveau:mana_regen_potion',
	'eidolon:anchored',
	'quark:resilience',
	'cyclic:swimspeed',
	'atmospheric:relief',
	'autumnity:extension',
	'upgrade_aquatic:restfulness',
	'upgrade_aquatic:repellence',
	'upgrade_aquatic:vibing',
	'infernalexp:luminous',
	'resourcefulbees:calming',
	'desolation:potion_of_cinder_soul',
	'abundance:supportive',
	'apotheosis:sundering',
	'apotheosis:fatigue'
];

global.cptBad = [
	'9', //'minecraft:nausea'
	'56', //'carrierbees:crumble'
	'53', //'carrierbees:fumble'
	'60', //'carrierbees:jumble'
	'55', //'carrierbees:stumble'
	'58', //'carrierbees:tumble'
	'-99' //'alexsmobs:exsanguation'
];

global.cptGood = [
	'119', //'tetra:*'
	'125', //'tetra:*'
	'124', //'tetra:*'
	'123', //'tetra:*'
	'122' //'tetra:*'
];

onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anypotion', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('potionofbees:splash_potion_of_bees', 1)
			potionType.forEach(pot => {
				let pot_name = `{Potion:"${pot}"}`
				Ingredient.of(['minecraft:splash_potion', 'minecraft:lingering_potion']).stacks.forEach(potion => {
					pool.addEntry({
						"type": "minecraft:item",
						"weight": 3,
						"name": potion.id,
						"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 1
								}
							},
							{
								"function": "minecraft:set_nbt",
								"tag": pot_name
							}
						]
					})
				})
			})
			global.cptBad.forEach(pot => {
				const pot_id = `{CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:600,Id:${pot}b,Amplifier:0b}]}`
				Ingredient.of(['minecraft:splash_potion', 'minecraft:lingering_potion']).stacks.forEach(potion => {
					pool.addEntry({
						"type": "minecraft:item",
						"weight": 2,
						"name": potion.id,
						"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 1
								}
							},
							{
								"function": "minecraft:set_nbt",
								"tag": pot_id
							}
						]
					})
				})
			})
			global.cptGood.forEach(pot => {
				const pot_id = `{CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:600,Id:${pot}b,Amplifier:0b}]}`
				Ingredient.of(['minecraft:splash_potion', 'minecraft:lingering_potion']).stacks.forEach(potion => {
					pool.addEntry({
						"type": "minecraft:item",
						"weight": 3,
						"name": potion.id,
						"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 1
								}
							},
							{
								"function": "minecraft:set_nbt",
								"tag": pot_id
							}
						]
					})
				})
			})
		})
	})
})
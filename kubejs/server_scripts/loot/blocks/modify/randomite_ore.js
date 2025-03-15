onEvent('block.loot_tables', event => {
	event.addBlock('randomite:randomite_ore', table => {

		table.addPool(pool => {
			pool.rolls = 1
			Ingredient.of([
				'/emendatusenigmatica:(coal|diamond|emerald|sapphire|mana|dimensional|lapis|quartz|redstone|sulfur|iron|gold|copper|aluminum|silver|lead|nickel|uranium|tin|zinc|cobalt|iridium).+_ore$/',
				'ob_core:platinum_raw',
				'astralsorcery:rock_crystal_ore',
				'astralsorcery:starmetal_ore',
				'quark:biotite_ore',
				'rats:cheese_ore',
				'rats:ratlantean_gem_ore',
				'rats:oratchalcum_ore',
				'farlanders:endumium_ore',
				'occultism:iesnium_ore',
				'forbidden_arcanus:arcane_crystal_ore',
				'mana-and-artifice:vinteum_ore',
				'evilcraft:dark_ore',
				'mysticalworld:quicksilver_ore',
				'forbidden_arcanus:xpetrified_ore',
				'undergarden:cloggrum_ore',
				'undergarden:froststeel_ore',
				'undergarden:utherium_ore',
				'undergarden:regalium_ore',
				'zycraft:blue_zychorium_ore',
				'zycraft:green_zychorium_ore',
				'zycraft:red_zychorium_ore',
				'zycraft:dark_zychorium_ore',
				'zycraft:light_zychorium_ore',
				'byg:ametrine_ore',
				'byg:pendorite_ore',
				'byg:emeraldite_ore',
				'byg:anthracite_ore',
				'byg:lignite_ore',
				'betterendforge:ender_ore',
				'betterendforge:amber_ore',
				'betterendforge:thallasium_ore',
				'tconstruct:cobalt_ore',
				'atum:relic_ore',
				'atum:nebu_ore',
				'tropicraft:azurite_ore',
				'tropicraft:eudialyte_ore',
				'tropicraft:manganese_ore',
				'tropicraft:shaka_ore',
				'tropicraft:zircon_ore',
				'blue_skies:everbright_diopside_ore',
				'blue_skies:everbright_pyrope_ore',
				'blue_skies:everbright_aquite_ore',
				'blue_skies:everbright_charoite_ore',
				'blue_skies:everbright_moonstone_ore',
				'blue_skies:falsite_ore',
				'blue_skies:ventium_ore',
				'blue_skies:everdawn_diopside_ore',
				'blue_skies:everdawn_pyrope_ore',
				'blue_skies:everdawn_aquite_ore',
				'blue_skies:everdawn_charoite_ore',
				'blue_skies:everdawn_moonstone_ore',
				'blue_skies:horizonite_ore',
				'calemiutils:raritanium_ore',
				'wyrmroost:blue_geode_ore',
				'wyrmroost:red_geode_ore',
				'wyrmroost:purple_geode_ore',
				'forcecraft:power_ore',
				'buddycards:luminis_ore',
				'draconicevolution:end_draconium_ore',
				'draconicevolution:nether_draconium_ore',
				'draconicevolution:overworld_draconium_ore',
				'gobber2:gobber2_ore',
				'gobber2:gobber2_ore_nether',
				'gobber2:gobber2_ore_end',
				'druidcraft:moonstone_ore',
				'druidcraft:fiery_glass_ore',
				'druidcraft:rockroot_ore',
				'mythicbotany:elementium_ore',
				'mythicbotany:dragonstone_ore',
				'phi:psionic_dust_ore',
				'malum:blazing_quartz_ore',
				'malum:soulstone_ore'
			]).stacks.forEach(c => {
				pool.addEntry({
					"type": "minecraft:alternatives",
					"children": [{
							"type": "minecraft:item",
							"conditions": [{
								"condition": "minecraft:match_tool",
								"predicate": {
									"enchantments": [{
										"enchantment": "minecraft:silk_touch",
										"levels": {
											"min": 1
										}
									}]
								}
							}],
							"name": "randomite:randomite_ore"
						},
						{
							"type": "minecraft:item",
							"functions": [{
									"function": "minecraft:apply_bonus",
									"enchantment": "minecraft:fortune",
									"formula": "minecraft:uniform_bonus_count",
									"parameters": {
										"bonusMultiplier": 1.0
									}
								},
								{
									"function": "minecraft:explosion_decay"
								}
							],
							"name": c.id
						}
					]
				})
			})
		})
	})
})
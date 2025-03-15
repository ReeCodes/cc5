onEvent('recipes', event => {

	let meteor = (inputOffering, syphonAmount, explosionRadius, layers, id) => {

		layers = (layers == 0) ? [] : layers;

		event.recipes.bloodmagic.meteor({
			input: Ingredient.of(inputOffering),
			syphon: syphonAmount,
			explosion: explosionRadius,
			layers: layers
		}).id('bloodmagic:meteor/' + id)
	}

	let add_layers = (radius, addWeight, minWeight, weightBlocks, fillBlock, shellBlock) => ({
		radius: radius,
		additionalWeight: addWeight,
		minWeight: minWeight,
		weightMap: weightBlocks.map(w => {
			return {
				tag: w.tag,
				weight: w.weight
			}
		}),
		fill: fillBlock,
		shell: shellBlock ? shellBlock : null
	});

	meteor('#forge:storage_blocks/bitumen', 200000, 10.0, [
		add_layers(8, 50, 0, [
			{
				tag: 'emendatusenigmatica:coal_ore',
				weight: 50
			}
		], 'emendatusenigmatica:bitumen_ore', 'minecraft:stone'),
		add_layers(4, 25, 0, [{
				tag: 'minecraft:coal_block',
				weight: 40
			},
			{
				tag: 'emendatusenigmatica:bitumen_block',
				weight: 40
			}
		], 'emendatusenigmatica:coke_block', 'minecraft:obsidian')
	], 'tarred')
	
	meteor('#forge:storage_blocks/arcane', 300000, 24.0, [
		add_layers(8, 50, 0, [{
				tag: 'betterendforge:aurora_crystal',
				weight: 50
			}
		], 'emendatusenigmatica:arcane_ore', 'ars_nouveau:arcane_stone'),
		add_layers(4, 85, 0, [{
				tag: 'emendatusenigmatica:arcane_block',
				weight: 15
			}
		], 'betterendforge:umbrella_tree_cluster', 'ars_nouveau:warding_stone')
	], 'arcane')
	
	meteor('occultism:spirit_attuned_gem', 550000, 28.0, [
		add_layers(12, 25, 0, [{
				tag: 'forbidden_arcanus:dark_runestone',
				weight: 3
			},
			{
				tag: 'forbidden_arcanus:arcane_gilded_darkstone',
				weight: 7
			}
		], 'forbidden_arcanus:darkstone', 'forbidden_arcanus:darkstone'),
		add_layers(8, 12, 0, [{
				tag: 'occultism:iesnium_ore',
				weight: 85
			},
			{
				tag: 'occultism:iesnium_block',
				weight: 3
			}
		], 'occultism:otherstone', 'occultism:otherstone'),
		add_layers(4, 8, 0, [{
				tag: 'forbidden_arcanus:arcane_crystal_block',
				weight: 30
			},
			{
				tag: 'eidolon:arcane_gold_block',
				weight: 30
			},
			{
				tag: 'eidolon:pewter_block',
				weight: 30
			},
			{
				tag: 'forbidden_arcanus:stella_arcanum',
				weight: 2
			}
		], 'minecraft:crying_obsidian', 'charm:refined_obsidian')
	], 'occultic')
	
	meteor('#forge:gems/dragonstone', 500000, 12.0, [
		add_layers(8, 16, 0, [{
				tag: 'mythicbotany:gold_ore',
				weight: 52
			},
			{
				tag: 'mythicbotany:elementium_ore',
				weight: 18
			},
			{
				tag: 'mythicbotany:dragonstone_ore',
				weight: 14
			}
		], 'botania:shimmerrock', 'botania:livingrock'),
		add_layers(4, 95, 0, [{
				tag: 'botania:glimmering_livingwood',
				weight: 5
			}
		], 'botania:mossy_livingwood_planks', 'botania:livingwood'),
		add_layers(2, 90, 0, [{
				tag: 'twilightforest:ironwood_block',
				weight: 10
			}
		], 'twilightforest:liveroot_block', 'twilightforest:root')
	], 'floral')
	
	meteor('#forge:storage_blocks/diamond', 900000, 16.0, [
		add_layers(10, 22, 0, [{
				tag: 'minecraft:gold_block',
				weight: 15
			},
			{
				tag: 'minecraft:diamond_block',
				weight: 7
			},
			{
				tag: 'minecraft:emerald_block',
				weight: 7
			},
			{
				tag: 'iceandfire:amythest_block',
				weight: 7
			},
			{
				tag: 'druidcraft:moonstone_block',
				weight: 7
			},
			{
				tag: 'druidcraft:amber_block',
				weight: 7
			},
			{
				tag: 'twilightforest:fake_diamond',
				weight: 1
			},
			{
				tag: 'twilightforest:fake_gold',
				weight: 1
			}
		], 'infernalexp:cracked_glowdust_stone_bricks', 'infernalexp:glowdust_stone_bricks')
	], 'lustrous')
	
	meteor('#forge:storage_blocks/iron', 650000, 12.0, [
		add_layers(12, 15, 0, [{
				tag: 'emendatusenigmatica:aluminum_ore',
				weight: 15
			},
			{
				tag: 'emendatusenigmatica:copper_ore',
				weight: 15
			},
			{
				tag: 'emendatusenigmatica:tin_ore',
				weight: 15
			},
			{
				tag: 'emendatusenigmatica:lead_ore',
				weight: 15
			},
			{
				tag: 'emendatusenigmatica:zinc_ore',
				weight: 15
			}
		], 'emendatusenigmatica:iron_ore'),
		add_layers(10, 15, 0, [{
				tag: 'emendatusenigmatica:nickel_ore',
				weight: 15
			},
			{
				tag: 'emendatusenigmatica:uranium_ore',
				weight: 15
			},
			{
				tag: 'emendatusenigmatica:cobalt_ore',
				weight: 15
			},
			{
				tag: 'ob_core:platinum_ore',
				weight: 15
			},
			{
				tag: 'mysticalworld:quicksilver_ore',
				weight: 15
			}
		], 'emendatusenigmatica:silver_ore'),
		add_layers(4, 5, 0, [{
				tag: 'emendatusenigmatica:silver_block',
				weight: 20
			},
			{
				tag: 'emendatusenigmatica:nickel_block',
				weight: 20
			},
			{
				tag: 'emendatusenigmatica:uranium_block',
				weight: 20
			},
			{
				tag: 'emendatusenigmatica:cobalt_block',
				weight: 20
			}
		], 'emendatusenigmatica:iridium_ore', 'enviromats:hardened_stone')
	], 'metalliferous')
	
	meteor('#bloodmagic:offering/colossal', 1000000, 36.0, [
		add_layers(32, 14, 0, [{
				tag: 'emendatusenigmatica:gold_netherrack_ore',
				weight: 65
			},
			{
				tag: 'byg:pervaded_netherrack',
				weight: 35
			},
			{
				tag: 'emendatusenigmatica:sulfur_netherrack_ore',
				weight: 40
			},
			{
				tag: 'gobber2:gobber2_ore_nether',
				weight: 8
			}
		], 'minecraft:magma_block', 'minecraft:netherrack'),
		add_layers(16, 14, 0, [{
				tag: 'emendatusenigmatica:cobalt_blackstone_ore',
				weight: 22
			},
			{
				tag: 'minecraft:quartz_block',
				weight: 76
			},
			{
				tag: 'byg:lignite_block',
				weight: 24
			},
			{
				tag: 'minecraft:glowstone',
				weight: 30
			}
		], 'minecraft:blackstone', 'byg:magmatic_stone'),
		add_layers(8, 4, 0, [{
				tag: 'minecraft:ancient_debris',
				weight: 4
			},
			{
				tag: 'emendatusenigmatica:sulfur_block',
				weight: 76
			},
			{
				tag: 'emendatusenigmatica:cobalt_block',
				weight: 16
			}
		], 'byg:cryptic_stone', 'byg:cryptic_magma_block')
	], 'colossal')
	
	meteor('minecraft:hay_block', 250000, 8.0, [
		add_layers(8, 0, 0, [{
				tag: 'minecraft:pumpkin',
				weight: 18
			},
			{
				tag: 'minecraft:melon',
				weight: 18
			},
			{
				tag: 'quark:sugar_cane_block',
				weight: 12
			},
			{
				tag: 'quark:bamboo_block',
				weight: 12
			},
			{
				tag: 'neapolitan:banana_bundle',
				weight: 6
			},
			{
				tag: 'atmospheric:aloe_bundle',
				weight: 6
			},
			{
				tag: 'minecraft:brown_mushroom_block',
				weight: 12
			},
			{
				tag: 'minecraft:red_mushroom_block',
				weight: 12
			}
		], 'minecraft:hay_block')
	], 'organic')
	
	meteor('evilcraft:condensed_blood', 450000, 10.0, [
		add_layers(12, 0, 0, [{
				tag: 'evilcraft:hardened_blood',
				weight: 44
			},
			{
				tag: 'tconstruct:blood_congealed_slime',
				weight: 32
			},
			{
				tag: 'tconstruct:blood_slime',
				weight: 18
			},
			{
				tag: 'evilcraft:dark_power_gem_block',
				weight: 4
			}
		], 'biomesoplenty:flesh', 'biomesoplenty:flesh'),
		add_layers(3, 68, 0, [{
				tag: 'rats:cursed_garbage',
				weight: 8
			},
			{
				tag: 'rats:compressed_garbage',
				weight: 17
			},
			{
				tag: 'rats:purified_garbage',
				weight: 3
			},
			{
				tag: 'rats:pied_garbage',
				weight: 4
			}
		], 'rats:garbage_pile', 'evilcraft:bloody_cobblestone')
	], 'abominable')
	
	meteor('upgrade_aquatic:thrasher_tooth', 850000, 16.0, [
		add_layers(14, 8, 0, [{
				tag: 'minecraft:tube_coral_block',
				weight: 44
			},
			{
				tag: 'minecraft:brain_coral_block',
				weight: 32
			},
			{
				tag: 'minecraft:bubble_coral_block',
				weight: 18
			},
			{
				tag: 'minecraft:fire_coral_block',
				weight: 4
			},
			{
				tag: 'minecraft:horn_coral_block',
				weight: 4
			}
		], 'upgrade_aquatic:elder_prismarine_coral_block', 'quark:elder_prismarine'),
		add_layers(6, 28, 0, [{
				tag: 'upgrade_aquatic:prismarine_coral_block',
				weight: 66
			},
			{
				tag: 'upgrade_aquatic:scute_block',
				weight: 3
			},
			{
				tag: 'turtlemancy:pearl_block',
				weight: 1
			},
			{
				tag: 'aquaculture:neptunium_block',
				weight: 2
			}
		], 'minecraft:prismarine', 'minecraft:dark_prismarine')
	], 'aquatic')
	
	meteor('blue_skies:snowcap_mushroom_block', 600000, 18.0, [
		add_layers(16, 4, 0, [{
				tag: 'blue_skies:everbright_pyrope_ore',
				weight: 44
			},
			{
				tag: 'blue_skies:everbright_aquite_ore',
				weight: 32
			},
			{
				tag: 'blue_skies:everbright_charoite_ore',
				weight: 18
			},
			{
				tag: 'blue_skies:everbright_diopside_ore',
				weight: 4
			}
		], 'powah:dry_ice', 'byg:frost_magma'),
		add_layers(4, 28, 0, [{
				tag: 'minecraft:blue_ice',
				weight: 51
			},
			{
				tag: 'twilightforest:arctic_fur_block',
				weight: 2
			},
			{
				tag: 'betterendforge:ancient_emerald_ice',
				weight: 6
			},
			{
				tag: 'outer_end:ancient_ice',
				weight: 9
			},
			{
				tag: 'undergarden:froststeel_block',
				weight: 4
			}
		], 'betterendforge:dense_emerald_ice', 'betterendforge:emerald_ice')
	], 'glacial')
	
	meteor('astralsorcery:resonating_gem', 800000, 24.0, [
		add_layers(12, 15, 0, [{
				tag: 'emendatusenigmatica:dimensional_raw_marble_ore',
				weight: 7
			},
			{
				tag: 'emendatusenigmatica:diamond_raw_marble_ore',
				weight: 6
			},
			{
				tag: 'emendatusenigmatica:sapphire_raw_marble_ore',
				weight: 3
			},
			{
				tag: 'emendatusenigmatica:emerald_raw_marble_ore',
				weight: 9
			},
			{
				tag: 'emendatusenigmatica:lapis_raw_marble_ore',
				weight: 11
			},
			{
				tag: 'emendatusenigmatica:iridium_raw_marble_ore',
				weight: 1
			},
			{
				tag: 'astralsorcery:aquamarine_sand_ore',
				weight: 48
			}
		], 'chisel:marble/cracked', 'astralsorcery:marble_raw'),
		add_layers(10, 44, 0, [{
				tag: 'astralsorcery:starmetal',
				weight: 22
			},
			{
				tag: 'forbidden_arcanus:stellarite_block',
				weight: 2
			},
			{
				tag: 'astralsorcery:rock_crystal_ore',
				weight: 8
			},
			{
				tag: 'astralsorcery:starmetal_ore',
				weight: 26
			}
		], 'astralsorcery:black_marble_raw')
	], 'stellar')
	
	let patchouli_meteor_id = [
		'immersive_engineering',
		'ice_fire',
		'create',
		'iron',
		'diamond',
		'nether',
		'stone'
	];

	patchouli_meteor_id.forEach(p => {
		meteor('minecraft:barrier', 0, 0.0, 0, p)
	})

});
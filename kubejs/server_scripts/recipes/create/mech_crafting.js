onEvent('recipes', event => {

	//MECH_CRAFTER

	event.recipes.create.mechanical_crafting('magicfeather:magicfeather', [
		'ABBC ',
		'BDEBC',
		'BEFEB',
		'CBEDB',
		' CBBA'
	], {
		A: '#forge:feathers',
		B: 'create:refined_radiance',
		C: 'mysticalworld:quicksilver_block',
		D: 'naturesaura:sky_ingot',
		E: 'minecraft:end_rod',
		F: (Item.of('minecraft:elytra').ignoreNBT())
	})

	//guns
	event.recipes.create.mechanical_crafting('gunswithoutroses:diamond_sniper', [
		'A    ',
		' ABF ',
		' BCB ',
		'  BCB',
		'  DEB'
	], {
		A: '#forge:gems/diamond',
		B: '#forge:ingots/steel',
		C: '#forge:ingots/silicon_bronze',
		D: 'immersiveengineering:wooden_grip',
		E: 'quark:ravager_hide',
		F: 'immersiveengineering:toolupgrade_railgun_scope'
	})
	event.remove({
		output: '/gunswithoutroses:diamond_sniper/'
	})

	event.recipes.create.mechanical_crafting('gunswithoutroses:diamond_gatling', [
		'AAB  ',
		'AACB ',
		' BCCB',
		'  BB ',
		'  DE '
	], {
		A: '#forge:gems/diamond',
		B: '#forge:ingots/steel',
		C: '#forge:ingots/silicon_bronze',
		D: 'immersiveengineering:wooden_grip',
		E: 'quark:ravager_hide'
	})
	event.remove({
		output: '/gunswithoutroses:diamond_gatling/'
	})

	event.recipes.create.mechanical_crafting('gunswithoutroses:diamond_shotgun', [
		'A    ',
		'FACB ',
		' FCB ',
		'  DGG',
		'   EG'
	], {
		A: '#forge:gems/diamond',
		B: '#forge:ingots/steel',
		C: '#forge:ingots/silicon_bronze',
		D: 'immersiveengineering:wooden_grip',
		E: 'quark:ravager_hide',
		F: 'minecraft:leather',
		G: '#minecraft:logs'
	})
	event.remove({
		output: '/gunswithoutroses:diamond_shotgun/'
	})

	event.recipes.create.mechanical_crafting('gunswithoutroses:iron_gun', [
		'D  ',
		'BA ',
		' BA',
		' C '
	], {
		A: '#forge:ingots/iron',
		B: '#minecraft:logs',
		C: 'immersiveengineering:wooden_grip',
		D: '#forge:storage_blocks/iron'
	})
	event.remove({
		output: '/gunswithoutroses:iron_gun/'
	})

	event.recipes.create.mechanical_crafting('tiab:timeinabottle', [
		'  F  ',
		' ACA ',
		'ABEBA',
		'ABDBA',
		'ABCBA',
		' AAA '
	], {
		A: 'gobber2:gobber2_glass',
		B: 'quark:bottled_cloud',
		C: 'botania:mana_bottle',
		D: 'naturesaura:clock_hand',
		E: 'ars_nouveau:glyph_duration_down',
		F: '/minecraft:clock/'
	})

	//new_trident

	event.recipes.create.mechanical_crafting('minecraft:trident', [
		'  A A',
		' A A ',
		'  B A',
		' C A ',
		'C    '
	], {
		A: ['outvoted:kraken_tooth', 'alexsmobs:shark_tooth', 'upgrade_aquatic:thrasher_tooth'],
		B: 'minecraft:heart_of_the_sea',
		C: 'upgrade_aquatic:prismarine_rod'
	})

	//power_pots

	event.recipes.create.mechanical_crafting('ftb-power-pots:power_pot_mk1', [
		'A   A ',
		'DDEDD ',
		'ACBCAF',
		'AAAAA '
	], {
		A: '#forge:ingots/steel',
		B: '#botanypots:hopper_botany_pots',
		C: '#forge:ingots/constantan',
		D: '#forge:gems/emerald',
		E: Item.of('tconstruct:large_plate', '{Material:"tconstruct:constantan"}'),
		F: 'pneumaticcraft:printed_circuit_board'
	})

	event.recipes.create.mechanical_crafting('ftb-power-pots:power_pot_mk2', [
		'A   A ',
		'DDEDD ',
		'ACBCAF',
		'AAAAA '
	], {
		A: '#forge:ingots/steel',
		B: 'ftb-power-pots:power_pot_mk1',
		C: '#forge:ingots/constantan',
		D: '#forge:ingots/electrum',
		E: Item.of('tconstruct:large_plate', '{Material:"tconstruct:constantan"}'),
		F: 'pneumaticcraft:printed_circuit_board'
	})

	event.recipes.create.mechanical_crafting('ftb-power-pots:power_pot_mk3', [
		'A   A ',
		'DDEDD ',
		'ACBCAF',
		'AAAAA '
	], {
		A: '#forge:ingots/steel',
		B: 'ftb-power-pots:power_pot_mk2',
		C: '#forge:ingots/constantan',
		D: 'buddycards:buddysteel_ingot',
		E: Item.of('tconstruct:large_plate', '{Material:"tconstruct:constantan"}'),
		F: 'pneumaticcraft:printed_circuit_board'
	})

	event.recipes.create.mechanical_crafting('ftb-power-pots:power_pot_mk4', [
		'A   A ',
		'DDEDD ',
		'ACBCAF',
		'AAAAA '
	], {
		A: '#forge:ingots/steel',
		B: 'ftb-power-pots:power_pot_mk3',
		C: '#forge:ingots/constantan',
		D: '#forge:ingots/manyullyn',
		E: Item.of('tconstruct:large_plate', '{Material:"tconstruct:constantan"}'),
		F: 'pneumaticcraft:printed_circuit_board'
	})
});
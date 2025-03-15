onEvent('recipes', event => {

	let occ_ritual = (ritual_type, activation_item, pentacle_id, duration, ritual_dummy, inputs, result, id) => {
		event.recipes.occultism.ritual({
			ritual_type: ritual_type,
			activation_item: Item.of(activation_item).toJson(),
			pentacle_id: pentacle_id,
			duration: duration,
			ritual_dummy: Item.of(ritual_dummy).toJson(),
			ingredients: inputs.map(r => Ingredient.of(r).toJson()),
			result: Item.of(result).toJson()
		}).id('occultism:ritual/' + id)
	}

	occ_ritual('occultism:craft_with_spirit_name', 'occultism:book_of_binding_bound_djinni', 'occultism:craft_djinni', 240, 'occultism:ritual_dummy/craft_dimensional_matrix', [
			'#forge:storage_blocks/dimensional',
			'#forge:storage_blocks/quartz',
			'#forge:storage_blocks/dimensional',
			'#forge:storage_blocks/quartz',
			'#forge:storage_blocks/quartz',
			'#forge:storage_blocks/dimensional',
			'#forge:storage_blocks/dimensional',
			'#forge:storage_blocks/quartz',
			'#forge:storage_blocks/quartz',
			'#forge:storage_blocks/dimensional',
			'#forge:storage_blocks/quartz',
			'#forge:storage_blocks/dimensional'
		], 'occultism:dimensional_matrix',
		'craft_dimensional_matrix')

	occ_ritual('occultism:craft', 'occultism:book_of_binding_bound_foliot', 'occultism:craft_foliot', 240, 'occultism:ritual_dummy/craft_storage_controller_base', [
			'occultism:otherstone_pedestal',
			'#forge:ingots/gold',
			'#forge:plates/gold',
			'#forge:ingots/gold',
			'ars_nouveau:marvelous_clay'
		], 'occultism:storage_controller_base',
		'craft_storage_controller_base')

	occ_ritual('occultism:craft_with_spirit_name', 'occultism:book_of_binding_bound_foliot', 'occultism:craft_foliot', 240, 'occultism:ritual_dummy/craft_satchel', [
			'minecraft:ender_chest',
			'botania:manaweave_cloth',
			'botania:manaweave_cloth',
			'eidolon:wicked_weave',
			'#forge:dusts/corrupti',
			'occultism:spirit_attuned_gem'
		], 'occultism:satchel',
		'craft_satchel')

	occ_ritual('occultism:craft', 'occultism:book_of_binding_bound_foliot', 'occultism:craft_foliot', 240, 'occultism:ritual_dummy/craft_miner_foliot_unspecialized', [
			'occultism:magic_lamp_empty',
			'immersiveengineering:drillhead_iron',
			'emendatusenigmatica:obsidian_dust',
			'#forge:storage_blocks/dimensional'
		], 'occultism:miner_foliot_unspecialized',
		'craft_miner_foliot_unspecialized')

	occ_ritual('occultism:craft', 'occultism:book_of_binding_bound_djinni', 'occultism:craft_djinni', 480, 'occultism:ritual_dummy/craft_miner_djinni_ores', [
			Item.of('occultism:miner_foliot_unspecialized').ignoreNBT(),
			'occultism:iesnium_pickaxe',
			'immersivepetroleum:petcoke',
			'envirocore:erodium_crystal',
			'#forge:clusters'
		], 'occultism:miner_djinni_ores',
		'craft_miner_djinni_ores')

	//CUSTOMS
	occ_ritual('occultism:craft', 'occultism:book_of_binding_bound_djinni', 'occultism:craft_djinni', 240, 'kubejs:craft_infusion_pedestal', [
			'minecraft:ender_eye',
			'#forge:ingots/enderium',
			'betterendforge:violecite_pillar',
			'#forge:ingots/enderium'
		], 'betterendforge:infusion_pedestal',
		'craft_infusion_pedestal')

	occ_ritual('occultism:craft', 'occultism:book_of_binding_bound_djinni', 'occultism:craft_djinni', 480, 'kubejs:craft_location_link_book', [
			'#forge:ingots/starmetal',
			'#forge:gems/dimensional',
			'inspirations:lime_book',
			'occultism:iesnium_ingot'
		], 'calemiutils:link_book_location',
		'craft_location_link_book')

	var removedItems = ['occultism:dimensional_matrix', 'occultism:storage_controller_base', '/occultism:satchel/', 'occultism:miner_foliot_unspecialized', 'occultism:miner_djinni_ores', 'betterendforge:infusion_pedestal'];

	removedItems.forEach(r => {
		event.remove({	output: r	});
	});

});
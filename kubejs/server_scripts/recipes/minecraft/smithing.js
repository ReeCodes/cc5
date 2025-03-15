onEvent('recipes', event => {
	
	event.smithing('chiselsandbits:chisel_netherite', '/chiselsandbits:chisel_diamond/', '#forge:ingots/netherite')
	
	/*
	//RELIC_EX
	event.smithing('relicex:ring_relic', '#relicex:ring_relic', 'kubejs:purifying_rune')
	event.smithing('relicex:head_relic', '#relicex:head_relic', 'kubejs:purifying_rune')
	event.smithing('relicex:body_relic', '#relicex:body_relic', 'kubejs:purifying_rune')
	event.smithing('relicex:amulet_relic', '#relicex:necklace_relic', 'kubejs:purifying_rune')
	*/
	
	//BARRELS
	event.smithing('metalbarrels:copper_barrel', '#forge:barrels/wooden', '#forge:ingots/aluminum')
	event.smithing('metalbarrels:iron_barrel', 'metalbarrels:copper_barrel', '#forge:ingots/nickel')
	event.smithing('metalbarrels:silver_barrel', 'metalbarrels:iron_barrel', 'forbidden_arcanus:rune')
	event.smithing('metalbarrels:gold_barrel', 'metalbarrels:silver_barrel', '#forge:gems/amethyst')
	event.smithing('metalbarrels:diamond_barrel', 'metalbarrels:gold_barrel', '#forge:ingots/cobalt')
	event.smithing('metalbarrels:obsidian_barrel', 'metalbarrels:diamond_barrel', 'forbidden_arcanus:dark_rune')
	event.smithing('metalbarrels:crystal_barrel', 'metalbarrels:diamond_barrel', 'minecraft:glass')
	event.smithing('metalbarrels:netherite_barrel', 'metalbarrels:obsidian_barrel', '#forge:ingots/netherite')
	event.smithing('metalbarrels:netherite_barrel', 'metalbarrels:crystal_barrel', '#forge:ingots/netherite')
	
	//CHESTS
	event.smithing('ironchest:copper_chest', '#forge:chests/wooden', '#forge:ingots/aluminum')
	event.smithing('ironchest:iron_chest', 'ironchest:copper_chest', '#forge:ingots/nickel')
	event.smithing('ironchest:silver_chest', 'ironchest:iron_chest', 'forbidden_arcanus:rune')
	event.smithing('ironchest:gold_chest', 'ironchest:silver_chest', '#forge:gems/amethyst')
	event.smithing('ironchest:diamond_chest', 'ironchest:gold_chest', '#forge:ingots/cobalt')
	event.smithing('ironchest:obsidian_chest', 'ironchest:diamond_chest', 'forbidden_arcanus:dark_rune')
	event.smithing('ironchest:crystal_chest', 'ironchest:diamond_chest', 'minecraft:glass')
	event.smithing('ironchest:dirt_chest', '#forge:chests/wooden', 'minecraft:dirt')
	
	//COLOSSAL
	let q_iron = 'refinedstorage:quartz_enriched_iron'
	let hopper = 'minecraft:hopper'
	
	event.smithing('colossalchests:chest_wall_wood', '#minecraft:logs', '#forge:chests/wooden')
	event.smithing('colossalchests:chest_wall_copper', 'colossalchests:chest_wall_wood', '#forge:ingots/aluminum')
	event.smithing('colossalchests:chest_wall_iron', 'colossalchests:chest_wall_copper', '#forge:ingots/nickel')
	event.smithing('colossalchests:chest_wall_silver', 'colossalchests:chest_wall_iron', 'forbidden_arcanus:rune')
	event.smithing('colossalchests:chest_wall_gold', 'colossalchests:chest_wall_silver', '#forge:gems/amethyst')
	event.smithing('colossalchests:chest_wall_diamond', 'colossalchests:chest_wall_gold', '#forge:ingots/cobalt')
	event.smithing('colossalchests:chest_wall_obsidian', 'colossalchests:chest_wall_diamond', 'forbidden_arcanus:dark_rune')
	
	event.smithing('colossalchests:colossal_chest_wood', 'colossalchests:chest_wall_wood', q_iron)
	event.smithing('colossalchests:colossal_chest_copper', 'colossalchests:chest_wall_copper', q_iron)
	event.smithing('colossalchests:colossal_chest_iron', 'colossalchests:chest_wall_iron', q_iron)
	event.smithing('colossalchests:colossal_chest_silver', 'colossalchests:chest_wall_silver', q_iron)
	event.smithing('colossalchests:colossal_chest_gold', 'colossalchests:chest_wall_gold', q_iron)
	event.smithing('colossalchests:colossal_chest_diamond', 'colossalchests:chest_wall_diamond', q_iron)
	event.smithing('colossalchests:colossal_chest_obsidian', 'colossalchests:chest_wall_obsidian', q_iron)
	
	event.smithing('colossalchests:interface_wood', 'colossalchests:chest_wall_wood', hopper)
	event.smithing('colossalchests:interface_copper', 'colossalchests:chest_wall_copper', hopper)
	event.smithing('colossalchests:interface_iron', 'colossalchests:chest_wall_iron', hopper)
	event.smithing('colossalchests:interface_silver', 'colossalchests:chest_wall_silver', hopper)
	event.smithing('colossalchests:interface_gold', 'colossalchests:chest_wall_gold', hopper)
	event.smithing('colossalchests:interface_diamond', 'colossalchests:chest_wall_diamond', hopper)
	event.smithing('colossalchests:interface_obsidian', 'colossalchests:chest_wall_obsidian', hopper)
		
	//DRAWERS
	let template = 'storagedrawers:upgrade_template'
	
	event.smithing('storagedrawers:obsidian_storage_upgrade', template, '#forge:ingots/lead')
	event.smithing('storagedrawers:iron_storage_upgrade', 'storagedrawers:obsidian_storage_upgrade', '#forge:ingots/zinc')
	event.smithing('storagedrawers:gold_storage_upgrade', 'storagedrawers:iron_storage_upgrade', '#forge:ingots/electrum')
	event.smithing('storagedrawers:diamond_storage_upgrade', 'storagedrawers:gold_storage_upgrade', '#forge:gems/moonstone')
	event.smithing('storagedrawers:emerald_storage_upgrade', 'storagedrawers:diamond_storage_upgrade', 'minecraft:emerald')
	
	event.smithing('storagedrawers:one_stack_upgrade', template, 'minecraft:flint')
	event.smithing('storagedrawers:void_upgrade', template, '#forge:obsidian')
	event.smithing('storagedrawers:conversion_upgrade', template, '#forge:gems/lapis')
	event.smithing('storagedrawers:redstone_upgrade', template, 'minecraft:redstone_torch')
	event.smithing('storagedrawers:min_redstone_upgrade', template, '#forge:dusts/redstone')
	event.smithing('storagedrawers:max_redstone_upgrade', template, '#forge:storage_blocks/redstone')
	event.smithing('storagedrawers:illumination_upgrade', template, 'minecraft:glowstone_dust')
	event.smithing('storagedrawers:fill_level_upgrade', template, 'minecraft:comparator')
});


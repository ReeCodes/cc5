onEvent('recipes', event => {
	event.replaceInput({}, 'ftbic:basic_generator', 'ftbic:machine_block')

	event.replaceInput({output: 'occultism:candle_white', type: 'minecraft:crafting_shaped'}, 'occultism:tallow', 'quark:tallow')
	
	event.replaceInput({output: 'eidolon:candle', type: 'minecraft:crafting_shaped'}, 'eidolon:tallow', 'quark:tallow')
	
	event.replaceInput({output: 'bhc:canister', type: 'minecraft:crafting_shaped'}, 'minecraft:bone', 'iceandfire:dragonbone')
	
	event.replaceInput({output: 'ironfurnaces:augment_speed', type: 'minecraft:crafting_shaped'}, 'minecraft:sugar', 'charm:sugar_block')
	
	event.replaceInput({output: (Item.of('watercan:watercan_stone').ignoreNBT()), type: 'minecraft:crafting_shaped'}, 'minecraft:bowl', (Item.of('watercan:watercan_wood').ignoreNBT()))
	event.replaceInput({output: (Item.of('watercan:watercan_iron').ignoreNBT()), type: 'minecraft:crafting_shaped'}, 'minecraft:bucket', (Item.of('watercan:watercan_stone').ignoreNBT()))
	event.replaceInput({output: (Item.of('watercan:watercan_gold').ignoreNBT()), type: 'minecraft:crafting_shaped'}, 'minecraft:bucket', (Item.of('watercan:watercan_iron').ignoreNBT()))
	event.replaceInput({output: (Item.of('watercan:watercan_diamond').ignoreNBT()), type: 'minecraft:crafting_shaped'}, 'minecraft:bucket', (Item.of('watercan:watercan_gold').ignoreNBT()))
	
	event.replaceInput({output: 'powah:furnator_starter', type: 'minecraft:crafting_shaped'}, 'minecraft:furnace', 'industrialforegoing:pitiful_generator')
	
	event.replaceInput({output: 'forbidden_arcanus:bat_soup', type: 'minecraft:crafting_shapeless'}, 'forbidden_arcanus:bat_wing', 'xreliquary:bat_wing')
	
	event.replaceInput({output: '@zycraft'}, 'zycraft:aluminium', '#forge:ingots/aluminum')
	
	event.replaceInput({output: 'bhc:red_heart_canister'}, 'bhc:wither_bone', 'tconstruct:necrotic_bone')
	
	event.replaceInput({output: 'tinyredstone:redstone_panel'}, 'tinyredstone:silicon', 'refinedstorage:silicon')
	
	event.replaceInput({output: 'framedblocks:framed_cube'}, '#minecraft:planks', 'minecraft:scaffolding')
	
	event.replaceInput({output: 'zycraft:the_aurey_block'}, 'zycraft:aluminium_block', '#forge:storage_blocks/aluminum')
	
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'forbidden_arcanus:dragon_scale', 'bountifulbaubles:ender_dragon_scale')
	
	event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'forbidden_arcanus:dragon_scale', 'bountifulbaubles:ender_dragon_scale')
	
	event.replaceInput({}, 'immersiveengineering:coal_coke', '#forge:gems/coal_coke')
	event.replaceInput({}, 'immersiveengineering:coke', '#forge:storage_blocks/coal_coke')
	
	//etech_voidminer	
	event.replaceInput({output: '/envirotech:.+_void_miner_ccu/'}, '#forge:storage_blocks/diamond', 'kubejs:pearlescent_core')
	
	//wires
	event.replaceInput({}, 'ftbic:gold_wire', '#forge:wires/gold')
	event.replaceInput({}, 'ftbic:aluminum_wire', '#forge:wires/aluminum')
	event.replaceInput({}, 'ftbic:copper_wire', '#forge:wires/copper')
	
	//rs_silicon
	event.replaceInput({}, 'refinedstorage:silicon', '#forge:gems/silicon')
	
	//rftools_dimshards
	event.replaceInput({}, 'rftoolsbase:dimensionalshard', '#forge:gems/dimensional')
	
	//lanterns
	event.replaceInput({}, 'minecraft:lantern', ['minecraft:lantern', '#lanterncolors:lanterns'])
	
	//container_converter
	event.replaceInput({}, ['minecraft:chest', '#forge:chests', '#forge:chests/wooden'], 'quark:oak_chest')
	event.replaceInput({}, ['minecraft:barrel', '#forge:barrels/wooden'], 'crumbs:oak_barrel')
	
	//danks
	event.replaceInput({output: 'dankstorage:dank_1'}, 'minecraft:coal', 'evilcraft:dark_gem')
	event.replaceInput({output: 'dankstorage:dank_3'}, 'minecraft:gold_block', '#forge:storage_blocks/electrum')
	event.replaceInput({output: 'dankstorage:dank_6'}, 'minecraft:obsidian', '#forge:storage_blocks/manyullyn')
	event.replaceInput({output: 'dankstorage:dank_7'}, 'minecraft:nether_star', 'kubejs:rainbow_gem')
	
	//tetra
	event.replaceInput({id: 'tetra:hammer/oak'}, 'minecraft:oak_planks', Ingredient.of(['#minecraft:planks']).filter(Ingredient.of(['minecraft:acacia_planks', 'minecraft:birch_planks', 'minecraft:dark_oak_planks', 'minecraft:jungle_planks', 'minecraft:spruce_planks']).not()))
	
	//obscuria
	event.replaceInput({output: '@ob_core'}, 'ob_core:iron_gear', '#forge:gears/iron')
	
	//platinum_dragon_armor_single
	event.replaceInput({output: 'wyrmroost:platinum_dragon_armor'}, 'wyrmroost:platinum_ingot', '#forge:ingots/platinum')
	event.replaceInput({output: 'wyrmroost:platinum_dragon_armor'}, 'wyrmroost:platinum_block', '#forge:storage_blocks/platinum')
	
	//drawers
	event.replaceInput({output: '/storagedrawers:.+trim$/'}, '#forge:rods/wooden', '#forge:chests/wooden')
	event.replaceInput({output: 'framedcompactdrawers:framed_trim'}, '#minecraft:planks', '#forge:chests/wooden')
	
	//OUTPUT
	
	//bloodmagic_sands	
	event.replaceOutput({}, 'bloodmagic:ironsand', '#forge:dusts/iron')
	event.replaceOutput({}, 'bloodmagic:goldsand', '#forge:dusts/gold')
	event.replaceOutput({}, 'bloodmagic:sulfur', '#forge:dusts/sulfur')
	event.replaceOutput({}, 'bloodmagic:saltpeter', '#forge:dusts/saltpeter')
	event.replaceOutput({}, 'bloodmagic:saltpeter', 'immersiveengineering:dust_saltpeter')
	
	event.replaceOutput({}, 'immersiveengineering:coal_coke', '#forge:gems/coal_coke')
});
function random(ary) {
	return ary[Math.floor(Math.random() * ary.length)];
}

let golemType = [
	'golems:golem_andesite',
	'golems:golem_basalt',
	'golems:golem_blackstone',
	'golems:golem_bone',
	'golems:golem_bookshelf',
	'golems:golem_clay',
	'golems:golem_coal',
	'golems:golem_colored_terracotta',
	'golems:golem_concrete',
	'golems:golem_coral',
	'golems:golem_crafting',
	'golems:golem_crimson_stem',
	'golems:golem_crying_obsidian',
	'golems:golem_diamond',
	'golems:golem_diorite',
	'golems:golem_dispenser',
	'golems:golem_emerald',
	'golems:golem_end_stone',
	'golems:golem_furnace',
	'golems:golem_glass',
	'golems:golem_glowstone',
	'golems:golem_gold',
	'golems:golem_granite',
	'golems:golem_honey',
	'golems:golem_honeycomb',
	'golems:golem_ice',
	'golems:golem_kelp',
	'golems:golem_lapis',
	'golems:golem_leaves',
	'golems:golem_magma',
	'golems:golem_melon',
	'golems:golem_mushroom',
	'golems:golem_nether_brick',
	'golems:golem_nether_wart',
	'golems:golem_netherite',
	'golems:golem_obsidian',
	'golems:golem_prismarine',
	'golems:golem_purpur',
	'golems:golem_quartz',
	'golems:golem_red_sandstone',
	'golems:golem_redstone',
	'golems:golem_redstone_lamp',
	'golems:golem_sandstone',
	'golems:golem_sea_lantern',
	'golems:golem_shroomlight',
	'golems:golem_slime',
	'golems:golem_smooth_stone',
	'golems:golem_sponge',
	'golems:golem_stained_glass',
	'golems:golem_straw',
	'golems:golem_terracotta',
	'golems:golem_tnt',
	'golems:golem_warped_stem',
	'golems:golem_wooden',
	'golems:golem_wool',
	'golems_ie:golem_concrete',
	'golems_ie:golem_copper_coil',
	'golems_ie:golem_cushion',
	'golems_ie:golem_electrum_coil',
	'golems_ie:golem_hv_coil',
	'golems_ie:golem_insulating_glass',
	'golems_ie:golem_leaded_concrete',
	'golems_misc:golem_aluminum',
	'golems_misc:golem_charcoal',
	'golems_misc:golem_coal_coke',
	'golems_misc:golem_constantan',
	'golems_misc:golem_copper',
	'golems_misc:golem_electrum',
	'golems_misc:golem_lead',
	'golems_misc:golem_nickel',
	'golems_misc:golem_silver',
	'golems_misc:golem_steel',
	'golems_misc:golem_uranium',
	'golems_quark:golem_basalt',
	'golems_quark:golem_biotite',
	'golems_quark:golem_blaze_lantern',
	'golems_quark:golem_brimstone',
	'golems_quark:golem_duskbound',
	'golems_quark:golem_duskbound_lamp',
	'golems_quark:golem_elder_prismarine',
	'golems_quark:golem_elder_sea_lantern',
	'golems_quark:golem_framed_glass',
	'golems_quark:golem_glowshroom',
	'golems_quark:golem_iron_plate',
	'golems_quark:golem_jasper',
	'golems_quark:golem_limestone',
	'golems_quark:golem_marble',
	'golems_quark:golem_midori',
	'golems_quark:golem_permafrost',
	'golems_quark:golem_quilted_wool',
	'golems_quark:golem_slate',
	'golems_quark:golem_soul_sandstone',
	'golems_quark:golem_sturdy_stone',
	'golems_quark:golem_tallow'
];

onEvent('item.right_click', event => {
	if (event.item.id == 'kubejs:golem_summoner') {
		let lookAt = event.player.rayTrace(5)
		if (lookAt.block !== null) {
			let rayx = lookAt.block.x
			let rayy = lookAt.block.y + 1
			let rayz = lookAt.block.z
			event.player.playSound('undergarden:entity.minion_shoot');
			event.player.addItemCooldown(Item.of('kubejs:golem_summoner'), 20)
			event.server.runCommandSilent(`execute as ${event.player.name} in ${event.player.world.dimension} run summon ${random(golemType)} ${Math.round(rayx)} ${Math.round(rayy)} ${Math.round(rayz)} {isChild:1b}`);
			if (!event.player.isCreativeMode()) {
				event.item.setCount(event.item.getCount() - 1)
			}
		}
	}
});
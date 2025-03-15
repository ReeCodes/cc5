onEvent('item.right_click', event => {

	if (event.item.id == 'kubejs:delight_builder') {
		let check_sky = event.server.runCommandSilent(`execute as ${event.player.name} at ${event.player.name} in ${event.player.world.dimension} if block ~ ~ ~ minecraft:air if blocks ~ ~ ~ ~ 254 ~ ~ ~1 ~ all`);
		if (event.player.world.isOverworld()) {
			if (check_sky == 1) {
				event.player.playSound('rats:biplane_loop');
				event.player.playSound('tconstruct:little_saw');
				//EXECUTE
				event.server.runCommandSilent(`execute as ${event.player.name} run summon minecraft:falling_block ${event.player.x} ${event.player.y+35} ${event.player.z} {BlockState:{Name:"kubejs:lootblock_builder"},Time:30}`)
				event.server.runCommandSilent(`execute as ${event.player.name} run particle atmospheric:morado_blossom ${event.player.x} ${event.player.y} ${event.player.z} 1 75 1 4 300`)
				if (!event.player.isCreativeMode()) {
					event.item.setCount(event.item.getCount() - 1)
				}
			} else {
				event.player.tell(text.red("You don't have clear sight to the sky..."))
			}
		}
	}
});
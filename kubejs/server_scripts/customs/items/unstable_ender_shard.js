onEvent('item.right_click', event => {
	if (event.item.id == 'kubejs:unstable_endershard') {
		event.player.addItemCooldown(Item.of('kubejs:unstable_endershard'), 900)
		event.player.playSound('minecraft:block.glass.break');
		event.server.runCommandSilent(`effect give ${event.player.name} champions:paralysis 7 0 true`);
		event.server.schedule(5500, cb => {
			event.server.runCommandSilent(`execute as ${event.player.name} run spreadplayers ~ ~ 50000 100000 false ${event.player.name}`);
			event.server.tell([text.yellow(event.entity.toString()), ' used an ', text.lightPurple('Unstable Ender Shard')])
		})
		if (!event.player.isCreativeMode()) {
			event.item.setCount(event.item.getCount() - 1)
		}
	}
})
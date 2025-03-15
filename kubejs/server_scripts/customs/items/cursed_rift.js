// priority: 93

let randomize = (a) => {
	return a[Math.floor(Math.random() * a.length)];
}

function cursedSummon(event, entityData) {
	let pUUID = event.player.getFullNBT().UUID;
	let pickedGateSize = randomize(gateSize);
	event.server.runCommandSilent(`execute as ${event.player.name} in ${event.player.world.dimension} run open_gateway ${event.player.name} gateways:${entityData}_gate${pickedGateSize}`)
}

let gateSize = ['_small', '', '_large'];
let riftItem = 'kubejs:essence_cursed';

onEvent('item.right_click', event => {
	if (event.item.id == riftItem) {
		let check_sky = event.server.runCommandSilent(`execute as ${event.player.name} at ${event.player.name} in ${event.player.world.dimension} if block ~ ~ ~ minecraft:air if blocks ~ ~ ~ ~ 254 ~ ~ ~1 ~ all`);
		if (check_sky) {
			if (!event.world.isDaytime()) {
				event.player.playSound('blue_skies:entity.alchemist.prepare_conversion');
				event.player.addItemCooldown(Item.of(riftItem), 1200)
				event.server.scheduleInTicks(1, cb => {
					let randomEntity = randomize(global.gateData)
					cursedSummon(event, randomEntity.entityName.replace('minecraft:', '').replace(':', '_'))
				})

				if (!event.player.isCreativeMode()) {
					event.item.setCount(event.item.getCount() - 1)
				}
			} else {
				event.player.tell(text.red("It\'s not dark enough outside..."))
			}
		} else {
			event.player.tell(text.red("You don't have clear sight to the sky..."))
		}
	}
})
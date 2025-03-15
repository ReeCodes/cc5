onEvent('entity.death', event => {
	if (!event.entity.isPlayer()) return
	let pDeathData = event.entity.persistentData
    pDeathData.deathx = event.entity.x
    pDeathData.deathy = event.entity.y
    pDeathData.deathz = event.entity.z
	pDeathData.deathdim = event.entity.world.dimension
	pDeathData.respawned = 1;
})

onEvent('item.right_click', event => {
	if (event.item.id == 'kubejs:dreadful_contract') {
		if (event.entity.persistentData.respawned == 1) {
			event.player.playSound('evilcraft:effect.box.beam')
			event.server.runCommandSilent(`execute as ${event.player.name} in ${event.entity.persistentData.deathdim} run tp ${event.player.name} ${Math.floor(event.entity.persistentData.deathx)} ${Math.floor(event.entity.persistentData.deathy)} ${Math.floor(event.entity.persistentData.deathz)}`)
			let r = Math.random();
			if (r < 0.125) {
				event.player.playSound('quark:entity.stoneling.meep')
				event.server.runCommandSilent(`execute as ${event.player.name} run effect give ${event.player.name} undergarden:brittleness 45 0 true`);
				event.player.setStatusMessage(Text.of('You have become more fragile...').red());
			}
			event.item.setCount(event.item.getCount() - 1)
			event.player.persistentData.respawned = 0;
		} else {
			event.player.tell('You have no current deaths!')
		}
	}
})

onEvent('item.right_click', event => {
	if (event.item.id == 'kubejs:anointed_contract') {
		if (event.entity.persistentData.respawned == 1) {
			event.player.playSound('mowziesmobs:barakoa.healstart3')
			event.server.runCommandSilent(`execute as ${event.player.name} in ${event.entity.persistentData.deathdim} run tp ${event.player.name} ${Math.floor(event.entity.persistentData.deathx)} ${Math.floor(event.entity.persistentData.deathy)} ${Math.floor(event.entity.persistentData.deathz)}`)
			event.item.setCount(event.item.getCount() - 1)
			event.player.persistentData.respawned = 0;
			} else {
		event.player.tell('You have no current deaths!')
		}
	}
})
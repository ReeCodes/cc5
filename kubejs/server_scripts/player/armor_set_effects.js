onEvent("player.tick", event => {
	if (event.player.ticksExisted % 400 == 0) {

		let pHeadArmor = event.player.getHeadArmorItem().id
		let pChestArmor = event.player.getChestArmorItem().id
		let pLegsArmor = event.player.getLegsArmorItem().id
		let pFeetArmor = event.player.getFeetArmorItem().id

		for (let j = 0; j < global.armorSets.length; j++) {
			let armorSet = global.armorSets[j];
			if (!armorSet.partial) {
				if (pHeadArmor == armorSet.head && pChestArmor == armorSet.chestplate && pLegsArmor == armorSet.leggings && pFeetArmor == armorSet.boots) {
					for (let i = 0; i < armorSet.effects.length; i++) {
						let armorEffects = armorSet.effects[i];
						event.server.runCommandSilent(`effect give ${event.player.name} ${armorEffects.effect} 20 ${armorEffects.amp} true`)
					}
				}
			} else {
				if (pHeadArmor == armorSet.partial || pChestArmor == armorSet.partial || pLegsArmor == armorSet.partial || pFeetArmor == armorSet.partial) {
					for (let i = 0; i < armorSet.effects.length; i++) {
						let armorEffects = armorSet.effects[i];
						event.server.runCommandSilent(`effect give ${event.player.name} ${armorEffects.effect} 20 ${armorEffects.amp} true`)
					}
				}
			}
		}
	}
})
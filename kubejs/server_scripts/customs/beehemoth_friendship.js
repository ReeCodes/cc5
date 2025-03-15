onEvent('item.entity_interact', event => {
	if (event.hand == MAIN_HAND) {
		if (event.target.type == 'the_bumblezone:beehemoth') {
			if (event.item.id == 'buzzier_bees:honey_wand') {
				event.cancel()
				if (event.target.fullNBT.friendship < 1000) event.player.setStatusMessage(Text.of(`Friendship status: ${event.target.fullNBT.friendship}/1000`).gold())
				else event.player.setStatusMessage(Text.of(`Friendship status: Maxed!`).gold())
			}
		}
	}
})
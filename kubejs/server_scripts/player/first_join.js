onEvent('player.logged_in', event => {
	if (!event.player.stages.has('starting_items')) {
		event.player.give('ftbquests:book')
		event.player.give('kubejs:unstable_endershard')
		event.player.stages.add('starting_items')
	}
	if (!event.player.stages.has('shaders_info')) {
		event.player.tell([Text.of(`[INFO] `).gray(), Text.of(`Press '#' to toggle shaders for better FPS, if needed.`).yellow()])
		event.player.stages.add('shaders_info')
	}
})
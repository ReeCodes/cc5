events.listen('item.right_click', event => {
	if (event.item.id == 'kubejs:orb_of_spectral_sight') {
		event.player.playSound('forbidden_arcanus:runic_tenebris_core_activated');
		event.server.runCommandSilent('effect give ' + event.player.name + ' forbidden_arcanus:spectral_vision 300 0 true');
		if (!event.player.isCreativeMode()) {
			event.item.setCount(event.item.getCount() - 1)
		}
	}
});
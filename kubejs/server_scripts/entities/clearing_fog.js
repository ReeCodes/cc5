var whitelist = Ingredient.matchAny([
	'/astralsorcery:.+crystal/',
	'/astralsorcery:.+powder/',
	'@botania',
	'@sophisticatedbackpacks',
	'@mythicbotany',
	'#create:crushed_ores',
	'minecraft:gold_ingot'
])

function clearingFog(server) {
	let itemCount = 0;
	var itemList = server.getEntities('@e[type=item]')
	itemList.forEach(function (entity) {
		if (!whitelist.test(entity.item)) {
			entity.kill()
			itemCount++
		}
	})
	server.tell([Text.of(`Clearing Fog: Vanished ${itemCount.toFixed(0)} items.`).italic().gray()])
}

onEvent('server.load', event => {
	event.server.schedule(MINUTE * 25, event.server, function (callback) {
		callback.data.tell([Text.of(`Clearing Fog: Vanishing all items on ground in one minute...`).italic().gray()])
		callback.data.schedule(MINUTE * 1, callback.data, function (callback2) {
			callback2.data.tell([Text.of(`Clearing Fog: Vanishing items in 3`).italic().gray()])
			callback2.data.schedule(SECOND * 1.25, callback.data, function (callback3) {
				callback3.data.tell([Text.of(`Clearing Fog: 2`).italic().gray()])
				callback3.data.schedule(SECOND * 1.25, callback.data, function (callback4) {
					callback4.data.tell([Text.of(`Clearing Fog: 1`).italic().gray()])
					clearingFog(callback4.data)
				})
			})
		})
		callback.reschedule()
	})
})

onEvent('server.custom_command.clearingfog', event => {
	clearingFog(event.server)
})
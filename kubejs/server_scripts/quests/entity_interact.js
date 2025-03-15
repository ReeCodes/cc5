onEvent('item.entity_interact', event => {
	if (event.getItem().id == 'forcecraft:force_shears' && event.target.type == 'minecraft:pig') {
		    event.player.data.ftbquests.addProgress('4CC5BF13B2C84A6A', 1)
      }
	if (event.getItem().id == 'forcecraft:force_shears' && event.target.type == 'minecraft:cow') {
		    event.player.data.ftbquests.addProgress('0419A933308ECCD5', 1)
      }
	if (event.getItem().id == 'forcecraft:force_shears' && event.target.type == 'minecraft:chicken') {
		    event.player.data.ftbquests.addProgress('2E1F91D9C00E4023', 1)
      }
})
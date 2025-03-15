onEvent('recipes', event => {

	let multiSmelt = (output, input, includeBlasting) => {
		event.smelting(output, input)

		if (includeBlasting) {
			event.blasting(output, input)
		}
	}
	event.smelting(Item.of('industrialforegoing:tinydryrubber', 1), 'rats:raw_plastic')
})
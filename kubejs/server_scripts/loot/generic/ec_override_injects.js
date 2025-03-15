onEvent('generic.loot_tables', event => {
	event.addGeneric('evilcraft:inject/chests/condensed_blood', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "empty"
			})
		})
	})
	event.addGeneric('evilcraft:inject/chests/origins_of_darkness', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "empty"
			})
		})
	})
	event.addGeneric('evilcraft:inject/chests/box_of_eternal_closure', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "empty"
			})
		})

		table.addPool(pool => {
			pool.rolls = 1;

			const ec_box = [{
					playerName: 'kroeserr',
					pUUID: '068d4de0-3a75-4c6a-9f01-8c37e16a394c'
				},
				{
					playerName: '_EeB_',
					pUUID: 'e1dc75c6-dcf9-4e0c-8fbf-9c6e5e44527c'
				},
				{
					playerName: 'Davivs69',
					pUUID: '777e7aa3-9373-4511-8d75-f99d23ebe252'
				},
				{
					playerName: 'Jona',
					pUUID: '3e13f558-fb72-4949-a842-07879924bc49'
				},
				{
					playerName: 'dodo3231',
					pUUID: 'b5c31e33-8224-4f96-a4bf-73721be9d2ec'
				},
				{
					playerName: '_KillaH229_',
					pUUID: 'b2faeaab-fc87-4f91-98d3-836024f268ae'
				},
				{
					playerName: 'iChun',
					pUUID: '0b7509f0-2458-4160-9ce1-2772b9a45ac2'
				},
				{
					playerName: 'ReeReeQ',
					pUUID: '8dd44b9b-a1d4-4a73-a8c9-ad186cc988f1'
				}
			];

			for (let i = 0; i < ec_box.length; i++) {
				let b = ec_box[i];

				pool.addEntry({
					"type": "item",
					"entryName": `evilcraft:box_of_eternal_closure_player_${b.playerName}`,
					"name": "evilcraft:box_of_eternal_closure",
					"functions": [{
						"function": "set_nbt",
						"tag": `{playerName:\"${b.playerName}\",playerId:\"${b.pUUID}\",spiritTag:{playerName:\"${b.playerName}\",playerId:\"${b.pUUID}\",innerEntity:\"\",remainingLife:0,isSwarm:0b,swarmTier:0,buildupDuration:0,frozenDuration:0}}`
					}]
				})
			}
				pool.addEntry({
					"type": "empty",
					"weight": 155 + ec_box.length
				})
		})
	})
})
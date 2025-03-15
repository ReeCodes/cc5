let m_json = {}

onEvent('server.datapack.first', event => {
		event.addJson(`malum:farmingforblockheads_compat/saplings.json`, m_json)
})
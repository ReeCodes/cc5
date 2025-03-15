const $ItemFiltersAPI = java('dev.latvian.mods.itemfilters.api.ItemFiltersAPI');

$ItemFiltersAPI.registerCustomFilter('brew_key', item => {
	let itemKJS = item.asKJS();
	return !!itemKJS.getNbt() && !!itemKJS.getNbt().brewKey;
})

$ItemFiltersAPI.registerCustomFilter('fam_ring', item => {
	let itemKJS = item.asKJS();
	return !!itemKJS.getNbt() && !!itemKJS.getNbt().occupied;
})

$ItemFiltersAPI.registerCustomFilter('no_nbt', item => {
	return !item.asKJS().hasNBT();
})
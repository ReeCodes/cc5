onEvent('recipes', event => {

let woodcutter = (input, output, count, id) => {
  event.recipes.environmental.sawing({
    ingredient: Ingredient.of(input).toJson(),
    result: output,
	count: count
  }).id('environmental:crafting/sawmill/'+id)
}
	
var drawersWood = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped'];

drawersWood.forEach(w => {
woodcutter('storagedrawers:'+w+'_trim', 'storagedrawers:'+w+'_full_drawers_1', 1, 'trim_to_'+w+'_drawer_1')
woodcutter('storagedrawers:'+w+'_trim', 'storagedrawers:'+w+'_full_drawers_2', 1, 'trim_to_'+w+'_drawer_2')
woodcutter('storagedrawers:'+w+'_trim', 'storagedrawers:'+w+'_full_drawers_4', 1, 'trim_to_'+w+'_drawer_4')

woodcutter('storagedrawers:'+w+'_full_drawers_1', 'storagedrawers:'+w+'_half_drawers_1', 2, 'drawer_to_'+w+'_half_1')
woodcutter('storagedrawers:'+w+'_full_drawers_2', 'storagedrawers:'+w+'_half_drawers_2', 2, 'drawer_to_'+w+'_half_2')
woodcutter('storagedrawers:'+w+'_full_drawers_4', 'storagedrawers:'+w+'_half_drawers_4', 2, 'drawer_to_'+w+'_half_4')

event.recipes.createCutting('storagedrawers:'+w+'_full_drawers_1', 'storagedrawers:'+w+'_trim').id('create:cutting/'+w+'full_1')
event.recipes.createCutting('storagedrawers:'+w+'_full_drawers_2', 'storagedrawers:'+w+'_trim').id('create:cutting/'+w+'full_2')
event.recipes.createCutting('storagedrawers:'+w+'_full_drawers_4', 'storagedrawers:'+w+'_trim').id('create:cutting/'+w+'full_4')

event.recipes.createCutting('2x storagedrawers:'+w+'_half_drawers_1', 'storagedrawers:'+w+'_full_drawers_1').id('create:cutting/'+w+'half_1')
event.recipes.createCutting('2x storagedrawers:'+w+'_half_drawers_2', 'storagedrawers:'+w+'_full_drawers_2').id('create:cutting/'+w+'half_2')
event.recipes.createCutting('2x storagedrawers:'+w+'_half_drawers_4', 'storagedrawers:'+w+'_full_drawers_4').id('create:cutting/'+w+'half_4')
})
//framed
event.recipes.createCutting('framedcompactdrawers:framed_full_one', 'framedcompactdrawers:framed_trim')
event.recipes.createCutting('framedcompactdrawers:framed_full_two', 'framedcompactdrawers:framed_trim')
event.recipes.createCutting('framedcompactdrawers:framed_full_four', 'framedcompactdrawers:framed_trim')

event.recipes.createCutting('2x framedcompactdrawers:framed_half_one', 'framedcompactdrawers:framed_full_one')
event.recipes.createCutting('2x framedcompactdrawers:framed_half_two', 'framedcompactdrawers:framed_full_two')
event.recipes.createCutting('2x framedcompactdrawers:framed_half_four', 'framedcompactdrawers:framed_full_four')

woodcutter('framedcompactdrawers:framed_trim', 'framedcompactdrawers:framed_full_one', 1, 'trim_to_framed_drawer_1')
woodcutter('framedcompactdrawers:framed_trim', 'framedcompactdrawers:framed_full_two', 1, 'trim_to_framed_drawer_2')
woodcutter('framedcompactdrawers:framed_trim', 'framedcompactdrawers:framed_full_four', 1, 'trim_to_framed_drawer_4')

woodcutter('framedcompactdrawers:framed_full_one', 'framedcompactdrawers:framed_half_one', 2, 'drawer_to_framed_half_1')
woodcutter('framedcompactdrawers:framed_full_two', 'framedcompactdrawers:framed_half_two', 2, 'drawer_to_framed_half_2')
woodcutter('framedcompactdrawers:framed_full_four', 'framedcompactdrawers:framed_half_four', 2, 'drawer_to_framed_half_4')

woodcutter('/storagedrawers:.+_trim/', 'storagedrawers:upgrade_template', 1, 'template')
event.recipes.createCutting('storagedrawers:upgrade_template', '/storagedrawers:.+_trim/')
});

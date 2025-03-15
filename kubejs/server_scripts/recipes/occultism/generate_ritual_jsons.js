//priority: 3
	
const ritualDummies = [
	{name: 'Craft Infusion Pedestal', tooltip: 'The Pedestal allows for more complicated crafting rituals.'},
	{name: 'Craft Location Link Book', tooltip: 'Allows you to teleport to an assigned location set by the book.'}];

let output = {}

for (i of ritualDummies) {
  output[`item.kubejs.${i.name.replace(/\s/g, '_').toLowerCase()}`] = 'Ritual: '+i.name
  output[`item.kubejs.${i.name.replace(/\s/g, '_').toLowerCase()}.tooltip`] = i.tooltip
};

JsonIO.write('kubejs/assets/kubejs/lang/en_us.json', output);
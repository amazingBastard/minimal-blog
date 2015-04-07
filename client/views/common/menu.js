Template.menu.rendered = function() {
	$('.ui.sidebar.menu').sidebar('setting', 'transition', 'overlay').sidebar('attach events', '.footer .ui.icon.button');
};

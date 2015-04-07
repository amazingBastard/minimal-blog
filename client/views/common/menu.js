Template.menu.rendered = function() {
	$('.ui.sidebar.menu').sidebar('setting', 'transition', 'overlay').sidebar('attach events', '.footer .ui.icon.button');
};

Template['menu'].events({
	'click .ui.bottom.menu .item': function() {
		$('.ui.bottom.menu').addClass('animating');
    $('.ui.bottom.menu').removeClass('visible');
    $('.layout').removeClass('dimmed');

    setTimeout(function() {
      $('.ui.bottom.menu').removeClass('overlay');
      $('.ui.bottom.menu').removeClass('animating');
    }, 600);
	}
});

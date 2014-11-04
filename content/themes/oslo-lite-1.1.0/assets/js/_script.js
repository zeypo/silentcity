/** Functions **/
$(function(){

    _app.init();

});

(function(window)
{
    var _app = 
    {
        $toggleul : null,
        
        init : function()
        {
            self.$toggleul = $('.toggle-ul');

            self.initHtml();
            
            $('.toggle-tags').on('click', function(e){
                e.preventDefault();
                self.tagtoggle($(this));
            });
        },

        initHtml : function()
        {
            self.$toggleul.toggle();
        },

        tagtoggle : function($toggle)
        {
            $toggle.parent().find('.toggle-ul').animate({
                'height' : "toggle"
            }, 200);
        }
    }

    var self = _app;
    window._app = _app;

})(window);
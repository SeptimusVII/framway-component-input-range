module.exports = function(app){
    var InputRange = Object.getPrototypeOf(app).InputRange = new app.Component("input-range");
    // InputRange.debug = true;
    InputRange.createdAt      = "2.0.2";
    InputRange.lastUpdate     = "2.0.2";
    InputRange.version        = "1";
    // InputRange.factoryExclude = true;
    // InputRange.loadingMsg     = "This message will display in the console when component will be loaded.";
    // InputRange.requires       = [];
    InputRange.prototype.onCreate = function(){
        var range = this;
        range.min = (range.min !== undefined) ? range.min : +range.getAttr('min', 0);
        range.max = (range.max !== undefined) ? range.max : +range.getAttr('max', 100);
        range.val = (range.val !== undefined) ? range.val : +range.getAttr('value', 50);

        range.$el.attr('style','--min: '+range.min+'; --max: '+range.max+'; --val:'+range.val+'');
        range.$el.on('input', function(){
            this.style.setProperty('--val', +this.value)
        }).trigger('input');

        return range;
    }
    
    $(function () {
        $('input[type="range"]').not('.custom')['input-range']();
        utils.addHtmlHook('input[type="range"]:not(.custom)', function(item){
            item['input-range']();
        });
    });
    return InputRange;
}
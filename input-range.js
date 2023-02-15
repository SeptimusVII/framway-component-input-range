module.exports = function(app){
    var InputRange = Object.getPrototypeOf(app).InputRange = new app.Component("input-range");
    // InputRange.debug = true;
    InputRange.createdAt      = "2.0.1";
    InputRange.lastUpdate     = "2.0.1";
    InputRange.version        = "1";
    // InputRange.factoryExclude = true;
    // InputRange.loadingMsg     = "This message will display in the console when component will be loaded.";
    // InputRange.requires       = [];

    // InputRange.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return InputRange;
}
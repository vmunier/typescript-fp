define(["require", "exports", './Option', './List'], function(require, exports, _option, _list) {
    
    

    function isTraversable(a) {
        return exports.isList(a) || exports.isOption(a);
    }
    exports.isTraversable = isTraversable;

    function isList(a) {
        return (a instanceof _list.Cons) || (a instanceof _list.Nil);
    }
    exports.isList = isList;

    function isOption(a) {
        return (a instanceof _option.Some) || (a instanceof _option.None);
    }
    exports.isOption = isOption;
});

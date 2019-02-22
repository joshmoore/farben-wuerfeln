// http://jsfiddle.net/M4teA/2/
//
$( document.body ).click(function() {
    alert('Hi I am bound to the body!');
});

// $( '#bar' ).click(function(e) {
//    alert('I am the span and I do prevent propagation');
//    e.stopPropagation();
//});

var _old = jQuery.Event.prototype.stopPropagation;

jQuery.Event.prototype.stopPropagation = function() {
    this.target.nodeName !== 'SPAN' && _old.apply( this, arguments );
};


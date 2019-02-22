// http://jsfiddle.net/M4teA/2/
//
$( document.body ).click(function() {
    var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    var color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;

});

// $( '#bar' ).click(function(e) {
//    alert('I am the span and I do prevent propagation');
//    e.stopPropagation();
//});

var _old = jQuery.Event.prototype.stopPropagation;

jQuery.Event.prototype.stopPropagation = function() {
    this.target.nodeName !== 'SPAN' && _old.apply( this, arguments );
};


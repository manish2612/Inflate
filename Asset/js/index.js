$(function() {
    $('.tiles').inflate({
        width: 240,
        height: 240,
        elements: ".tile",
        scale: 40
    });
    $('.code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});
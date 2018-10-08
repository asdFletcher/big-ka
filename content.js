// elements to enlarge
var classNames = [
    "scratchpad-wrap", //419
    "wrapScratchpadInner_poyjc", //400
    //"ace_content"
]

// alternate code:
// document.getElementsByClassName("scratchpad-wrap")[0].setAttribute("style", "height:800px");
// document.getElementsByClassName("wrapScratchpadInner_poyjc")[0].setAttribute("style", "height:800px");

// list of elements to delete
var deleteTheseClasses = [
    "default_olfzxm-o_O-wrapper_13hv8io-o_O-tutorialNav_do8jf3",
    "wrapper_1nzxe8",
    "header_h0n39e",
    "eval-container",
    "footer_crtwg",
    "moduleList_p1diqp",
];
var deleteTheseIds = [
    "footer",
    "top-header-container"

];




// messy but works fine: wait 5 seconds for the page to load
// can't access the classes before they load, probably need an onload or event listener
setTimeout(function(){
    
    // modify classes
    for (var i = 0; i < classNames.length; i++){
        // get the first element of the returned array, there should only be one
        var e = document.getElementsByClassName(classNames[i])[0];
        e.setAttribute("style", "height:800px");

    }
    /*
    // delete elements
    for (var i = 0; i < deleteTheseClasses.length; i++){
        console.log("class delete: " + deleteTheseClasses[i]);
        if (typeof deleteTheseClasses[i] === 'function') {
            console.log("inner class delete: " + i);
            var e = document.getElementsByClassName(deleteTheseClasses[i])[0];
            e.parentNode.removeChild(e);
        }
    }
    
    // delete ids
    for (var i = 0; i < deleteTheseIds.length; i++){
        console.log("id delete: " + deleteTheseIds[i]);
        if (typeof deleteTheseClasses[i] === 'function') {
            console.log("inner id delete: " + i);
            var e = document.getElementById(deleteTheseIds[i]);
            e.parentNode.removeChild(e);
        }
    }
    */
}, 10000);





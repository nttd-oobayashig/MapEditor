var canvas = document.getElementById("canvas");
function onDown(e) {
    console.log("down");
}

function onUp(e) {
    console.log("up");
}

function onClick(e) {
    console.log("click");
    var x = e.clientX - canvas.offsetLeft;
    var y = e.clientY - canvas.offsetTop;
    console.log("x:", x, "y:", y);
}

function drawRect(x, y, width, height) {
    var context = canvas.getContext('2d');
    context.fillRect(x, y, width, height);
}

canvas.addEventListener('mousedown', onDown, false);
canvas.addEventListener('mouseup', onUp, false);
canvas.addEventListener('click', onClick, false);

/* Add ArrowObject */
$('#btnArrorw').on("click", function () {
    console.log("btnArrow");

    var start = $('#arrowStart').val();
    var end = $('#arrowEnd').val();

    /* Undefined Check */
    if (start == '' || end == '') {
        console.error("Start or End is Undefined.");
        return;
    }

    var values = start;
    values += ',' + end;

    /* Add Object */
    var objectStr = '<div class="objectFormat"><label class="objectLabel">Arrow</label><input type="text" value="' + values + '" class="objectValue"><input type="button" value="-" class="delBtn"></div>';
    $(objectStr).appendTo('#Object');

    /* Initialize */
    $('#arrowStart').val('');
    $('#arrowEnd').val('');
});

/* Add LineObject */
$('#btnLine').on("click", function () {
    console.log("btnLine");

    var start = $('#lineStart').val();
    var end = $('#lineEnd').val();

    /* Undefined Check */
    if (start == '' || end == '') {
        console.error("Start or End is Undefined.");
        return;
    }

    var values = start;
    values += ',' + end;
    var objectStr = '<div class="objectFormat"><label class="objectLabel">Line</label><input type="text" value="' + values + '" class="objectValue"><input type="button" value="-" class="delBtn"></div>';
    $(objectStr).appendTo('#Object');
});

/* Add PointObject */
$('#btnPoint').on("click", function () {
    console.log("btnPoint");
    var values = 'testPoint';
    var objectStr = '<div class="objectFormat"><label class="objectLabel">Point</label><input type="text" value="' + values + '" class="objectValue"><input type="button" value="-" class="delBtn"></div>';
    $(objectStr).appendTo('#Object');
});

/* Delete Object */
$(document).on("click", ".delBtn", function () {
    var target = $(this).parent();
    if (target.parent().parent().children().length > 1) {
        target.remove();
    }
    console.log("Object was deleted");
});

/* Clear Button */
$(document).on("click", ".clearBtn", function(){
    $(this).parent().find('input:text').val('');
});

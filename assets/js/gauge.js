$(document).ready(function () {
    //GaugeMeter
    $(".GaugeMeter").gaugeMeter();


    //Format Code
    $("pre.Code").html(function (index, html) {
        return html.replace(/^(.*)$/mg, "<span class='Line'>$1</span>")
    });

    //Sticky Table Header
    var tables = $("table.StickyHeader");
    tables.each(function (i) {
        var table = tables[i];
        var theadClone = $(table).find("thead").clone(true);
        var stickyHeader = $("<div></div>").addClass("StickyHeader Hide");
        stickyHeader.append($("<table></table")).find("table").append(theadClone);
        $(table).after(stickyHeader);

        var tableHeight = $(table).height();
        var tableWidth = $(table).width() + Number($(table).css("padding-left").replace(/px/ig, "")) + Number($(table).css("padding-right").replace(/px/ig, "")) + Number($(table).css("border-left-width").replace(/px/ig, "")) + Number($(table).css("border-right-width").replace(/px/ig, ""));

        var headerCells = $(table).find("thead th");
        var headerCellHeight = $(headerCells[0]).height();

        var no_fixed_support = false;
        if (stickyHeader.css("position") == "Absolute") {
            no_fixed_support = true;
        }

        var stickyHeaderCells = stickyHeader.find("th");
        //stickyHeader.css("width", tableWidth);
        stickyHeader.css("width", "100%");

        var cellWidth = $(headerCells[0]).width() + 1;
        $(stickyHeaderCells[0]).attr("style", "width:" + cellWidth + "px !important");

        var cutoffTop = $(table).offset().top;
        var cutoffBottom = tableHeight + cutoffTop - headerCellHeight;

        $(window).scroll(function () {
            var currentPosition = $(window).scrollTop();
            if (currentPosition > cutoffTop && currentPosition < cutoffBottom) {
                stickyHeader.removeClass("Hide");
                if (no_fixed_support) {
                    stickyHeader.css("top", currentPosition + "px");
                }
            } else {
                stickyHeader.addClass("Hide");
            }
        });
    });

});
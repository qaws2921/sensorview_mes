
$(document).ready(function () {
    var scmOutListGrid_data = [];

    $( "#datepicker").datepicker({
        format:'yyyy-mm-dd',
        language: "kr",
    });
    $( "#datepicker2").datepicker({
        format:'yyyy-mm-dd',
        language: "kr"
    });

    var grid_selector = "#scmOutListGrid";
    var pager_selector = "#scmOutListGridPager";
    var parent_column = $(grid_selector).closest('[class*="col-"]');

    $(window).on('resize.jqGrid', function () {
        $(grid_selector).jqGrid( 'setGridWidth', parent_column.width());
    })

    $(grid_selector).jqGrid({
        data: scmOutListGrid_data,
        datatype: "local",
        // 다중 select
        multiselect: true,
        // 타이틀
        caption: "출고현황 | MES",
        colNames: ['출고일자','출고번호','업체명','품목그룹','품번','품명','규격','단위','출고수량','등록자','출고일시'],
        colModel: [
            {name: 'outdate', index: 'outdate', width: 60},
            {name: 'outnum', index: 'outnum', width: 60},
            {name: 'suppname', index: 'suppname', width: 60},
            {name: 'pgroup', index: 'pgroup', width: 60},
            {name: 'pnum', index: 'pnum', width: 60},
            {name: 'pname', index: 'pname', width: 60},
            {name: 'standard', index: 'standard', width: 60},
            {name: 'unit', index: 'unit', width: 60},
            {name: 'outcount', index: 'outcount', width: 60},
            {name: 'register', index: 'register', width: 60},
            {name: 'outdatetime', index: 'outdatetime', width: 60},
        ],
        viewrecords: true,
        height: 500,
        rowNum: 100,
        rowList:[100,200,300,500,1000],
        pager: pager_selector,
        loadComplete : function() {
            var table = this;
            setTimeout(function(){
                updatePagerIcons(table);
            }, 0);
        }
    });

    function updatePagerIcons(table) {
        var replace =
            {
                'ui-icon-seek-first' : 'ace-icon fa fa-angle-double-left bigger-140',
                'ui-icon-seek-prev' : 'ace-icon fa fa-angle-left bigger-140',
                'ui-icon-seek-next' : 'ace-icon fa fa-angle-right bigger-140',
                'ui-icon-seek-end' : 'ace-icon fa fa-angle-double-right bigger-140'
            };
        $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
            var icon = $(this);
            var $class = $.trim(icon.attr('class').replace('ui-icon', ''));

            if($class in replace) icon.attr('class', 'ui-icon '+replace[$class]);
        })
    };

    $(window).triggerHandler('resize.jqGrid');

});

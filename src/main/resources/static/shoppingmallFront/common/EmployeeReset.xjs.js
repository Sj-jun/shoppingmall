//XJS=EmployeeReset.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        //초기화 버튼 클릭시 동작
        this.fn_reset = function()
        {
            var sToday = this.fn_resetGetToday();

            if (this.div_cond.edtName)
                this.div_cond.edtName.set_value("");

            if (this.div_cond.calFrom)
                this.div_cond.calFrom.set_value("20160101");

        
            if (this.div_cond.calTo)
                this.div_cond.calTo.set_value(sToday);

            if (this.div_cond.cboManager)
                this.div_cond.cboManager.set_value("");

            this.ds_cond.clearData();

            var nRow = this.ds_cond.addRow();
            this.ds_cond.setColumn(nRow, "employeeName", "");
            this.ds_cond.setColumn(nRow, "hireDateFrom", "20160101");
        	this.ds_cond.setColumn(nRow, "hireDateTo", sToday);
            this.ds_cond.setColumn(nRow, "managerId", "");

            this.ds_employees.clearData();
        };

        this.fn_resetGetToday = function()
        {
            var d = new Date();

            var yyyy = d.getFullYear();
            var mm = d.getMonth() + 1;
            var dd = d.getDate();

            mm = (mm < 10 ? "0" : "") + mm;
            dd = (dd < 10 ? "0" : "") + dd;

            return "" + yyyy + mm + dd;
        };

        this.fn_resetFormatDate = function(sDate)
        {
            if (!sDate) return "";

            sDate = String(sDate);

            return sDate.substr(0, 4) + "-" + sDate.substr(4, 2) + "-" + sDate.substr(6, 2);
        };
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();

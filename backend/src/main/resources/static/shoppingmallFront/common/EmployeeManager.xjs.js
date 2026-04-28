//XJS=EmployeeManager.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        //관리자 콤보박스 동작
        this.fn_loadManager = function()
        {
            this.transaction(
                "getManagerList",
                "http://localhost:8080/managerList",
                "",
                "ds_manager=ds_manager",
                "",
                "fn_callback"
            );
        };

        this.fn_applyManagerCombo = function()
        {
            if (!this.div_cond.cboManager)
            {
                return;
            }

            this.div_cond.cboManager.set_innerdataset("ds_manager");
            this.div_cond.cboManager.set_codecolumn("managerId");
            this.div_cond.cboManager.set_datacolumn("managerName");
        };
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();

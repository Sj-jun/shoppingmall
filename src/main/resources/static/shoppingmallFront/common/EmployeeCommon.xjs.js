//XJS=EmployeeCommon.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {

        this.fn_nvl = function(v,d)
        {
            if (v == null || v == undefined || v == "")
            {
                return d ? d : "";
            }

            return v;
        };
        
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();

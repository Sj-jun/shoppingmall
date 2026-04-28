//XJS=LibUril.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(exports) {
        this.gfn_isEmpty = function(v)
        {
            return (v == null || v == undefined || v === "");
        };

        this.gfn_nvl = function(v,d)
        {
            if (this.gfn_isEmpty(v))
            {
                return d ? d : "";
            }

            return v;
        };

        this.gfn_formatDate = function(sDate)
        {
            if (!sDate) return "";

            sDate = String(sDate);

            if (sDate.length == 8)
            {
                return sDate.substr(0, 4) + "-" + sDate.substr(4, 2) + "-" + sDate.substr(6, 2);
            }

            return sDate;
        };

        this.gfn_getToday = function()
        {
            var d = new Date();

            var yyyy = d.getFullYear();
            var mm = d.getMonth() + 1;
            var dd = d.getDate();

            mm = (mm < 10 ? "0" : "") + mm;
            dd = (dd < 10 ? "0" : "") + dd;

            return "" + yyyy + mm + dd;
        };
        });


    
        this.loadIncludeScript(path, true);
        
        obj = null;
    };
}
)();

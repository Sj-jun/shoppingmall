(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("ProductForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1079,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "3.24%", "203", "981", "412", null, null, this);
            obj.set_taborder("0");
            obj._setContents("<Formats></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "3.24%", "61", null, "71", "5.56%", null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.style.set_background("gainsboro");
            obj.style.set_color("transparent");
            this.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "9.86%", "15", null, "20", "74.9%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_text("Combo00");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 71, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");
            		p.style.set_background("gainsboro");
            		p.style.set_color("transparent");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1079, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("ProductForm.xfdl", true);

       
    };
}
)();

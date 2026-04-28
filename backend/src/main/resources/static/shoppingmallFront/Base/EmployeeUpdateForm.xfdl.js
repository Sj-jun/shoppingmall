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
                this.set_name("EmployeeUpdateForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new PopupDiv("PopupDiv00", "absolute", "46", "23", "794", "456", null, null, this);
            obj.set_text("PopupDiv00");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "117", "81", "340", "45", null, null, this.PopupDiv00);
            obj.set_taborder("0");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3", "126", "114", "45", null, null, this.PopupDiv00);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("15 Dotum");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "117", "126", "165", "45", null, null, this.PopupDiv00);
            obj.set_taborder("2");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "293", "126", "165", "45", null, null, this.PopupDiv00);
            obj.set_taborder("3");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "3", "171", "114", "45", null, null, this.PopupDiv00);
            obj.set_taborder("4");
            obj.set_text("EMAIL");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("15 Dotum");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "125", "171", "165", "45", null, null, this.PopupDiv00);
            obj.set_taborder("5");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "118", "211", "340", "45", null, null, this.PopupDiv00);
            obj.set_taborder("6");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "3", "211", "114", "45", null, null, this.PopupDiv00);
            obj.set_taborder("7");
            obj.set_text("관리번호");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("15 Dotum");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "49", "104", "114", "45", null, null, this);
            obj.set_taborder("0");
            obj.set_text("관리번호");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "957", "168", "150", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_text("Combo00");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 794, 456, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
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
            this.PopupDiv00.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.PopupDiv00.Static01.addEventHandler("onclick", this.Static00_onclick, this);
            this.PopupDiv00.Static02.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("EmployeeUpdateForm.xfdl", true);

       
    };
}
)();

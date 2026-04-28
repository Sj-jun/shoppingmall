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
                this.set_name("CategoryPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,390,110);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_category", "absolute", "3", "3", "380", "92", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "16", "17", "164", "30", null, null, this.div_category);
            obj.set_taborder("10");
            obj.set_text("▣ 카테고리 관리");
            obj.style.set_font("12 Dotum");
            this.div_category.addChild(obj.name, obj);
            obj = new Div("div_categoryName", "absolute", "116", "54", "250", "32", null, null, this.div_category);
            obj.set_taborder("11");
            obj.style.set_border("1 solid black");
            this.div_category.addChild(obj.name, obj);
            obj = new Edit("edt_category", "absolute", "3", "2", "242", "26", null, null, this.div_category.div_categoryName);
            obj.set_taborder("0");
            obj.set_maxlength("85");
            obj.style.set_background("#fbf8f1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#444444ff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_bordertype("normal 1 1");
            obj.set_lengthunit("utf8");
            this.div_category.div_categoryName.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "17", "54", "100", "32", null, null, this.div_category);
            obj.set_taborder("12");
            obj.set_text("카테고리명");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.div_category.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "296", "17", "70", "30", null, null, this.div_category);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.div_category.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "47.35%", "46", "522", "8", null, null, this.div_category);
            obj.set_taborder("14");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_category.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "30.53%", "55", "522", "2", null, null, this.div_category);
            obj.set_taborder("16");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_category.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "31.32%", "83", "522", "2", null, null, this.div_category);
            obj.set_taborder("17");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_category.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "120", "49", "3", "48", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "267", "0", "45", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "50", "20", "48", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "146", "90", "45", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "365", "51", "3", "48", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "369", "47", "20", "48", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 250, 32, this.div_category.div_categoryName,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.style.set_border("1 solid black");

            	}
            );
            this.div_category.div_categoryName.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 641, 235, this.div_category,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.div_category.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 390, 110, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_category.div_categoryName.edt_category","value","ds_category","categoryName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CategoryPopupForm.xfdl", function(exports) {
        /*
        화면명 : 카테고리 관리 팝업
        작성자 : 정상준
        작성일자 : 2026-04-03
        */

        
        this.CategoryPopupForm_onload = function(obj,e)
        {
            if (this.ds_category.getRowCount() == 0)
            {
                this.ds_category.addRow();
            }
        };
        //----------------------------------------------------------------------------------------------------
        //공통 util 함수

        this.fn_isNull = function(v)
        {
            return v == null || v == undefined || String(v).trim() == "";
        };

        //저장 전 필수값 검증
        this.fn_validate = function()
        {

            if (this.fn_isNull(this.ds_category.getColumn(0, "categoryName")))
            {
                alert("카테고리를 입력하세요.");
                this.div_category.div_categoryName.edt_category.setFocus();
                return false;
            }

            return true;
        };
        this.div_category.btn_save_onclick = function(obj,e)
        {
        	if (!this.fn_validate()) return;
        	this.fn_save();
        }
        this.fn_save = function()
        {
        	trace("rowcount = " + this.ds_category.getRowCount());
            trace("categoryName = " + this.ds_category.getColumn(0, "categoryName"));
        	this.transaction(
                "saveCategory",
                "http://localhost:8080/category/save",
                "ds_category=ds_category",
                "",
                "",
                "fn_callback"
            );
        }

        this.fn_callback = function(svcID,nErrorCode,sErrorMsg)
        {
            //카테고리 명 있으면 삭제X
        	if (svcID == "saveCategory")
            {
        		if(nErrorCode == -100)
                {
        			alert(sErrorMsg);
        			return;
        		}
        		if (nErrorCode < 0)
        		{
        			alert(sErrorMsg);
        			return;
        		}

                alert("저장되었습니다.");
                this.close("refresh");
                return;
            }
            
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CategoryPopupForm_onload, this);
            this.div_category.div_categoryName.edt_category.addEventHandler("oneditclick", this.div_category_Div00_Edit00_oneditclick, this);
            this.div_category.btn_save.addEventHandler("onclick", this.div_category.btn_save_onclick, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("CategoryPopupForm.xfdl", true);

       
    };
}
)();

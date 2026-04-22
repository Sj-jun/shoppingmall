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
                this.set_name("ProductByCategoryForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1132,768);
            }
            this.style.set_color("ivory");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("div_cond", "absolute", "51", "163", "982", "45", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("gainsboro");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "51", "216", "982", "412", null, null, this);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"158\"/><Column size=\"158\"/><Column size=\"340\"/><Column size=\"325\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:#c8ebffff;\"><Cell style=\"background:#c8ebffff;\"/><Cell col=\"1\" style=\"background:#c8ebffff;\"/></Cell><Cell col=\"2\" style=\"background:#c8ebffff;\"/><Cell col=\"3\" style=\"background:#c8ebffff;\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "156", "171", "156", "28", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_text("Combo00");

            obj = new Static("sta_category", "absolute", "96", "171", "52", "28", null, null, this);
            obj.set_taborder("2");
            obj.set_text("카테고리");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_product", "absolute", "357", "171", "43", "28", null, null, this);
            obj.set_taborder("3");
            obj.set_text("상품명");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_product", "absolute", "402", "170", "156", "28", null, null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "651", "170", "120", "28", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new Calendar("Calendar01", "absolute", "790", "170", "120", "28", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");

            obj = new Static("sta_date", "absolute", "604", "171", "38", "28", null, null, this);
            obj.set_taborder("7");
            obj.set_text("주문일");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "44.79%", "208", "522", "8", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "4.33%", "160", null, "48", "91.52%", null, this);
            obj.set_taborder("10");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "12.9%", "162", "10", "48", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "27.47%", "163", null, "48", "68.37%", null, this);
            obj.set_taborder("12");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "34.72%", "163", "10", "48", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "49.2%", "160", null, "48", "46.64%", null, this);
            obj.set_taborder("14");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "56.63%", "161", "10", "48", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "775", "170", "12", "28", null, null, this);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "770", "161", "6", "48", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "784", "161", "6", "48", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "963", "125", "70", "30", null, null, this);
            obj.set_taborder("19");
            obj.set_text("조회");
            obj.style.set_background("midnightblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "45.05%", "156", "522", "8", null, null, this);
            obj.set_taborder("20");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "51", "126", "222", "28", null, null, this);
            obj.set_taborder("21");
            obj.set_text("▣ 카테고리별 주문 목록");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "4.51%", "90", null, "42", "86.75%", null, this);
            obj.set_taborder("22");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("title", "absolute", "51", "59", "382", "40", null, null, this);
            obj.set_taborder("23");
            obj.set_text("▣ 카테고리별 주문 목록");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1132, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_color("ivory");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ProductByCategoryForm.xfdl", function(exports) {

        
        this.btn_back_onclick = function(obj,e)
        {
            this.getOwnerFrame().set_formurl("Base::MainForm.xfdl");
        };
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static01_onclick, this);
            this.sta_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.title.addEventHandler("onclick", this.Static02_onclick, this);

        };

        this.loadIncludeScript("ProductByCategoryForm.xfdl", true);

       
    };
}
)();

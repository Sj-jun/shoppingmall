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
                this.set_name("MainForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,795,650);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_emp", "absolute", "31", "115", "105", "40", null, null, this);
            obj.set_taborder("1");
            obj.set_text(" 직원관리");
            obj.style.set_image("URL('C:/Users/e1/Desktop/CssImage/employee-card_12576283.png')");
            obj.style.set_imagealign("lefttext");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("10 맑은 고딕");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wh", "absolute", "135", "115", "105", "40", null, null, this);
            obj.set_taborder("2");
            obj.set_text(" 창고관리");
            obj.style.set_image("URL('C:/Users/e1/Desktop/CssImage/warehouse.png')");
            obj.style.set_imagealign("lefttext");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("10 맑은 고딕");
            obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_inven", "absolute", "239", "115", "142", "40", null, null, this);
            obj.set_taborder("3");
            obj.set_text(" 재고/상품 관리");
            obj.style.set_image("URL('C:/Users/e1/Desktop/CssImage/box.png')");
            obj.style.set_imagealign("lefttext");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("10 맑은 고딕");
            obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_category", "absolute", "380", "115", "105", "40", null, null, this);
            obj.set_taborder("4");
            obj.set_text(" 카테고리");
            obj.style.set_image("URL('C:/Users/e1/Desktop/CssImage/catagory.png')");
            obj.style.set_imagealign("lefttext");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("10 맑은 고딕");
            obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_order", "absolute", "484", "115", "105", "40", null, null, this);
            obj.set_taborder("5");
            obj.set_text(" 고객주문");
            obj.style.set_image("URL('C:/Users/e1/Desktop/CssImage/order.png')");
            obj.style.set_imagealign("lefttext");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("10 맑은 고딕");
            obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_orderByCat", "absolute", "588", "115", "148", "40", null, null, this);
            obj.set_taborder("6");
            obj.set_text(" 카테고리별 주문");
            obj.style.set_image("URL('C:/Users/e1/Desktop/CssImage/list.png')");
            obj.style.set_imagealign("lefttext");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("10 맑은 고딕");
            obj.style.set_gradation("linear 10,10 lightsteelblue 0,100 #ecece5ff");
            obj.set_cssclass("btn");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "116", "0", "40", "60", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "248", "40", "60", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "509", "589", "40", "60", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "752", "225", "40", "60", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "32", "115", "13", "40", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "121", "116", "13", "40", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_border("0 none transparent");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "240", "116", "13", "40", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "591", "116", "13", "40", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_font("9 Dotum");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "32", "44", "210", "57", null, null, this);
            obj.set_taborder("15");
            obj.style.set_border("1 none #e5e5e5ff");
            obj.set_image("URL('C:/Users/e1/Desktop/CssImage/e1.png')");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 795, 650, this,
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
        this.registerScript("MainForm.xfdl", function(exports) {

        this.btn_emp_onclick = function(obj,e)
        {
            this.getOwnerFrame().set_formurl("Base::EmployeeForm.xfdl");
        };

        this.btn_wh_onclick = function(obj,e)
        {
            this.getOwnerFrame().set_formurl("Base::WarehouseForm.xfdl");
        };

        ;
        this.btn_inven_onclick = function(obj,e)
        {
            this.getOwnerFrame().set_formurl("Base::InventoriesForm.xfdl");
        };

        this.btn_category_onclick = function(obj,e)
        {
        	 this.getOwnerFrame().set_formurl("Base::CategoryForm.xfdl");
        };
        this.btn_order_onclick = function(obj,e)
        {
        	 this.getOwnerFrame().set_formurl("Base::OrderForm.xfdl");
        };

        this.btn_orderByCat_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Base::OrderByCategoryForm.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MainForm_onload, this);
            this.btn_emp.addEventHandler("onclick", this.btn_emp_onclick, this);
            this.btn_wh.addEventHandler("onclick", this.btn_wh_onclick, this);
            this.btn_inven.addEventHandler("onclick", this.btn_inven_onclick, this);
            this.btn_category.addEventHandler("onclick", this.btn_category_onclick, this);
            this.btn_order.addEventHandler("onclick", this.btn_order_onclick, this);
            this.btn_orderByCat.addEventHandler("onclick", this.btn_orderByCat_onclick, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("MainForm.xfdl", true);

       
    };
}
)();

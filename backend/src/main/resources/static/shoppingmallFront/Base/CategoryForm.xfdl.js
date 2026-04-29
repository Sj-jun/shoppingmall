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
                this.set_name("CategoryForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1060,592);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/><Column id=\"productCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_order", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"orderCount\" type=\"STRING\" size=\"256\"/><Column id=\"totalOrderQuantity\" type=\"STRING\" size=\"256\"/><Column id=\"totalOrderPrice\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_category", "absolute", "40", "122", "320", "410", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_category");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"238\"/><Column size=\"82\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#c8ebffff;\" text=\"카테고리명\"/><Cell col=\"1\" style=\"background:#c8ebffff;\" text=\"상품수\"/></Band><Band id=\"body\"><Cell style=\"align:left;padding:5 5 5 5;\" text=\"bind:categoryName\"/><Cell col=\"1\" style=\"align:right;padding:5 5 5 5;\" text=\"bind:productCount\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_order", "absolute", "376", "122", "645", "410", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_order");
            obj.set_scrollbars("autovert");
            obj.set_nodatatext("No Data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"90\"/><Column size=\"105\"/><Column size=\"139\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#c8ebffff;\" text=\"상품명\"/><Cell col=\"1\" style=\"background:#c8ebffff;\" text=\"주문 횟수\"/><Cell col=\"2\" style=\"background:#c8ebffff;\" text=\"누적 주문 수량\"/><Cell col=\"3\" style=\"background:#c8ebffff;\" text=\"누적 주문 가격\"/></Band><Band id=\"body\"><Cell style=\"align:left;padding:5 5 5 5;\" text=\"bind:productName\" tooltiptext=\"bind:productName\"/><Cell col=\"1\" style=\"align:right;padding:5 5 5 5;\" text=\"bind:orderCount\"/><Cell col=\"2\" style=\"align:right;padding:5 5 5 5;\" text=\"bind:totalOrderQuantity\"/><Cell col=\"3\" style=\"align:right;padding:5 5 5 5;\" text=\"bind:totalOrderPrice\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "3.86%", "114", "981", "8", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wReset", "absolute", "986", "87", "35", "28", null, null, this);
            obj.set_taborder("7");
            obj.style.set_image("URL('Images::reset3.png')");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_font("18 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_category", "absolute", "39", "92", "252", "28", null, null, this);
            obj.set_taborder("8");
            obj.set_text("▣ 카테고리 별 주문목록 현황");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("title_category", "absolute", "39", "50", "382", "40", null, null, this);
            obj.set_taborder("9");
            obj.set_text("∘ 카테고리별 현황");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "43", "78", "93", "20", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "152", "0", "40", "60", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "157", "40", "60", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "396", "532", "40", "60", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1020", "281", "40", "60", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_back", "absolute", "18", "15", "25", "25", null, null, this);
            obj.set_taborder("16");
            obj.style.set_image("URL('Images::free-icon-left-6657529.png')");
            obj.style.set_background("@gradation");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_bordertype("normal 10 10");
            obj.style.set_font("18 arial");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "360", "90", "16", "421", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1060, 592, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","grd_category","","ds_category","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","grd_order","","ds_order","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("CategoryForm.xfdl", function(exports) {
        /*
        화면명 : 카테고리별 현황
        작성자 : 정상준
        작성일자 : 2026-04-09
        */
        this.on = true;
        this.btn_back_onclick = function(obj,e)
        {
            this.getOwnerFrame().set_formurl("Base::MainForm.xfdl");
        };

        
        this.CategoryForm_onload = function(obj,e)
        {
        	this.fn_count();
        }
        //==============================================================
        //카테고리별 상품수를 불러온다.
        //==============================================================
        this.fn_count = function()
        {
        	this.transaction(
                "countProductByCategory",
                "http://localhost:8080/category/products",
                "",
                "ds_category=ds_category",
                "",
                "fn_countCallback"
            );
        }
        this.fn_countCallback = function(svcID,nErrorCode,sErrorMsg)
        {
        	trace("svcID = " + svcID);
            trace("nErrorCode = " + nErrorCode);
            trace("sErrorMsg = " + sErrorMsg);
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
            if(this.on){
        		this.fn_reset();
        		this.on = false;
            }
        }
        //==============================================================
        //카테고리 그리드 상품수 클릭시
        //==============================================================
        this.grd_category_oncelldblclick = function(obj,e)
        {
        //상품 수정
            if (e.cell == 1)
            {
                var nRow = e.row;
                var sCategoryId = this.ds_category.getColumn(nRow, "categoryId");
                trace("선택한 카테고리ID = " + sCategoryId);
                
                //카테고리 아이디만 서버에 보낸다.
                this.transaction(
        			"getCategoryOrders",
        			"http://localhost:8080/category/orders",
        			"",
        			"ds_order=ds_order",
        			"categoryId=" + this.ds_category.getColumn(nRow, "categoryId"),
        			"fn_orderCallback"
        		);
            }
        }

        this.fn_orderCallback = function(svcID,nErrorCode,sErrorMsg){
        	trace("svcID = " + svcID);
            trace("nErrorCode = " + nErrorCode);
            trace("sErrorMsg = " + sErrorMsg);
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        }
        //==============================================================
        //검색 조건 초기화
        //==============================================================
        this.fn_reset = function()
        {    

            // 2. 검색조건 dataset 초기화
            this.ds_order.clearData();
            this.fn_count();
            this.transaction(
        			"getCategoryOrders",
        			"http://localhost:8080/category/orders",
        			"",
        			"ds_order=ds_order",
        			"categoryId=" + this.ds_category.getColumn(0, "categoryId"),
        			"fn_orderCallback"
        		);

        };
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CategoryForm_onload, this);
            this.grd_category.addEventHandler("oncellclick", this.grd_category_oncelldblclick, this);
            this.btn_wReset.addEventHandler("onclick", this.fn_reset, this);
            this.sta_category.addEventHandler("onclick", this.Static00_onclick, this);
            this.title_category.addEventHandler("onclick", this.Static02_onclick, this);
            this.btn_back.addEventHandler("onclick", this.btn_back_onclick, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("CategoryForm.xfdl", true);

       
    };
}
)();

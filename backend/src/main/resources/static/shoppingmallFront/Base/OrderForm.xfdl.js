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
                this.set_name("OrderForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1081,624);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"quantity\" type=\"STRING\" size=\"256\"/><Column id=\"afterQuantity\" type=\"STRING\" size=\"256\"/><Column id=\"order\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_order", this);
            obj._setContents("<ColumnInfo><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"quantity\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"totalPrice\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"itemId\" type=\"STRING\" size=\"256\"/><Column id=\"orderId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_delete", this);
            obj._setContents("<ColumnInfo><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"orderId\" type=\"STRING\" size=\"256\"/><Column id=\"itemId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_complete", this);
            obj._setContents("<ColumnInfo><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"quantity\" type=\"STRING\" size=\"256\"/><Column id=\"totalPrice\" type=\"STRING\" size=\"256\"/><Column id=\"itemId\" type=\"STRING\" size=\"256\"/><Column id=\"orderId\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"orderDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("title_category", "absolute", "39", "49", "382", "40", null, null, this);
            obj.set_taborder("23");
            obj.set_text("∘ 고객주문");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_name", "absolute", "41", "122", "295", "41", null, null, this);
            obj.set_taborder("9");
            obj.style.set_border("1 solid lightskyblue");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name", "absolute", "61", "120", "28", "46", null, null, this);
            obj.set_taborder("2");
            obj.set_text("이름");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "7.77%", "120", "10", "48", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name", "absolute", "94", "130", "152", "26", null, null, this);
            obj.set_taborder("0");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_padding("5 5 5 5");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("85");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login", "absolute", "249", "130", "70", "26", null, null, this);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "3.89%", "118", "20", "48", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "30.9%", "120", "20", "48", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "39", "163", "91", "15", null, null, this);
            obj.set_taborder("20");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "41", "112", "94", "10", null, null, this);
            obj.set_taborder("21");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_order", "absolute", "40", "82", "69", "46", null, null, this);
            obj.set_taborder("22");
            obj.set_text("▣ 주문");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "44", "78", "95", "20", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "112", "0", "40", "60", null, null, this);
            obj.set_taborder("25");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "167", "40", "60", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Tab("tab", "absolute", "39", "178", "1001", "387", null, null, this);
            obj.set_taborder("29");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_visible("false");
            obj.style.set_buttongradation("liner 0,0 transparent 100,100 transparent");
            obj.style.set_buttonborder("1 solid #a8a8a2ff");
            obj.style.set_background("transparent");
            obj.style.set_color("#777777ff");
            obj.set_selectchangetype("up");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tab);
            obj.set_text("주문목록");
            this.tab.addChild(obj.name, obj);
            obj = new Grid("grd_product", "absolute", "9", "41", "981", "122", null, null, this.tab.tabpage1);
            obj.set_taborder("0");
            obj.set_binddataset("ds_product");
            obj.set_scrollbars("fixedvert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"362\"/><Column size=\"174\"/><Column size=\"208\"/><Column size=\"154\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#c8ebffff;\" text=\"상품명\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"1\" style=\"background:#c8ebffff;\" text=\"가격\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"2\" style=\"background:#c8ebffff;\" text=\"수량\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"3\" style=\"background:#c8ebffff;\" text=\"주문 후 재고\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"4\" style=\"background:#c8ebffff;\" text=\"주문\"/></Band><Band id=\"body\"><Cell style=\"align:left;padding:5 5 5 5;\" text=\"bind:productName\"/><Cell col=\"1\" style=\"align:right;padding:5 5 5 5;\" text=\"bind:price\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;padding:5 5 5 5;\" text=\"bind:quantity\"/><Cell col=\"3\" style=\"align:right;padding:5 5 5 5;\" text=\"bind:afterQuantity\"/><Cell col=\"4\" displaytype=\"button\" edittype=\"button\" style=\"color:ivory;color2:ivory;controlbackground:midnightblue;controlcolor:ivory;\" cssclass=\".btn_red {     background-color: red;     color: white; }\" text=\"추가\"/></Band></Format></Formats>");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Grid("grd_order", "absolute", "9", "213", "981", "122", null, null, this.tab.tabpage1);
            obj.set_taborder("1");
            obj.set_binddataset("ds_order");
            obj.set_scrollbars("fixedvert");
            obj.set_nodatatext("No Data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"108\"/><Column size=\"392\"/><Column size=\"205\"/><Column size=\"223\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background:#c8ebffff;\" text=\"bind:chk\"/><Cell col=\"1\" style=\"background:#c8ebffff;\" text=\"주문번호\"/><Cell col=\"2\" style=\"background:#c8ebffff;\" text=\"상품명\"/><Cell col=\"3\" style=\"background:#c8ebffff;\" text=\"수량\"/><Cell col=\"4\" style=\"background:#c8ebffff;\" text=\"가격\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:orderId\"/><Cell col=\"2\" style=\"align:left;padding:5 5 5 5;\" text=\"bind:productName\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" editfilter=\"digit\" style=\"align:right;padding:0 5 0 5;\" text=\"bind:quantity\" editlimit=\"8\" editlengthunit=\"utf8\"/><Cell col=\"4\" style=\"align:right;padding:5 5 5 5;\" text=\"bind:totalPrice\"/></Band></Format></Formats>");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Static("sta_prodList", "absolute", "9", "11", "174", "30", null, null, this.tab.tabpage1);
            obj.set_taborder("2");
            obj.set_text("▶상품목록");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Static("sta_orderList", "absolute", "9", "184", "174", "26", null, null, this.tab.tabpage1);
            obj.set_taborder("3");
            obj.set_text("▶주문목록");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0.7%", "33", "981", "8", null, null, this.tab.tabpage1);
            obj.set_taborder("4");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0.9%", "205", "981", "8", null, null, this.tab.tabpage1);
            obj.set_taborder("5");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delete", "absolute", "838", "177", "50", "30", null, null, this.tab.tabpage1);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_order", "absolute", "890", "177", "100", "30", null, null, this.tab.tabpage1);
            obj.set_taborder("7");
            obj.set_text("주문하기");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "887", "163", "4", "48", null, null, this.tab.tabpage1);
            obj.set_taborder("8");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "792", "158", "40", "60", null, null, this.tab.tabpage1);
            obj.set_taborder("10");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "1", "0", "91", "20", null, null, this.tab.tabpage1);
            obj.set_taborder("11");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_reset", "absolute", "824", "6", "35", "30", null, null, this.tab.tabpage1);
            obj.set_taborder("13");
            obj.style.set_image("URL('C:/Users/e1/Pictures/reset3.png')");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_font("18 Dotum");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "389", "335", "91", "30", null, null, this.tab.tabpage1);
            obj.set_taborder("14");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_chart", "absolute", "861", "6", "130", "30", null, null, this.tab.tabpage1);
            obj.set_taborder("15");
            obj.set_text("월단위 주문량 차트");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "858", "-13", "4", "48", null, null, this.tab.tabpage1);
            obj.set_taborder("16");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.tab.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.tab);
            obj.set_text("주문완료");
            this.tab.addChild(obj.name, obj);
            obj = new Static("sta_odered", "absolute", "9", "12", "174", "30", null, null, this.tab.tabpage2);
            obj.set_taborder("0");
            obj.set_text("▶주문완료");
            this.tab.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0.7%", "34", "981", "8", null, null, this.tab.tabpage2);
            obj.set_taborder("1");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.tab.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.6%", "285", "10", "48", null, null, this.tab.tabpage2);
            obj.set_taborder("2");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.tab.tabpage2.addChild(obj.name, obj);
            obj = new Grid("grd_complete", "absolute", "9", "42", "981", "290", null, null, this.tab.tabpage2);
            obj.set_taborder("3");
            obj.set_binddataset("ds_complete");
            obj.set_scrollbars("autovert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"149\"/><Column size=\"157\"/><Column size=\"349\"/><Column size=\"146\"/><Column size=\"168\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#c8ebffff;\" text=\"주문번호\"/><Cell col=\"1\" style=\"background:#c8ebffff;\" text=\"주문일\"/><Cell col=\"2\" style=\"background:#c8ebffff;\" text=\"상품명\"/><Cell col=\"3\" style=\"background:#c8ebffff;\" text=\"수량\"/><Cell col=\"4\" style=\"background:#c8ebffff;\" text=\"가격\"/></Band><Band id=\"body\"><Cell style=\"padding:5 5 5 5;\" text=\"bind:orderId\"/><Cell col=\"1\" text=\"bind:orderDate\"/><Cell col=\"2\" style=\"align:left;padding:5 5 5 5;\" text=\"bind:productName\"/><Cell col=\"3\" style=\"align:right;padding:5 5 5 5;\" text=\"bind:quantity\"/><Cell col=\"4\" style=\"align:right;padding:5 5 5 5;\" text=\"bind:totalPrice\"/></Band></Format></Formats>");
            this.tab.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "389", "333", "91", "30", null, null, this.tab.tabpage2);
            obj.set_taborder("4");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.tab.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "1040", "345", "40", "60", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "532", "564", "40", "60", null, null, this);
            obj.set_taborder("31");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "3.61%", "215", "10", "48", null, null, this);
            obj.set_taborder("32");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "95.1%", "260", "10", "48", null, null, this);
            obj.set_taborder("33");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_back", "absolute", "18", "15", "25", "25", null, null, this);
            obj.set_taborder("34");
            obj.style.set_image("URL('C:/Users/e1/Desktop/CssImage/free-icon-left-6657529.png')");
            obj.style.set_background("@gradation");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_bordertype("normal 10 10");
            obj.style.set_font("18 arial");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "246", "115", "4", "48", null, null, this);
            obj.set_taborder("35");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "39", "201", "91", "20", null, null, this);
            obj.set_taborder("36");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("주문목록");

            	}
            );
            this.tab.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("주문완료");

            	}
            );
            this.tab.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1081, 624, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Tab00.tabpage1.grd_product","","ds_product","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab00.tabpage1.grd_order","","ds_order","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","tab.tabpage2.grd_complete","","ds_complete","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("OrderForm.xfdl", function(exports) {
        /*
        화면명 : 주문 목록 화면 
        작성자 : 정상준
        작성일자 : 2026-04-15
        */

        this.btn_back_onclick = function(obj,e)
        {
            this.getOwnerFrame().set_formurl("Base::MainForm.xfdl");
        };
        //혹시 모를login name 유실 방지
        this.fv_login = "";
        //공통 util 
        this.fn_isNull = function(v)
        {
            return v == null || v == undefined || String(v).trim() == ""; 
        };
        // 같은 상품 전체 주문수량 합산
        this.fn_getOrderQty = function(sProductId)
        {
            var nQuantity = 0;

            for (var i = 0; i < this.ds_order.getRowCount(); i++)
            {
                if (this.ds_order.getColumn(i, "productId") == sProductId)
                {
                    nQuantity += Number(this.ds_order.getColumn(i, "quantity")) || 0;
                }
            }

            return nQuantity;
        };

        // 상품목록 주문 후 재고 전체 재계산
        this.fn_setAfterQuantity = function()
        {
            for (var i = 0; i < this.ds_product.getRowCount(); i++)
            {
                var sProductId = this.ds_product.getColumn(i, "productId");
                var nProdQuantity = Number(this.ds_product.getColumn(i, "quantity")) || 0;
                var nOrderQuantity = this.fn_getOrderQty(sProductId);

                this.ds_product.setColumn(i, "afterQuantity", nProdQuantity - nOrderQuantity);

            }
        };

        //====================================================
        //로그인 구현 name 값 비교
        //====================================================
        this.btn_login_onclick = function(obj,e)
        {
        	
        	var sText = this.btn_login.text;
        	if(sText == "로그인")
        	{
        		if(this.fn_isNull(this.edt_name.value))
        		{
        			alert("이름을 입력해주세요.");
        			this.edt_name.setFocus();
        		}else{
        			this.fv_login = this.edt_name.value
        			this.fn_productList();
        		}
        	}
        	else{
        		this.edt_name.set_value("");
        		this.ds_product.clearData();
        		this.ds_order.clearData();
        		this.edt_name.set_readonly("false");
        		this.tab.set_visible("false");
        		this.btn_login.set_text("로그인");
        	}
        }
        this.fn_productList = function()
        {
        	this.transaction(
        				"loginName",
        				"http://localhost:8080/login",
        				"",
        				"ds_product=ds_product ds_order=ds_order",
        				"name=" + nexacro.wrapQuote(this.fv_login),
        				"fn_loginCallback"
        			);
        }
        this.fn_loginCallback = function(svcID,nErrorCode,sErrorMsg)
        {
        	trace("svcID = " + svcID);
            trace("nErrorCode = " + nErrorCode);
            trace("sErrorMsg = " + sErrorMsg);
            
            //로그인 실패
            if (nErrorCode == -100)
            {
                alert(sErrorMsg);
                return;
            }
        	if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
            if (this.ds_product.getRowCount() == 0)
            {
                trace("ds_product is empty");
                return;
            }
            this.tab.set_tabindex(0);
            this.tab.set_visible("true");
            this.edt_name.set_readonly("true");
        	this.btn_login.set_text("로그아웃");

        	var sText = this.btn_login.text;
        	trace(sText);
            trace("productName = " + this.ds_product.getColumn(0, "productName"));
            trace("getRowCount = " + this.ds_product.getRowCount());

        	this.ds_product.addColumn("afterQuantity", "STRING", 256);
        	this.ds_order.addColumn("chk", "STRING", 256);
            this.fn_setAfterQuantity();
        }

        //====================================================
        //tab이 변경되면 주문 완료 목록을 불러온다.
        //====================================================
        this.tab_canchange = function(obj,e)
        {
        	 trace("현재 탭 index = " + e.postindex);

            if (e.postindex == 1) // tabpage2
            {
                this.fn_completeList();
            }
        }
        this.fn_completeList = function()
        {
        	this.transaction(
        				"completeList",
        				"http://localhost:8080/orders/complete",
        				"",
        				"ds_complete=ds_complete",
        				"name=" + nexacro.wrapQuote(this.fv_login),
        				"fn_completeCallback"
        	);
        }
        this.fn_completeCallback = function(svcID,nErrorCode,sErrorMsg)
        {
        	if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        }
        //====================================================
        //그리드 주문 추가 버튼
        //====================================================
        this.tab.tabpage1.grd_product_oncellclick = function(obj,e)
        {
        	trace("클릭됨");
            trace("e.cell = " + e.cell);
            trace("e.row = " + e.row);
        	if (e.cell == 4)
            {
        		var nRow = e.row;
                var sProductId = this.ds_product.getColumn(nRow, "productId");
                var sProductName = this.ds_product.getColumn(nRow, "productName");
                var sPrice = Number(this.ds_product.getColumn(nRow, "price"));
                var sAfterQuantity = Number(this.ds_product.getColumn(nRow, "afterQuantity"));
        		
        		if(sAfterQuantity - 1 < 0) 
        		{
        			alert("재고가 없습니다");
        			return;
        		}
                
                trace(sProductId + " " +  sProductName + " " + sPrice);

                // 같은 상품이어도 기존 행 +1 하지 않고 항상 신규행 추가
        		var nNewRow = -1;

        		// 신규행(ROWTYPE_INSERT) 중 같은 상품 찾기
        		for (var i = 0; i < this.ds_order.getRowCount(); i++)
        		{
        			var oProductId = this.ds_order.getColumn(i, "productId");
        			var nRowType = this.ds_order.getRowType(i);

        			if (nRowType == 2 && String(sProductId) == String(oProductId))
        			{
        				nNewRow = i;
        				break;
        			}
        		}

        		if (nNewRow >= 0)
        		{
        			var nQuantity = Number(this.ds_order.getColumn(nNewRow, "quantity")) || 0;
        			var nTotalPrice = Number(this.ds_order.getColumn(nNewRow, "totalPrice")) || 0;

        			this.ds_order.setColumn(nNewRow, "quantity", nQuantity + 1);
        			this.ds_order.setColumn(nNewRow, "totalPrice", nexacro.round(nTotalPrice + sPrice, 2));

        			this.ds_order.set_rowposition(nNewRow);
        			this.tab.tabpage1.grd_order.setCellPos(0);
        		}
        		else
        		{
        			nNewRow = this.ds_order.addRow();

        			this.ds_order.setColumn(nNewRow, "orderId", "");
        			this.ds_order.setColumn(nNewRow, "itemId", "");
        			this.ds_order.setColumn(nNewRow, "productId", sProductId);
        			this.ds_order.setColumn(nNewRow, "productName", sProductName);
        			this.ds_order.setColumn(nNewRow, "price", sPrice);
        			this.ds_order.setColumn(nNewRow, "quantity", 1);
        			this.ds_order.setColumn(nNewRow, "totalPrice", nexacro.round(sPrice, 2));
        			this.ds_order.setColumn(nNewRow, "chk", "1");

        			this.ds_order.set_rowposition(nNewRow);
        			this.tab.tabpage1.grd_order.setCellPos(0);

        			trace("신규행 추가");
        		}

        		this.fn_setAfterQuantity();

            }
        }

        //====================================================
        //그리드 주문 수량 값 변경
        //====================================================
        this.ds_order_oncolumnchanged = function(obj,e)
        {
        	// 체크박스 처리
            if (e.columnid == "chk")
            {
                var bAllChecked = true;

                for (var i = 0; i < obj.getRowCount(); i++)
                {
                    if (obj.getColumn(i, "chk") != "1")
                    {
                        bAllChecked = false;
                        break;
                    }
                }

                this.tab.tabpage1.grd_order.setCellProperty("head", 0, "text", bAllChecked ? "1" : "0");
                return;
            }

        	var i = e.row;
            if (i < 0) return;
            var sProductId = this.ds_order.getColumn(i, "productId");
            var nFindRow = this.ds_product.findRow("productId", sProductId);

            if (nFindRow < 0)
            {
                return;
            }

            var nOrderQuantity = Number(this.ds_order.getColumn(i, "quantity")) || 0;
            if (this.fn_isNull(nOrderQuantity))
            {
                this.ds_order.setColumn(i, "quantity", 0);
                this.tab.tabpage1.grd_order.setCellPos(this.tab.tabpage1.grd_order.getCellPos());
                return;
            }

            var nOrgQuantity = Number(this.ds_product.getColumn(nFindRow, "quantity")) || 0;
            var nOrgPrice = Number(this.ds_product.getColumn(nFindRow, "price")) || 0;
            
        	// 같은 상품 전체 수량 합산으로 재고 계산
            var nAfterQuantity = nOrgQuantity - this.fn_getOrderQty(sProductId);

            if (nAfterQuantity < 0)
            {
                alert("재고가 부족합니다.");
                
                this.ds_order.setColumn(i, "quantity", e.oldvalue);
                this.ds_order.setColumn(i, "totalPrice", nexacro.round((Number(e.oldvalue) || 0) * nOrgPrice, 2));
                this.fn_setAfterQuantity();
                
                this.ds_product.set_rowposition(nFindRow);
        		this.tab.tabpage1.grd_product.setCellPos(0);
        		this.ds_order.set_rowposition(i);
        		this.tab.tabpage1.grd_order.setCellPos(0);
                return;
            }
            
        	this.ds_order.setColumn(i, "totalPrice", nexacro.round(nOrderQuantity * nOrgPrice, 2));
            this.fn_setAfterQuantity();
            this.ds_order.setColumn(i, "chk", "1");
            this.ds_product.set_rowposition(nFindRow);
        	this.tab.tabpage1.grd_product.setCellPos(0);
        	this.ds_order.set_rowposition(i);
        	this.tab.tabpage1.grd_order.setCellPos(0);
        }

        //====================================================
        //주문 하기
        //====================================================
        this.tab.tabpage1.btn_order_onclick = function(obj,e)
        {
        	if(this.ds_order.getRowCount() < 1){
        		alert("주문한 상품이 없습니다!");
        		return;
        	}
            this.fn_setAfterQuantity();

        	for(var i = 0; i < this.ds_product.getRowCount(); i++){
        		var sAterQuantity = Number(this.ds_product.getColumn(i, "afterQuantity"));
        		var sProductId = this.ds_product.getColumn(i, "productId");
        		var sProductNA = this.ds_product.getColumn(i, "productName");
        		var nFindRow = this.ds_order.findRow("productId", sProductId);

        		if(sAterQuantity < 0){
        			alert("상품의 재고가 부족합니다.");
        			this.ds_product.set_rowposition(i);
        			trace("id = " + sProductId + " " + "name = " + sProductNA);
        			
        			this.tab.tabpage1.grd_product.setCellPos(0);
        			this.ds_order.set_rowposition(nFindRow);
        			this.tab.tabpage1.grd_order.setCellPos(0);
        			return;
        		}
        	}
        	
        	for (var i = 0; i < this.ds_order.getRowCount(); i++)
            {
        		var qty = this.ds_order.getColumn(i, "quantity");
                if (this.fn_isNull(qty) || qty == 0)
                {
                    alert("주문수량을 확인해주세요 .");
                    this.ds_order.set_rowposition(i);
        			this.tab.tabpage1.grd_order.setCellPos(0);
                    return;
                }
            }
        	if(!confirm("주문하시겠습니까?")) return;
        	this.transaction(
        		"ordersSubmit",
        		"http://localhost:8080/orders/submit",
        		"ds_product=ds_product ds_order=ds_order",
        		"",
        		"name=" + nexacro.wrapQuote(this.fv_login),
        		"fn_ordersCallback"
        	);
        	
        }
        this.fn_ordersCallback = function(svcID,nErrorCode,sErrorMsg)
        {
        	trace("svcID = " + svcID);
            trace("nErrorCode = " + nErrorCode);
            trace("sErrorMsg = " + sErrorMsg);

            if (nErrorCode == -100)
            {
                alert(sErrorMsg);
                return;
            }
        	if (nErrorCode == -500)
            {
                alert(sErrorMsg);
                return;
            }
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
            this.fn_reset();
        }

        this.fn_reset = function(obj,e)
        {
        	 // 주문목록을 처음 받아온 상태로 복구
            this.ds_order.reset();
        	this.fn_productList();
            // 삭제용 데이터셋도 초기화
            this.ds_delete.clearData();

            // 헤더 체크박스 초기화
            this.tab.tabpage1.grd_order.setCellProperty("head", 0, "text", "0");

            // 재고 다시 계산
            this.fn_setAfterQuantity();

            // 포커스 정리
            if (this.ds_order.getRowCount() > 0)
            {
                this.ds_order.set_rowposition(0);
                this.tab.tabpage1.grd_order.setCellPos(0);
            }
            else if (this.ds_product.getRowCount() > 0)
            {
                this.ds_product.set_rowposition(0);
                this.tab.tabpage1.grd_product.setCellPos(0);
            }
        }
        // =====================================================================
        // 헤더 체크박스: 헤더 체크하면 전체 체크 -> 삭제 로직
        // =====================================================================
        this.tab.tabpage1.grd_order_onheadclick = function(obj,e)
        {
        	if (e.cell != 0)
            {
                return;
            }
        	
        	//헤더영역, 0번 셀
            var sHeadText = obj.getCellText(-1, 0);
            var sNewValue = (sHeadText == "1") ? "0" : "1";

            obj.setCellProperty("head", 0, "text", sNewValue);

            for (var i = 0; i < this.ds_order.getRowCount(); i++)
            {
                this.ds_order.setColumn(i, "chk", sNewValue);
            }
        }
        //체크박스 체크 여부
        this.fn_dCheckedRow = function()
        {
            for (var i = 0; i < this.ds_order.getRowCount(); i++)
            {
                if (this.ds_order.getColumn(i, "chk") == "1")
                {
                    return true;
                }
            }
            return false;
        };
        //행만 삭제
        this.fn_removeDeletedRows = function()
        {
            for (var i = this.ds_order.getRowCount() - 1; i >= 0; i--)
            {
                if (this.ds_order.getColumn(i, "chk") == "1")
                {
                    this.ds_order.deleteRow(i);
                }
            }

            this.tab.tabpage1.grd_order.setCellProperty("head", 0, "text", "0");
            this.fn_setAfterQuantity();
        };

        // 삭제 실패 시 체크 해제
        this.fn_uncheckDeleteRows = function()
        {
            for (var i = 0; i < this.ds_delete.getRowCount(); i++)
            {
                var dOrderId = this.ds_delete.getColumn(i, "orderId");
                var dItemId = this.ds_delete.getColumn(i, "itemId");
                var dProductId = this.ds_delete.getColumn(i, "productId");

                for (var j = 0; j < this.ds_order.getRowCount(); j++)
                {
                    var sOrderId = this.ds_order.getColumn(j, "orderId");
        			var sItemId = this.ds_order.getColumn(j, "itemId");
        			var sProductId = this.ds_order.getColumn(j, "productId");

                    if ((String(dOrderId) == String(sOrderId)) &&
        				(String(dItemId) == String(sItemId)) &&
        				(String(dProductId) == String(sProductId)))
                    {
                        this.ds_order.setColumn(j, "chk", "0");
                        break;
                    }
                }
            }

            this.tab.tabpage1.grd_order.setCellProperty("head", 0, "text", "0");
        };
        this.fn_delete = function()
        {
            this.ds_delete.clearData();

            for (var i = 0; i < this.ds_order.getRowCount(); i++)
            {
        		//체크박스 1이면 삭제
                if (this.ds_order.getColumn(i, "chk") == "1")
                {
                    var sOrderId = this.ds_order.getColumn(i, "orderId");
                    var sItemId = this.ds_order.getColumn(i, "itemId");

                    // DB에 있는 기존행만 서버 삭제 대상
                    if (!this.fn_isNull(sOrderId) && !this.fn_isNull(sItemId))
                    {
                        var nRow = this.ds_delete.addRow();
                        this.ds_delete.setColumn(nRow, "orderId", sOrderId);
                        this.ds_delete.setColumn(nRow, "itemId", sItemId);
                        this.ds_delete.setColumn(nRow, "productId", this.ds_order.getColumn(i, "productId"));
                    }
                }
            }
        };

        this.tab.tabpage1.btn_delete_onclick = function(obj,e)
        {
        	// 체크된 행 없는 경우
            if (!this.fn_dCheckedRow())
            {
                alert("삭제할 행을 선택하세요.");
                return;
            }
            // 최종 확인
            if (!confirm("선택한 행을 삭제하시겠습니까?"))
            {
                return;
            }

            this.fn_delete();
        	 // 화면에서 먼저 체크된 행 삭제
            this.fn_removeDeletedRows();
            this.transaction(
                "deleteOrderProduct",
                "http://localhost:8080/order/deleteProduct",
                "ds_delete=ds_delete",
                "",
                "",
                "fn_deleteCallback"
            );
        }

        this.fn_deleteCallback = function(svcID,nErrorCode,sErrorMsg)
        {

            if (nErrorCode < 0)
            {
        		this.fn_uncheckDeleteRows();
                alert(sErrorMsg);
                return;
            }
            alert("삭제되었습니다.");
        }   
        this.tab_tabpage1_btn_chart_onclick = function(obj,e)
        {
        	this.fn_openChartPopup(this.fv_login);
        }
        this.fv_login

        this.fn_openChartPopup = function(sCustomerName)
        {
            var objChildFrame = new ChildFrame();
        	objChildFrame.init(
        		"ChartForm",
        		100,
        		100,
        		800,
        		500,
        		null,
        		null
        	);
        	objChildFrame.set_formurl("Base::ChartForm.xfdl");
        	objChildFrame.set_showtitlebar(true);
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openalign("center middle");

        	objChildFrame.showModal(
        		"ChartForm",          // ⭐ 여기 들어가는 ID
        		this.getOwnerFrame(),
        		{
        			customerName: sCustomerName
        		},
        		this,
        		"fn_popupCallback"
        	);
        };

        //팝업 콜백 함수
        this.fn_popupCallback = function(sPopupId,sReturn)
        {
            trace("popup closed" + sReturn);

            
        };

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_order.addEventHandler("oncolumnchanged", this.ds_order_oncolumnchanged, this);
            this.title_category.addEventHandler("onclick", this.Static02_onclick, this);
            this.btn_login.addEventHandler("onclick", this.btn_login_onclick, this);
            this.tab.addEventHandler("canchange", this.tab_canchange, this);
            this.tab.tabpage1.grd_product.addEventHandler("oncellclick", this.tab.tabpage1.grd_product_oncellclick, this);
            this.tab.tabpage1.grd_order.addEventHandler("onheadclick", this.tab.tabpage1.grd_order_onheadclick, this);
            this.tab.tabpage1.btn_delete.addEventHandler("onclick", this.tab.tabpage1.btn_delete_onclick, this);
            this.tab.tabpage1.btn_order.addEventHandler("onclick", this.tab.tabpage1.btn_order_onclick, this);
            this.tab.tabpage1.btn_reset.addEventHandler("onclick", this.fn_reset, this);
            this.tab.tabpage1.btn_chart.addEventHandler("onclick", this.tab_tabpage1_btn_chart_onclick, this);
            this.btn_back.addEventHandler("onclick", this.btn_back_onclick, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("OrderForm.xfdl", true);

       
    };
}
)();

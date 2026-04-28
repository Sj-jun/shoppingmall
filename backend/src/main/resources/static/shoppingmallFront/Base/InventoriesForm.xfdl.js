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
                this.set_name("InventoriesForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1060,718);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inven", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"regionId\" type=\"STRING\" size=\"256\"/><Column id=\"regionName\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"countryName\" type=\"STRING\" size=\"256\"/><Column id=\"locationId\" type=\"STRING\" size=\"256\"/><Column id=\"locationName\" type=\"STRING\" size=\"256\"/><Column id=\"warehouseId\" type=\"STRING\" size=\"256\"/><Column id=\"warehouseName\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"warehouseName\" type=\"STRING\" size=\"256\"/><Column id=\"regionId\" type=\"STRING\" size=\"256\"/><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"locationId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_region", this);
            obj._setContents("<ColumnInfo><Column id=\"regionId\" type=\"STRING\" size=\"256\"/><Column id=\"regionName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_country", this);
            obj._setContents("<ColumnInfo><Column id=\"countryId\" type=\"STRING\" size=\"256\"/><Column id=\"countryName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"locationId\" type=\"STRING\" size=\"256\"/><Column id=\"locationName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_header", this);
            obj._setContents("<ColumnInfo><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"colName\" type=\"STRING\" size=\"256\"/><Column id=\"cellIndex\" type=\"STRING\" size=\"256\"/><Column id=\"row\" type=\"STRING\" size=\"256\"/><Column id=\"colspan\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_inven", "absolute", "39", "248", "982", "410", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_inven");
            obj.set_scrollbars("autovert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"236\"/><Column size=\"87\"/><Column size=\"187\"/><Column size=\"171\"/><Column size=\"187\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#c8ebffff;\" text=\"카테고리\"/><Cell col=\"1\" style=\"background:#c8ebffff;\" text=\"상품명\"/><Cell col=\"2\" style=\"background:#c8ebffff;\" text=\"지역\"/><Cell col=\"3\" style=\"background:#c8ebffff;\" text=\"국가\"/><Cell col=\"4\" style=\"background:#c8ebffff;\" text=\"창고위치\"/><Cell col=\"5\" style=\"background:#c8ebffff;\" text=\"창고명\"/></Band><Band id=\"body\"><Cell style=\"align:left;padding:5 5 5 5;\" text=\"bind:categoryName\"/><Cell col=\"1\" style=\"align:left;padding:5 5 5 5;color:blue;color2:blue;font:underline 9 Dotum;cursor:hand;\" text=\"bind:productName\" tooltiptext=\"bind:description\"/><Cell col=\"2\" style=\"align:left;padding:5 5 5 5;\" text=\"bind:regionName\"/><Cell col=\"3\" style=\"align:left;padding:5 5 5 5;\" text=\"bind:countryName\" tooltiptext=\"bind:countryName\"/><Cell col=\"4\" style=\"align:left;padding:5 5 5 5;\" text=\"bind:locationName\" tooltiptext=\"bind:locationName\"/><Cell col=\"5\" style=\"align:left;padding:5 5 5 5;color:blue;color2:blue;font:underline 9 Dotum;cursor:hand;\" text=\"bind:warehouseName\" tooltiptext=\"bind:warehouseName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_inven", "absolute", "40", "122", "981", "87", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("gainsboro");
            this.addChild(obj.name, obj);
            obj = new Static("sta_cat", "absolute", "46", "10", "48", "28", null, null, this.div_inven);
            obj.set_taborder("6");
            obj.set_text("카테고리");
            this.div_inven.addChild(obj.name, obj);
            obj = new Static("sta_country", "absolute", "297", "49", "27", "28", null, null, this.div_inven);
            obj.set_taborder("7");
            obj.set_text("국가");
            this.div_inven.addChild(obj.name, obj);
            obj = new Static("sta_prod", "absolute", "287", "10", "39", "28", null, null, this.div_inven);
            obj.set_taborder("8");
            obj.set_text("상품명");
            this.div_inven.addChild(obj.name, obj);
            obj = new Static("sta_loc", "absolute", "516", "49", "50", "28", null, null, this.div_inven);
            obj.set_taborder("9");
            obj.set_text("창고위치");
            this.div_inven.addChild(obj.name, obj);
            obj = new Static("sta_wh", "absolute", "528", "10", "40", "28", null, null, this.div_inven);
            obj.set_taborder("10");
            obj.set_text("창고명");
            this.div_inven.addChild(obj.name, obj);
            obj = new Static("sta_reg", "absolute", "70", "47", "27", "28", null, null, this.div_inven);
            obj.set_taborder("11");
            obj.set_text("지역");
            this.div_inven.addChild(obj.name, obj);
            obj = new Combo("cbo_category", "absolute", "102", "10", "140", "28", null, null, this.div_inven);
            this.div_inven.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_category");
            obj.set_codecolumn("categoryId");
            obj.set_datacolumn("categoryName");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("center middle");
            obj = new Combo("cbo_country", "absolute", "331", "49", "140", "28", null, null, this.div_inven);
            this.div_inven.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@ds_country");
            obj.set_codecolumn("countryId");
            obj.set_datacolumn("countryName");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("center middle");
            obj = new Combo("cbo_location", "absolute", "572", "49", "140", "28", null, null, this.div_inven);
            this.div_inven.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@ds_location");
            obj.set_codecolumn("locationId");
            obj.set_datacolumn("locationName");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("center middle");
            obj = new Combo("cbo_region", "absolute", "102", "49", "140", "28", null, null, this.div_inven);
            this.div_inven.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_region");
            obj.set_codecolumn("regionId");
            obj.set_datacolumn("regionName");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("center middle");
            obj = new Edit("edt_prodName", "absolute", "331", "10", "140", "28", null, null, this.div_inven);
            obj.set_taborder("1");
            obj.set_maxlength("85");
            obj.set_lengthunit("utf8");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_padding("5 5 5 5");
            this.div_inven.addChild(obj.name, obj);
            obj = new Edit("edt_whName", "absolute", "572", "10", "140", "28", null, null, this.div_inven);
            obj.set_taborder("2");
            obj.set_maxlength("85");
            obj.set_lengthunit("utf8");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_padding("5 5 5 5");
            this.div_inven.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "32.72%", "39", "10", "48", null, null, this.div_inven);
            obj.set_taborder("12");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_inven.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "47.71%", "147", "522", "8", null, null, this.div_inven);
            obj.set_taborder("13");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_inven.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "2.14%", "155", "522", "8", null, null, this.div_inven);
            obj.set_taborder("14");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_inven.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "36.09%", "155", "10", "48", null, null, this.div_inven);
            obj.set_taborder("15");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_inven.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "56.57%", "160", "10", "48", null, null, this.div_inven);
            obj.set_taborder("16");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_inven.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", "879", "85", "70", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "807", "85", "70", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset", "absolute", "770", "85", "35", "30", null, null, this);
            obj.set_taborder("4");
            obj.style.set_image("URL('C:/Users/e1/Pictures/reset3.png')");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_font("18 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "948", "84", "4", "48", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "12.34%", "122", "10", "48", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "42", "78", "92", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "48.49%", "114", "522", "8", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "876", "81", "4", "48", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "48.31%", "243", "522", "5", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_catMgr", "absolute", "913", "214", "108", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_text("카테고리관리");
            obj.style.set_background("transparent");
            obj.style.set_border("1 solid midnightblue");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "49.06%", "209", "522", "5", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_changeAll", "absolute", "839", "214", "70", "30", null, null, this);
            obj.set_taborder("17");
            obj.set_text("일괄변경");
            obj.style.set_background("transparent");
            obj.style.set_border("1 solid midnightblue");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "909", "206", "4", "48", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "996", "82", "23", "48", null, null, this);
            obj.set_taborder("20");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_invenList", "absolute", "39", "91", "108", "28", null, null, this);
            obj.set_taborder("22");
            obj.set_text("▣ 재고 목록");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "39", "50", "268", "40", null, null, this);
            obj.set_taborder("23");
            obj.set_text("∘ 재고 목록 및 상품 등록");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "3.77%", "122", "900", "10", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "3.77%", "199", "900", "10", null, null, this);
            obj.set_taborder("25");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "33.9%", "127", "10", "48", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "56.59%", "161", "10", "48", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "26.37%", "133", "45", "66", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "48.02%", "133", "45", "66", null, null, this);
            obj.set_taborder("29");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "56.59%", "127", "10", "48", null, null, this);
            obj.set_taborder("31");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "12.34%", "169", "10", "48", null, null, this);
            obj.set_taborder("32");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "3.77%", "132", "45", "66", null, null, this);
            obj.set_taborder("33");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "176", "0", "40", "60", null, null, this);
            obj.set_taborder("35");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0", "215", "40", "60", null, null, this);
            obj.set_taborder("36");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "348", "658", "40", "60", null, null, this);
            obj.set_taborder("37");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "1020", "251", "40", "60", null, null, this);
            obj.set_taborder("38");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", "951", "85", "70", "30", null, null, this);
            obj.set_taborder("39");
            obj.set_text("엑셀");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "804", "82", "4", "48", null, null, this);
            obj.set_taborder("40");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_back", "absolute", "17", "15", "25", "25", null, null, this);
            obj.set_taborder("41");
            obj.style.set_image("URL('C:/Users/e1/Desktop/CssImage/free-icon-left-6657529.png')");
            obj.style.set_background("@gradation");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_bordertype("normal 10 10");
            obj.style.set_font("18 arial");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 981, 87, this.div_inven,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("gainsboro");

            	}
            );
            this.div_inven.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1060, 718, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","grd_inven","","ds_inven","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_inven.cbo_category","value","ds_cond","categoryId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_inven.cbo_region","value","ds_cond","regionId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_inven.edt_prodName","value","ds_cond","productName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_inven.edt_whName","value","ds_cond","warehouseName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_inven.cbo_country","value","ds_cond","countryId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_inven.cbo_location","value","ds_cond","locationId");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("InventoriesForm.xfdl", function(exports) {
        /*
        화면명 : 재고 목록 및 상품 등록
        작성자 : 정상준
        작성일자 : 2026-04-03
        */
        this.btn_back_onclick = function(obj,e)
        {
            this.getOwnerFrame().set_formurl("Base::MainForm.xfdl");
        };

        // 팝업 모드 (I: 등록, U: 수정)
        this.fv_mode = "";

        // 수정 시 사용할 상품ID
        this.fv_focusProductId ="";
        this.fv_warehouseId="";

        this.InventoriesForm_onload = function(obj,e)
        {
        	if (this.ds_cond.getRowCount() == 0)
            {
                this.ds_cond.addRow();
            }

            // 검색조건 초기화
            this.ds_cond.setColumn(0, "categoryId", "");
            this.ds_cond.setColumn(0, "productName", "");
            this.ds_cond.setColumn(0, "warehouseName", "");
            this.ds_cond.setColumn(0, "regionId", "");
            this.ds_cond.setColumn(0, "countryId", "");
            this.ds_cond.setColumn(0, "locationId", "");
            
            // 조회영역 국가/위치 비활성화
            this.div_inven.cbo_country.set_enable(false);
            this.div_inven.cbo_location.set_enable(false);
            this.div_inven.cbo_category.set_index(0);
            this.div_inven.cbo_region.set_index(0);
            this.div_inven.cbo_country.set_index(0);
            this.div_inven.cbo_location.set_index(0);

            // 조회용 카테고리, 지역
            this.fn_loadCategory();
            
            this.fn_loadRegion();
            this.fn_search();

        }

        this.onkeydown = function(obj,e){
        	if(e.keycode == 13){
        		this.btn_search.setFocus();
        		this.fn_search();
        	}
        }
        // =====================================================================
        // 조회용 카테고리, 지역, 국가, 위치
        // =====================================================================

        this.fn_loadCategory = function()
        {
            this.transaction(
                "getCategoryList",
                "http://localhost:8080/categoryList",
                "",
                "ds_category=ds_category",
                "",
                "fn_categoryCallback"
            );
        };
        this.fn_categoryCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        	this.div_inven.cbo_category.set_index(0);
        }
        // 지역=====================================================================           
        this.fn_loadRegion = function()
        {
            this.transaction(
                "getRegionList",
                "http://localhost:8080/regionList",
                "",
                "ds_region=ds_region",
                "",
                "fn_regionCallback"
            );
        };
        this.fn_regionCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        	this.div_inven.cbo_region.set_index(0);			
        }
        //국가 ===================================================================== 
        this.fn_loadCountry = function()
        {
            this.transaction(
                "getCountryList",
                "http://localhost:8080/countryList",
                "ds_cond=ds_cond",
                "ds_country=ds_country",
                "",
                "fn_countryCallback"
            );
        };
        this.fn_countryCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }

        	this.div_inven.cbo_country.set_index(0);
        	this.div_inven.cbo_country.set_enable(true);
        }

        //위치 =====================================================================
        this.fn_loadLocation = function()
        {
            this.transaction(
                "getLocationList",
                "http://localhost:8080/locationList",
                "ds_cond=ds_cond",
                "ds_location=ds_location",
                "",
                "fn_locationCallback"
            );
        };
        this.fn_locationCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        	this.div_inven.cbo_location.set_index(0);
        	this.div_inven.cbo_location.set_enable(true);

        }          
        // =====================================================================
        // 조회영역 - 지역 변경
        // =====================================================================
        this.div_inven.cbo_region_onitemchanged = function(obj,e)
        {
            this.ds_cond.setColumn(0, "regionId", obj.value);
            this.ds_cond.setColumn(0, "countryId", "");
            this.ds_cond.setColumn(0, "locationId", "");

            this.div_inven.cbo_country.set_value("");
            this.div_inven.cbo_location.set_value(null);
            
            this.ds_country.clearData();
            this.ds_location.clearData();
            
        	this.div_inven.cbo_country.set_index(0);
            this.div_inven.cbo_location.set_index(0);
            
            this.div_inven.cbo_country.set_enable(false);
            this.div_inven.cbo_location.set_enable(false);

            if (obj.value == "" || obj.value == null) 
            {
        		this.ds_cond.setColumn(0, "regionId", null);
        		this.div_inven.cbo_region.set_value(null);
        		this.div_inven.cbo_region.set_index(0);
        		return;
            }

            this.fn_loadCountry();
        };

        // =====================================================================
        // 조회영역 - 국가 변경
        // =====================================================================
        this.div_inven.cbo_country_onitemchanged = function(obj,e)
        {
            this.ds_cond.setColumn(0, "countryId", obj.value);
            this.ds_cond.setColumn(0, "locationId", "");

            this.div_inven.cbo_location.set_value(null);
            this.div_inven.cbo_location.set_index(0);
            this.ds_location.clearData();

        	this.div_inven.cbo_location.set_index(0);
            this.div_inven.cbo_location.set_enable(false);

            if (obj.value == "" || obj.value == null) return;

            this.fn_loadLocation();

        
        };

        // =====================================================================
        // 조회
        // =====================================================================
        this.btn_search_onclick = function(obj,e)
        {
            this.fn_search();
        };

        this.fn_search = function()
        {	  
            this.transaction(
                "getInvenList",
                "http://localhost:8080/InvenList",
                "ds_cond=ds_cond",
                "ds_inven=ds_inven",
                "",
                "fn_searchCallback"
            );
        };
        this.fn_searchCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
            if (this.fv_focusProductId)
            {
        		var nRow = 0;
                for (var i = 0; i < this.ds_inven.getRowCount(); i++)
                {	
        			
                    var sId = this.ds_inven.getColumn(i, "productId");
                    if(this.fv_warehouseId){
        				var sWhId = this.ds_inven.getColumn(i, "warehouseId");
        				if (String(sId) == String(this.fv_focusProductId) 
        						&& String(sWhId) == String(this.fv_warehouseId))
        				{
        					trace("찾은 row = " + i);
        					nRow = i;
        				}
        			}else{
        			
        				if (String(sId) == String(this.fv_focusProductId))
        				{
        					trace("찾은 row = " + i);
        					nRow = i	
        				}
        			}
        		}
        		this.ds_inven.set_rowposition(nRow);
        		this.grd_inven.setCellPos(nRow); // 첫 컬럼 포커스
                // 한번 쓰고 초기화
                this.fv_focusProductId = "";
                this.fv_warehouseId = "";
        	}
            
        };
        // =====================================================================
        // 화면 검색조건 초기화
        // =====================================================================
        this.fn_reset = function()
        {
            
            this.div_inven.cbo_category.set_value("");
            this.div_inven.cbo_region.set_value("");
            this.div_inven.cbo_country.set_value("");
            this.div_inven.cbo_location.set_value("");
            
            this.div_inven.cbo_country.set_enable(false);
            this.div_inven.cbo_location.set_enable(false);
            
            // 2. 검색조건 dataset 초기화
            this.ds_cond.clearData();
        	
            var nRow = this.ds_cond.addRow();
            this.ds_cond.setColumn(nRow, "categoryId", "");
            this.ds_cond.setColumn(nRow, "productName", "");
            this.ds_cond.setColumn(nRow, "warehouseName", "");
            this.ds_cond.setColumn(nRow, "regionId", "");
            this.ds_cond.setColumn(nRow, "countryId", "");
            this.ds_cond.setColumn(nRow, "locationId", "");
            
            this.div_inven.cbo_region.set_index(0);
        	this.div_inven.cbo_country.set_index(0);
        	this.div_inven.cbo_location.set_index(0);

        
        };

        //등록버튼 클릭이벤트
        this.btn_insert_onclick = function(obj,e)
        {
            this.fn_ProductPopup("I", "");
        };

        //그리드 상품명 클릭시 수정이벤트
        this.grd_inven_oncelldblclic = function(obj,e)
        {
        	//상품 수정
            if (e.cell == 1)
            {
                var nRow = e.row;
                this.fv_warehouseId = this.ds_inven.getColumn(nRow, "warehouseId");
                var sProductId = this.ds_inven.getColumn(nRow, "productId");
                trace("선택한 상품번호 = " + sProductId);
                this.fn_ProductPopup("U", sProductId);
            }
            
            //재고 수정
            if (e.cell == 5)
            {
                var nRow = e.row;
                
                var sWarehouseId = this.ds_inven.getColumn(nRow, "warehouseId");
                var sProductId = this.ds_inven.getColumn(nRow, "productId");
                
                this.fv_focusProductId =sProductId;
                trace("선택한 창고번호 = " + sWarehouseId);
                trace("선택한 상품번호 = " + sProductId);
                this.fn_invenPopup(sWarehouseId, sProductId);
            }
        };
        //========================================================================
        //팝업을 여는 함수
        //========================================================================
        this.fn_createChildFrame = function(sPopupId,sFormUrl)
        {
            var objChildFrame = new ChildFrame();

            objChildFrame.init(
                sPopupId,
                100,
                100,
                1000,
                700,
                null,
                null
            );

            objChildFrame.set_formurl(sFormUrl);
            objChildFrame.set_showtitlebar(true);
            objChildFrame.set_resizable(true);
            objChildFrame.set_openalign("center middle");

            return objChildFrame;
        };
        //========================================================================
        //카테고리 팝업, 콜백
        //========================================================================
        this.fn_openCategoryPopup = function()
        {
            var objChildFrame = this.fn_createChildFrame(
                "CategoryPopupForm",
                "Base::CategoryPopupForm.xfdl"
            );

            objChildFrame.showModal(
                this.getOwnerFrame(),
                "",
                this,
                "fn_categoryPopupCallback"
            );
        };
        this.fn_categoryPopupCallback = function(sPopupId,sReturn)
        {
            trace("popup closed, popupId=" + sPopupId + ", return=" + sReturn);
            if (!sReturn) return;
        	//카테고리 재조회
        	this.fn_loadCategory();
        	// 필요하면 조회도 다시
        	this.fn_search();
        }   
        //========================================================================
        //상품 등록/수정 팝업, 콜백
        //========================================================================
        this.fn_ProductPopup = function(sMode,sProductId)
        {
        	this.fv_popupMode = sMode;
        	var objChildFrame = this.fn_createChildFrame(
                "ProductPopupForm",
                "Base::ProductPopupForm.xfdl"
            );
            objChildFrame.showModal(
        		"ProductPopupForm",
                this.getOwnerFrame(),
        		{
        			mode: sMode,
        			productId: sProductId
        		},
        		this,
                "fn_productPopupCallback"
            );
        }

        this.fn_productPopupCallback = function(sPopupId,sReturn)
        {
        	trace("모드" + this.fv_popupMode+ "id: " + sReturn);
        	if (!sReturn) return;
        	this.fv_focusProductId = sReturn;

        	if (this.fv_popupMode == "I")
        	{
        		this.fn_reset();
        		this.fn_search();
        	}
        	else if (this.fv_popupMode == "U")
        	{
        		this.fn_search();
        	}
        };

        //========================================================================
        //재고 수정 팝업, 콜백
        //========================================================================
        this.fn_invenPopup = function(sWarehouseId,sProductId)
        {
        	var objChildFrame = this.fn_createChildFrame(
                "InvenPopupForm",
                "Base::InvenPopupForm.xfdl"
            );
            objChildFrame.showModal(
        		"InvenPopupForm",
                this.getOwnerFrame(),
        		{
        			warehouseId: sWarehouseId,
        			productId: sProductId
        		},
        		this,
                "fn_invenPopupCallback"
            );
        }
        this.fn_invenPopupCallback = function(sPopupId,sReturn)
        {
        	
        	if (!sReturn) return;
        	
        	this.fv_warehouseId=sReturn;
            this.fn_search();
        }
        //========================================================================
        //일괄 변경 팝업, 콜백
        //========================================================================
        this.fn_ChangePopup = function()
        {
        	var objChildFrame = this.fn_createChildFrame(
                "ChangePopupForm",
                "Base::ChangePopupForm.xfdl"
            );
            objChildFrame.showModal(
        		"ChangePopupForm",
                this.getOwnerFrame(),
        		"",
        		this,
                "fn_ChangePopupCallback"
            );
        }
        this.fn_ChangePopupCallback = function(sPopupId,sReturn)
        {
        	if (!sReturn) return;
            trace("popup closed, popupId=" + sPopupId + ", return=" + sReturn);
        	//카테고리 재조회
        	this.fn_loadCategory();
        	// 필요하면 조회도 다시
        	this.fn_search();
        }

        //==================================
        //엑셀 버튼
        //==================================
        // 오늘 날짜 YYYYMMDD 반환
        //==================================
        //엑셀 버튼
        //==================================
        // 오늘 날짜 YYYYMMDD_HHMMSS 반환
        this.fn_getToday = function()
        {
            var d = new Date();

            var yyyy = d.getFullYear();
            var mm = d.getMonth() + 1;
            var dd = d.getDate();
            var H = this.fn_lpad(d.getHours(), 2);
            var M = this.fn_lpad(d.getMinutes(), 2);
            var S = this.fn_lpad(d.getSeconds(), 2);

            mm = (mm < 10 ? "0" : "") + mm;
            dd = (dd < 10 ? "0" : "") + dd;

            return "" + yyyy + mm + dd + "_" + H + M + S;
        };

        this.fn_lpad = function(v,len)
        {
            v = String(v);
            while (v.length < len)
            {
                v = "0" + v;
            }
            return v;
        };

        // 공통 엑셀 서버로 보낼 헤더 데이터셋 생성
        this.fn_makeExcelHeader = function()
        {
            this.ds_header.clearData();

            var bodyCellCount = this.grd_inven.getCellCount("body");
            var excelCol = 0;

            for (var i = 0; i < bodyCellCount; i++)
            {
                // Grid body cell의 text에서 실제 bind 컬럼명을 가져온다.
                var bodyText = this.grd_inven.getCellProperty("body", i, "text");

                if (!bodyText || bodyText.indexOf("bind:") != 0)
                {
                    continue;
                }

                var colId = bodyText.substr(5);

                // Grid head cell의 text를 엑셀 헤더명으로 사용한다.
                var headText = this.grd_inven.getCellProperty("head", i, "text");

                if (!headText)
                {
                    headText = colId;
                }

                var row = this.ds_header.addRow();
                this.ds_header.setColumn(row, "row", "1");
                this.ds_header.setColumn(row, "cellIndex", String(excelCol));
                this.ds_header.setColumn(row, "colspan", "1");
                this.ds_header.setColumn(row, "colId", colId);
                this.ds_header.setColumn(row, "colName", headText);

                excelCol++;
            }
        };

        this.btn_excel_onclick = function(obj,e)
        {
            if (this.ds_inven.getRowCount() <= 0)
            {
                alert("엑셀로 저장할 데이터가 없습니다.");
                return;
            }

            // 그리드에 보이는 컬럼 기준으로 엑셀 헤더 정보를 만든다.
            this.fn_makeExcelHeader();

            var fileName = "inventories_" + this.fn_getToday();
            var sheetName = "Sheet1";
            var excelFilePath = "";

            var args = "";
            args += "fileName=" + fileName;
            args += " sheetName=" + sheetName;
            args += " excelFilePath=" + excelFilePath;

            this.transaction(
                "commonExcelCreate",
                "http://localhost:8080/common/excel/create",
                "ds_header=ds_header ds_body=ds_inven",
                "ds_result=ds_result",
                args,
                "fn_excelExportCallback"
            );
        };

        this.fn_excelExportCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert("엑셀 생성 실패: " + sErrorMsg);
                return;
            }

            var filePath = this.ds_result.getColumn(0, "FILE_PATH");
            var fileName = this.ds_result.getColumn(0, "FILE_NAME");

            if (!filePath)
            {
                alert("생성된 엑셀 파일 경로가 없습니다.");
                return;
            }

            if (!fileName)
            {
                fileName = "inventories_" + this.fn_getToday();
            }

            if (fileName.toLowerCase().indexOf(".xlsx") < 0)
            {
                fileName += ".xlsx";
            }

            if (application && application._endCommProgress)
            {
                application._endCommProgress();
            }

            var url = "http://localhost:8080/common/excel/download"
                + "?excelFilePath=" + encodeURIComponent(filePath)
                + "&fileName=" + encodeURIComponent(fileName);

            this.fn_excelRuntimeDownload(url, fileName);
        };

        // Runtime 모드에서 저장 위치 선택창을 띄워 파일을 다운로드한다.
        this.fn_excelRuntimeDownload = function(url,fileName)
        {
            // FileDownload 컴포넌트가 없으면 동적으로 생성
            if (!this.FileDownloadExcel)
            {
                var obj = new FileDownload("FileDownloadExcel", "absolute", 0, 0, 1, 1, null, null, this);
                this.addChild("FileDownloadExcel", obj);

                obj.addEventHandler("onsuccess", this.FileDownloadExcel_onsuccess, this);
                obj.addEventHandler("onerror", this.FileDownloadExcel_onerror, this);

                obj.show();
            }

            // 저장창에 기본으로 표시할 파일명
            this.FileDownloadExcel.set_downloadfilename(fileName);

            // 저장창 파일 형식 필터
            this.FileDownloadExcel.set_filefilter("Excel File (*.xlsx)|*.xlsx|All Files (*.*)|*.*|");
            this.FileDownloadExcel.set_filefilterindex(0);

            // Runtime 모드에서는 저장 위치 선택창을 띄운 뒤 다운로드한다.
            var ret = this.FileDownloadExcel.download(url);

            if (!ret)
            {
                return;
            }
        };

        this.FileDownloadExcel_onsuccess = function(obj,e)
        {
            trace("엑셀 다운로드 성공: " + e.targetfullpath);
            alert("저장되었습니다.");
        };

        this.FileDownloadExcel_onerror = function(obj,e)
        {
            alert("엑셀 다운로드 실패: " + e.errormsg);
        };

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.InventoriesForm_onload, this);
            this.addEventHandler("onkeyup", this.onkeydown, this);
            this.grd_inven.addEventHandler("oncellclick", this.grd_inven_oncelldblclic, this);
            this.div_inven.sta_cat.addEventHandler("onclick", this.div_inven_Static00_onclick, this);
            this.div_inven.sta_country.addEventHandler("onclick", this.div_inven_Static00_onclick, this);
            this.div_inven.sta_prod.addEventHandler("onclick", this.div_inven_Static00_onclick, this);
            this.div_inven.sta_loc.addEventHandler("onclick", this.div_inven_Static00_onclick, this);
            this.div_inven.sta_wh.addEventHandler("onclick", this.div_inven_Static00_onclick, this);
            this.div_inven.sta_reg.addEventHandler("onclick", this.div_inven_Static00_onclick, this);
            this.div_inven.cbo_country.addEventHandler("onitemchanged", this.div_inven.cbo_country_onitemchanged, this);
            this.div_inven.cbo_location.addEventHandler("onitemchanged", this.div_inven_cbo_location_onitemchanged, this);
            this.div_inven.cbo_region.addEventHandler("onitemchanged", this.div_inven.cbo_region_onitemchanged, this);
            this.div_inven.Static04.addEventHandler("onclick", this.Static04_onclick, this);
            this.div_inven.Static10.addEventHandler("onclick", this.Static04_onclick, this);
            this.div_inven.Static17.addEventHandler("onclick", this.Static04_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_reset.addEventHandler("onclick", this.fn_reset, this);
            this.Static04.addEventHandler("onclick", this.Static04_onclick, this);
            this.Static13.addEventHandler("onclick", this.Static13_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_catMgr.addEventHandler("onclick", this.fn_openCategoryPopup, this);
            this.Static03.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_changeAll.addEventHandler("onclick", this.fn_ChangePopup, this);
            this.Static10.addEventHandler("onclick", this.Static04_onclick, this);
            this.Static11.addEventHandler("onclick", this.Static04_onclick, this);
            this.Static14.addEventHandler("onclick", this.Static04_onclick, this);
            this.Static15.addEventHandler("onclick", this.Static04_onclick, this);
            this.Static17.addEventHandler("onclick", this.Static04_onclick, this);
            this.Static18.addEventHandler("onclick", this.Static04_onclick, this);
            this.Static19.addEventHandler("onclick", this.Static04_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_back.addEventHandler("onclick", this.btn_back_onclick, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("InventoriesForm.xfdl", true);

       
    };
}
)();

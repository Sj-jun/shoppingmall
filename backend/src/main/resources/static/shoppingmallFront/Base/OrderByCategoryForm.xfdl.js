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
                this._setFormPosition(0,0,1062,649);
            }
            this.style.set_color("ivory");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"toDate\" type=\"STRING\" size=\"256\"/><Column id=\"fromDate\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_order", this);
            obj.set_keystring("G:categoryName G:productName G:year G:month");
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"quantity\" type=\"STRING\" size=\"256\"/><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pivot", this);
            obj.set_keystring("G:categoryName G:productName");
            obj._setContents("<ColumnInfo><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_header", this);
            obj._setContents("<ColumnInfo><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"colName\" type=\"STRING\" size=\"256\"/><Column id=\"cellIndex\" type=\"STRING\" size=\"256\"/><Column id=\"row\" type=\"STRING\" size=\"256\"/><Column id=\"colspan\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("div_cond", "absolute", "40", "127", "982", "45", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("gainsboro");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_order", "absolute", "40", "180", "982", "410", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_pivot");
            obj.set_scrollbars("autoboth");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_category", "absolute", "144", "135", "156", "28", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_category");
            obj.set_codecolumn("categoryId");
            obj.set_datacolumn("categoryName");
            obj.style.set_align("center middle");

            obj = new Static("sta_category", "absolute", "84", "135", "52", "28", null, null, this);
            obj.set_taborder("5");
            obj.set_text("카테고리");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_product", "absolute", "344", "135", "43", "28", null, null, this);
            obj.set_taborder("6");
            obj.set_text("상품명");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_product", "absolute", "391", "135", "156", "28", null, null, this);
            obj.set_taborder("1");
            obj.style.set_color("#46463dff");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("85");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to", "absolute", "776", "135", "120", "28", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.style.set_padding("5 5 5 10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Calendar("cal_from", "absolute", "637", "135", "120", "28", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.style.set_padding("5 5 5 10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM-dd");

            obj = new Static("sta_date", "absolute", "591", "135", "38", "28", null, null, this);
            obj.set_taborder("7");
            obj.set_text("주문일");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "43.79%", "172", "522", "8", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "85", null, "48", "96.05%", null, this);
            obj.set_taborder("10");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "12.71%", "127", "10", "48", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "299", "127", "45", "48", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "35.88%", "127", "10", "48", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "546", "125", "45", "48", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "59.13%", "125", "10", "48", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "761", "135", "12", "28", null, null, this);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "757", "125", "6", "48", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "770", "125", "6", "48", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "880", "91", "70", "30", null, null, this);
            obj.set_taborder("19");
            obj.set_text("조회");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "44.07%", "120", "522", "8", null, null, this);
            obj.set_taborder("20");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "39", "93", "222", "28", null, null, this);
            obj.set_taborder("21");
            obj.set_text("▣ 카테고리별 주문 목록");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "37", "79", "94", "20", null, null, this);
            obj.set_taborder("22");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("title", "absolute", "39", "50", "382", "40", null, null, this);
            obj.set_taborder("23");
            obj.set_text("∘ 카테고리별 주문 목록");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "174", "40", "60", null, null, this);
            obj.set_taborder("25");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "196", "0", "40", "60", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "1022", "289", "40", "60", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "456", "589", "40", "60", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", "952", "91", "70", "30", null, null, this);
            obj.set_taborder("29");
            obj.set_text("엑셀");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "949", "83", "4", "48", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_back", "absolute", "18", "15", "25", "25", null, null, this);
            obj.set_taborder("31");
            obj.style.set_image("URL('Images::free-icon-left-6657529.png')");
            obj.style.set_background("@gradation");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("18 arial");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "40", "127", "45", "48", null, null, this);
            obj.set_taborder("32");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1062, 649, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_color("ivory");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","edt_product","value","ds_cond","productName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cal_to","value","ds_cond","toDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_category","value","ds_cond","categoryId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","grd_order","","ds_pivot","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cal_from","value","ds_cond","fromDate");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("OrderByCategoryForm.xfdl", function(exports) {
        /*
        화면명 : 카테고리별 주문 목록
        작성자 : 정상준
        작성일자 : 2026-04-15
        */
        this.btn_back_onclick = function(obj,e)
        {
            this.getOwnerFrame().set_formurl("Base::MainForm.xfdl");
        };

        this.OrderByCategoryForm_onload = function(obj,e)
        {
            this.fn_loadCategory();
            this.fn_search();
        };
        this.enter = true;
        this.onkeydown = function(obj,e){
        	if(e.keycode == 13){
        		this.btn_search.setFocus();
        		this.fn_search();
        	}
        }

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

            this.cbo_category.set_index(0);
        };

        this.btn_search_onclick = function(obj,e)
        {
            this.fn_search();
        };
        //==========================================
        //날짜 별 주문 목록을 불러온다.
        //==========================================
        this.fn_search = function()
        {
        	if(!this.enter)
        	{ 
        		alert("주문 시작일은 종료일보다 이후일 수 없습니다.");
        		return;
        	}
            this.transaction(
                "getMonthOrder",
                "http://localhost:8080/category/month",
                "ds_cond=ds_cond",
                "ds_order=ds_order",
                "",
                "fn_MonthOrderCallback"
            );
        };

        this.fn_MonthOrderCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }

            this.fn_makePivot();
        };

        //==========================================
        //그리드 피벗
        //==========================================
        this.fn_makePivot = function()
        {
            var dsOrder = this.ds_order;
            var dsPivot = this.ds_pivot;
            
            //중복 없는 월 목록
            var monthMap = {};
            
            //실제 월 컬럼 목록 배열
            var monthKeys = [];
            //카테고리명 + 상품명 조합별로
        	//ds_pivot의 몇 번째 행인지 기억하는 용도
            var rowMap = {};

            dsPivot.set_enableevent(false);
            dsPivot.clear();
        	
        	//피벗 고정 컬럼
            dsPivot.addColumn("categoryName", "STRING", 256);
            dsPivot.addColumn("productName", "STRING", 256);
        	
        	//원본 데이터에서 월 목록 추출
            for (var i = 0; i < dsOrder.getRowCount(); i++)
            {
                var year = this.fn_trim(dsOrder.getColumn(i, "year"));
                //월이 한자리면 0붙임(01, 02)
                var month = this.fn_padLeft(this.fn_trim(dsOrder.getColumn(i, "month")), 2, "0");

                if (!year || !month)
                {
                    continue;
                }

                var monthKey = year + month;

                if (!monthMap[monthKey])
                {
                    monthMap[monthKey] = true;
                    monthKeys.push(monthKey);
                }
            }
        	//시간순 정렬
            monthKeys.sort();
        	
        	//월 컬럼 동적 추가
            for (var i = 0; i < monthKeys.length; i++)
            {
                dsPivot.addColumn(monthKeys[i], "STRING", 256);
            }
        	
        	//피벗 데이터셋 채우기
            for (var i = 0; i < dsOrder.getRowCount(); i++)
            {
                var categoryName = this.fn_trim(dsOrder.getColumn(i, "categoryName"));
                var productName = this.fn_trim(dsOrder.getColumn(i, "productName"));
                var year = this.fn_trim(dsOrder.getColumn(i, "year"));
                var month = this.fn_padLeft(this.fn_trim(dsOrder.getColumn(i, "month")), 2, "0");
                if (!year || !month)
                {
                    continue;
                }

                var monthKey = year + month;
                var quantity = nexacro.toNumber(dsOrder.getColumn(i, "quantity"), 0);
                var rowKey = categoryName + "|" + productName;
                var row = rowMap[rowKey];
        		
        		//첫 행이면 새로 생성
                if (row == null)
                {
                    row = dsPivot.addRow();
                    dsPivot.setColumn(row, "categoryName", categoryName);
                    dsPivot.setColumn(row, "productName", productName);

                    for (var j = 0; j < monthKeys.length; j++)
                    {
                        dsPivot.setColumn(row, monthKeys[j], "0");
                    }

                    rowMap[rowKey] = row;
                }
        		// 현재 행의 해당 월 컬럼 값을 꺼내서 기존 값에 더함
                dsPivot.setColumn(
                    row, monthKey,
                    String(nexacro.toNumber(dsPivot.getColumn(row, monthKey), 0) + quantity)
                );
            }

            dsPivot.set_enableevent(true);
        	if (dsPivot.getRowCount() > 0)
        	{
        		dsPivot.set_rowposition(0);
        	}
            this.fn_makePivotGridFormat(monthKeys);
        };

        this.fn_makePivotGridFormat = function(monthKeys)
        {
            var format = [];

            format.push("<Formats><Format id=\"default\">");
        	format.push("<Columns>");
        	
        	//데이터 10개 이하 그리드 컬럼 사이즈 맞춰주기
        	if (monthKeys.length < 10)
        	{
        		var nTotalCol = monthKeys.length + 2;
        		var nGridWidth = this.grd_order.getOffsetWidth();
        		var nColSize = Math.floor(nGridWidth / nTotalCol);

        		format.push("<Column size=\"" + nColSize + "\"/>");
        		format.push("<Column size=\"" + nColSize + "\"/>");

        		for (var i = 0; i < monthKeys.length; i++)
        		{
        			format.push("<Column size=\"" + nColSize + "\"/>");
        		}
        	}
        	else
        	{
        		format.push("<Column size=\"135\"/>");
        		format.push("<Column size=\"245\"/>");

        		for (var i = 0; i < monthKeys.length; i++)
        		{
        			format.push("<Column size=\"60\"/>");
        		}
        	}
            format.push("</Columns>");
            format.push("<Rows>");
            format.push("<Row size=\"25\" band=\"head\"/>");
            format.push("<Row size=\"25\" band=\"head\"/>");
            format.push("<Row size=\"25\"/>");
            format.push("</Rows>");

            format.push("<Band id=\"head\">");

            // 1행: 카테고리명/상품명 위쪽 빈칸
            format.push("<Cell row=\"0\" col=\"0\" colspan=\"2\" text=\"\" style=\"background:#c8ebffff;\"/>");

            // 2행: 실제 헤더명
            format.push("<Cell row=\"1\" col=\"0\" text=\"카테고리명\" style=\"background:#c8ebffff; background2:#c8ebffff;\" />");
            format.push("<Cell row=\"1\" col=\"1\" text=\"상품명\" style=\"background:#c8ebffff;\"/>");

            // 연도별로 헤더 묶기
            var startIdx = 0;
            while (startIdx < monthKeys.length)
            {
                var year = monthKeys[startIdx].substr(0, 4); //연도 추출
                var span = 1;

                while ((startIdx + span) < monthKeys.length &&
                       monthKeys[startIdx + span].substr(0, 4) == year)
                {
                    span++; //연도 몇개인지 계산
                }

                format.push(
                    "<Cell row=\"0\" col=\"" + (startIdx + 2) + "\" colspan=\"" + span + "\" text=\"" + year + "\" style=\"background:#c8ebffff;\"/>"
                );

                startIdx += span;
            }

            // 2행: 월 표시
            for (var i = 0; i < monthKeys.length; i++)
            {
                var month = String(parseInt(monthKeys[i].substr(4, 2), 10));
                format.push(
                    "<Cell row=\"1\" col=\"" + (i + 2) + "\" text=\"" + month + "\" style=\"background:#c8ebffff;\"/>"
                );
            }

            format.push("</Band>");

            format.push("<Band id=\"body\">");
            format.push("<Cell col=\"0\" text=\"bind:categoryName\" suppress=\"1\" suppressalign=\"middle\" style=\"background:#ffffff; background2:#ffffff; color:#46463dff; selectbackground:#ffffff; selectcolor:#46463dff;\"/>");
            format.push("<Cell col=\"1\" text=\"bind:productName\" style=\"align:left;  padding:5px; \"/>");

            for (var i = 0; i < monthKeys.length; i++)
            {
                format.push("<Cell col=\"" + (i + 2) + "\" text=\"bind:" + monthKeys[i] + "\" style=\"align:right;  padding:5px;\"/>");
            }

            format.push("</Band>");
            format.push("</Format></Formats>");

            this.grd_order.set_formats(format.join(""));
            

        };

        this.fn_trim = function(value)
        {
            if (value == null) return "";
            return String(value).replace(/^\s+|\s+$/g, "");
        };

        this.fn_padLeft = function(value,length,padChar)
        {
            var result = value;
            while (result.length < length)
            {
                result = padChar + result;
            }
            return result;
        };

        
        //주문일 validation
        this.cal_onchanged = function(obj,e)
        {
        	var sFrom = this.cal_from.value;
        	var sTo = this.cal_to.value;
        	if(sFrom && sTo && sFrom > sTo){
        		alert("주문 시작일은 종료일보다 이후일 수 없습니다.");
        		this.enter = false;
                //변경한 쪽 기준으로 처리
                if (obj == this.cal_from)
                {
                    this.cal_from.setFocus();
                }
                else
                {
                    this.cal_to.setFocus();
                }
                return;
            }
            this.enter = true;
        }

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

            var row;
            var i;
            var colId;
            var year;
            var span;

            // 1행: 카테고리명/상품명 위쪽 빈칸 병합
            // 첫번째 줄 0번째 컬럼부터 2칸 병합
            row = this.ds_header.addRow();
            this.ds_header.setColumn(row, "row", "1"); 
            this.ds_header.setColumn(row, "cellIndex", "0");
            this.ds_header.setColumn(row, "colspan", "2");
            this.ds_header.setColumn(row, "colId", "");
            this.ds_header.setColumn(row, "colName", "");

            // 1행: 연도별 그룹 헤더
            i = 2;
            while (i < this.ds_pivot.getColCount())
            {
                colId = this.ds_pivot.getColID(i);

        		//연도 추출
                year = colId.substr(0, 4);
                span = 1;
        		
        		// 같은 연도 컬럼 개수 계산
                while ((i + span) < this.ds_pivot.getColCount())
                {
                    var nextColId = this.ds_pivot.getColID(i + span);

                    if (!nextColId || nextColId.substr(0, 4) != year)
                    {
                        break;
                    }

                    span++;
                }
        		
        		// ds_header에 추가
                row = this.ds_header.addRow();
                this.ds_header.setColumn(row, "row", "1");
                this.ds_header.setColumn(row, "cellIndex", String(i));
                this.ds_header.setColumn(row, "colspan", String(span));
                this.ds_header.setColumn(row, "colId", "");
                this.ds_header.setColumn(row, "colName", year);

                i += span;
            }

            // 2행: 카테고리명
            row = this.ds_header.addRow();
            this.ds_header.setColumn(row, "row", "2");
            this.ds_header.setColumn(row, "cellIndex", "0");
            this.ds_header.setColumn(row, "colspan", "1");
            this.ds_header.setColumn(row, "colId", "categoryName");
            this.ds_header.setColumn(row, "colName", "카테고리명");

            // 2행: 상품명
            row = this.ds_header.addRow();
            this.ds_header.setColumn(row, "row", "2");
            this.ds_header.setColumn(row, "cellIndex", "1");
            this.ds_header.setColumn(row, "colspan", "1");
            this.ds_header.setColumn(row, "colId", "productName");
            this.ds_header.setColumn(row, "colName", "상품명");

            // 2행: 월 헤더
            for (i = 2; i < this.ds_pivot.getColCount(); i++)
            {
                colId = this.ds_pivot.getColID(i);

                var monthName = colId;

                // 201506 -> 06
                if (colId && colId.length == 6)
                {
                    monthName = colId.substr(4, 2);
                }

                row = this.ds_header.addRow();
                this.ds_header.setColumn(row, "row", "2");
                this.ds_header.setColumn(row, "cellIndex", String(i));
                this.ds_header.setColumn(row, "colspan", "1");
                this.ds_header.setColumn(row, "colId", colId);
                this.ds_header.setColumn(row, "colName", monthName);
            }
        };

        this.btn_excel_onclick = function(obj,e)
        {
            if (this.ds_pivot.getRowCount() <= 0)
            {
                alert("엑셀로 저장할 데이터가 없습니다.");
                return;
            }

            // 그리드 헤더 구조와 같은 2줄 헤더 정보를 ds_header에 만든다.
            this.fn_makeExcelHeader();

            var fileName = "category_monthly_orders_" + this.fn_getToday();
            var sheetName = "Sheet1";
            var excelFilePath = "";

            var args = "";
            args += "fileName=" + fileName;
            args += " sheetName=" + sheetName;
            args += " excelFilePath=" + excelFilePath;

            this.transaction(
                "commonExcelCreate",
                "http://localhost:8080/common/excel/create",
                "ds_header=ds_header ds_body=ds_pivot",
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
                fileName = "Employees_" + this.fn_getToday();
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
            this.addEventHandler("onload", this.OrderByCategoryForm_onload, this);
            this.addEventHandler("onkeyup", this.onkeydown, this);
            this.sta_product.addEventHandler("onclick", this.sta_product_onclick, this);
            this.cal_to.addEventHandler("onchanged", this.cal_onchanged, this);
            this.cal_from.addEventHandler("onchanged", this.cal_onchanged, this);
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static01_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.sta_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.title.addEventHandler("onclick", this.Static02_onclick, this);
            this.Static12.addEventHandler("onclick", this.Static12_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_back.addEventHandler("onclick", this.btn_back_onclick, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("OrderByCategoryForm.xfdl", true);

       
    };
}
)();

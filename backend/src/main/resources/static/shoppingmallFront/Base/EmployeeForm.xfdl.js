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
                this.set_name("EmployeeForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1061,651);
            }
            this.style.set_border("1 solid #000000ff");
            this.style.set_bordertype("normal 1 1");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_employees", this);
            obj._setContents("<ColumnInfo><Column id=\"employeeId\" type=\"STRING\" size=\"256\"/><Column id=\"firstName\" type=\"STRING\" size=\"256\"/><Column id=\"lastName\" type=\"STRING\" size=\"256\"/><Column id=\"employeeName\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"managerId\" type=\"STRING\" size=\"256\"/><Column id=\"managerName\" type=\"STRING\" size=\"256\"/><Column id=\"jobTitle\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"employeeName\" type=\"STRING\" size=\"256\"/><Column id=\"hireDateFrom\" type=\"STRING\" size=\"256\"/><Column id=\"hireDateTo\" type=\"STRING\" size=\"256\"/><Column id=\"managerId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"managerId\" type=\"STRING\" size=\"256\"/><Column id=\"managerName\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_header", this);
            obj._setContents("<ColumnInfo><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"colName\" type=\"STRING\" size=\"256\"/><Column id=\"cellIndex\" type=\"STRING\" size=\"256\"/><Column id=\"row\" type=\"STRING\" size=\"256\"/><Column id=\"colspan\" type=\"STRING\" size=\"256\"/><Column id=\"align\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdEmployees", "absolute", "40", "182", "982", "410", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_employees");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            obj.set_cellsizebandtype("nohead");
            obj.set_nodatatext("No Data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"237\"/><Column size=\"164\"/><Column size=\"257\"/><Column size=\"101\"/><Column size=\"156\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#c8ebffff;\" text=\"관리번호\"/><Cell col=\"1\" style=\"background:#c8ebffff;\" text=\"직책\"/><Cell col=\"2\" style=\"background:#c8ebffff;\" text=\"이름\" expandsize=\"13\"/><Cell col=\"3\" style=\"background:#c8ebffff;\" text=\"EMAIL\"/><Cell col=\"4\" style=\"background:#c8ebffff;\" text=\"고용일\"/><Cell col=\"5\" style=\"background:#c8ebffff;\" text=\"관리자명\" expandsize=\"13\"/></Band><Band id=\"body\"><Cell style=\"padding:5 5 5 5;\" text=\"bind:employeeId\" editlengthunit=\"utf8\"/><Cell col=\"1\" style=\"align:left;padding:5 5 5 5;\" text=\"bind:jobTitle\" editlengthunit=\"utf8\"/><Cell col=\"2\" style=\"align:left;padding:5 5 5 5;color:blue;color2:blue;cursor:hand;\" text=\"bind:employeeName\" editlengthunit=\"utf8\"/><Cell col=\"3\" style=\"align:left;padding:5 5 5 5;\" text=\"bind:email\" editlengthunit=\"utf8\" tooltiptext=\"bind:email\"/><Cell col=\"4\" text=\"bind:hireDate\" editlengthunit=\"utf8\"/><Cell col=\"5\" style=\"align:left;padding:5 5 5 5;\" text=\"bind:managerName\" editlengthunit=\"utf8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch", "absolute", "808", "90", "70", "30", null, null, this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd", "absolute", "880", "90", "70", "30", null, null, this);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sub", "absolute", "39", "91", "140", "30", null, null, this);
            obj.set_taborder("8");
            obj.set_text("▣ 직원 목록");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("title", "absolute", "38", "50", "382", "40", null, null, this);
            obj.set_taborder("13");
            obj.set_text("∘ 직원 목록 및 관리");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_cond", "absolute", "40", "128", "982", "45", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("gainsboro");
            obj.style.set_color("darkgray");
            this.addChild(obj.name, obj);
            obj = new Combo("cboManager", "absolute", "680", "8", "186", "28", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@ds_manager");
            obj.set_codecolumn("managerId");
            obj.set_datacolumn("managerName");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("center middle");
            obj = new Calendar("calFrom", "absolute", "325", "8", "120", "28", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.style.set_padding("5 5 5 10");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("null");
            obj = new Calendar("calTo", "absolute", "465", "8", "123", "28", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.style.set_padding("5 5 5 10");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("null");
            obj = new Edit("edtName", "absolute", "79", "8", "156", "28", null, null, this.div_cond);
            obj.set_taborder("12");
            obj.set_maxlength("85");
            obj.set_lengthunit("utf8");
            obj.style.set_padding("5 5 5 5");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("ename", "absolute", "45", "8", "28", "28", null, null, this.div_cond);
            obj.set_taborder("400");
            obj.set_text("이름");
            obj.style.set_font("10 Dotum");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("h_date", "absolute", "279", "8", "41", "28", null, null, this.div_cond);
            obj.set_taborder("500");
            obj.set_text("고용일");
            obj.style.set_font("10 Dotum");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("mgr", "absolute", "633", "8", "55", "28", null, null, this.div_cond);
            obj.set_taborder("600");
            obj.set_text("관리자");
            obj.style.set_font("10 Dotum");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "449", "8", "12", "28", null, null, this.div_cond);
            obj.set_taborder("700");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_font("10 Dotum");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "6.29%", "130", null, "48", "91.97%", null, this.div_cond);
            obj.set_taborder("800");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "460", null, "6", "48", null, "-3", this.div_cond);
            obj.set_taborder("900");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.div_cond.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "10.27%", "127", "10", "48", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Static01");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "33.46%", "126", "10", "48", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "710", "128", "10", "48", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "483", "128", "6", "48", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "25.92%", "127", "45", "48", null, null, this);
            obj.set_taborder("19");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btnReset", "absolute", "771", "90", "35", "30", null, null, this);
            obj.set_taborder("20");
            obj.style.set_image("URL('Images::reset3.png')");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("18 Dotum");
            obj.set_wordwrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "93.03%", "126", null, "48", "2.64%", null, this);
            obj.set_taborder("22");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "59.1%", "128", "45", "48", null, null, this);
            obj.set_taborder("23");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "40", "128", "45", "48", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "50.99%", "174", "522", "8", null, null, this);
            obj.set_taborder("25");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "50.99%", "128", "522", "8", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "877", "86", "4", "48", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "949", "86", "4", "48", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "1022", "87", "4", "48", null, null, this);
            obj.set_taborder("29");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "44", "79", "94", "20", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "48.07%", "120", "522", "8", null, null, this);
            obj.set_taborder("31");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "85.2%", "128", null, "48", "10.46%", null, this);
            obj.set_taborder("32");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_back", "absolute", "18", "15", "25", "25", null, null, this);
            obj.set_taborder("33");
            obj.style.set_image("URL('Images::free-icon-left-6657529.png')");
            obj.style.set_background("@gradation");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_bordertype("normal 10 10");
            obj.style.set_font("18 arial");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "176", "0", "40", "60", null, null, this);
            obj.set_taborder("34");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "168", "40", "60", null, null, this);
            obj.set_taborder("35");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1021", "242", "40", "60", null, null, this);
            obj.set_taborder("36");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "536", "591", "40", "60", null, null, this);
            obj.set_taborder("37");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", "952", "90", "70", "30", null, null, this);
            obj.set_taborder("38");
            obj.set_text("엑셀");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "112.72%", "148", null, "156", "-37.23%", null, this);
            obj.set_text("PopupDiv00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "805", "82", "4", "48", null, null, this);
            obj.set_taborder("39");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 982, 45, this.div_cond,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("gainsboro");
            		p.style.set_color("darkgray");

            	}
            );
            this.div_cond.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1061, 651, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.style.set_border("1 solid #000000ff");
            		p.style.set_bordertype("normal 1 1");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","div_cond.cboManager","value","ds_cond","managerId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_cond.calFrom","value","ds_cond","hireDateFrom");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_cond.calTo","value","ds_cond","hireDateTo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_cond.edtName","value","ds_cond","employeeName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("EmployeeForm.xfdl", function(exports) {
        /*
        화면명 : 직원 목록 및 관리
        작성자 : 정상준
        작성일자 : 2026-03-23
        */

        //팝업창 수정 시 포커스 위함
        this.fv_focusEmployeeId = "";
        this.enter = 0;

        this.btn_back_onclick = function(obj,e)
        {
            this.getOwnerFrame().set_formurl("Base::MainForm.xfdl");
        };
        this.EmployeeForm_onload = function(obj,e)
        {
        	this.div_cond.calFrom.set_value("20160101");
        	this.div_cond.calTo.set_value(this.fn_getToday());
        	this.grdEmployees.setCellProperty("body", 2, "font", "underline");
        	trace("_cookie_variables = " + nexacro._getLocalStorage("_cookie_variables", []));
        	trace("_secure_cookie_variables = " + nexacro._getLocalStorage("_secure_cookie_variables", []));

            this.fn_loadManager();//관리자 콤보 박스 호출
            this.fn_search();
        };

        
        //조회버튼 클릭이벤트
        this.btnSearch_onclick = function(obj,e)
        {
            this.fn_search();
        };
        this.onkeydown = function(obj,e){
        	if(e.keycode == 13){
        	trace("엔터");
        		this.fn_search();
        	}
        }
        //등록버튼 클릭이벤트
        this.btnAdd_onclick = function(obj,e)
        {
            this.fn_openEmployeePopup("I", "");
        };

        
        //초기화버튼 클릭이벤트
        this.btnReset_onclick = function(obj,e)
        {
        	this.fn_reset();
        };

        this.fn_loadManager = function() //서버에 관리자 정보 호출 
        {
            this.transaction(
                "getManagerList",
                "http://localhost:8080/managerList",
                "",
                "ds_manager=ds_manager",
                "",
                "fn_managerCallback"
            );
        };
        this.fn_managerCallback = function(svcID,nErrorCode,sErrorMsg)
        {
        	trace("svcID = " + svcID);
            trace("nErrorCode = " + nErrorCode);
            trace("sErrorMsg = " + sErrorMsg);

        	//콤보 박스의 매니저를 선택 
            if (svcID == "getManagerList")
            {
                trace("manager rowcount = " + this.ds_manager.getRowCount())
                return;

                if (nErrorCode < 0)
                {
                    alert("관리자 목록 조회 실패 : " + sErrorMsg);
                    return;
                }

                if (this.div_cond.cboManager)
                {
                    this.div_cond.cboManager.set_index(0);
                }

                this.fn_search();
                return;
            }
        }
        this.div_cond_cal_onchanged = function(obj,e)
        {
            var sFrom = this.div_cond.calFrom.value;
            var sTo   = this.div_cond.calTo.value;

            // 날짜 조건 1900-01-01
            if (sFrom && sFrom < "19000101")
            {
                alert("고용일은 1900-01-01 이전으로 입력할 수 없습니다.");
                this.div_cond.calFrom.setFocus();
                this.enter = 1;
                return;
            }

            if (sTo && sTo < "19000101")
            {
                alert("고용일은 1900-01-01 이전으로 입력할 수 없습니다.");
                this.div_cond.calTo.setFocus();
                this.enter = 2;
                return;
            }

            // 시작일 > 종료일
            if (sFrom && sTo && sFrom > sTo)
            {
                alert("시작일은 종료일보다 이후일 수 없습니다.");
        		this.enter = 3;
                //변경한 쪽 기준으로 처리
                if (obj == this.div_cond.calFrom)
                {
                    this.div_cond.calFrom.setFocus();
                }
                else
                {
                    this.div_cond.calTo.setFocus();
                }
                return;
            }
            this.enter = 0;
        };

        //직원 정보 조회
        this.fn_search = function()
        {
        	trace("search엔터");
        	if(this.enter == 1 || this.enter == 2){ 
        		alert("고용일은 1900-01-01 이전으로 입력할 수 없습니다.");
        		return;
        	}else if(this.enter == 3){
        		alert("시작일은 종료일보다 이후일 수 없습니다.");
        		return;
        	}else this.enter = 0;
        	
        	//서버에 보내는 조회 조건 변수명에 담기
            var sName = this.div_cond.edtName.value;
            var sFrom = this.div_cond.calFrom.value;
        	var sTo = this.div_cond.calTo.value;
            if (this.div_cond.cboManager)
                sManagerId = this.div_cond.cboManager.value;
        	
            this.ds_cond.clearData();

            var nRow = this.ds_cond.addRow();
            // 검색 조건이 없다면 빈칸(전체)으로 지정
            this.ds_cond.setColumn(nRow, "employeeName", sName ? sName : "");
            this.ds_cond.setColumn(nRow, "hireDateFrom", sFrom ? sFrom : "");
            this.ds_cond.setColumn(nRow, "hireDateTo", sTo ? sTo : "");
            this.ds_cond.setColumn(nRow, "managerId", sManagerId ? sManagerId : "");
        	
        	//직원 검색 정보를 데이터셋에 담아서 서버에 전달
            this.transaction(
                "getEmployeeList",
                "http://localhost:8080/employees",
                "ds_cond=ds_cond",
                "ds_employees=ds_employees",
                "",
                "fn_searchCallback"
            );
        };
        //조회 콜백 함수
        this.fn_searchCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            // 팝업에서 등록/수정한 직원을 포커스하기 위한 함
            if (this.fv_focusEmployeeId)
        	{
        		var nRow = this.ds_employees.findRow("employeeId", this.fv_focusEmployeeId);

        		if (nRow >= 0)
        		{
        			this.ds_employees.set_rowposition(nRow);
        			this.grdEmployees.setFocus();
        		}

        		this.fv_focusEmployeeId = "";
        	}
        	return;   
        };

        //날짜 형식 포멧
        this.fn_formatDate = function(sDate)
        {
            if (!sDate) return "";
            sDate = String(sDate);
            return sDate.substr(0, 4) + "-" + sDate.substr(4, 2) + "-" + sDate.substr(6, 2);
        };

        // 화면 검색조건 초기화
        this.fn_reset = function()
        {
            var sToday = this.fn_getToday();
            
            this.div_cond.edtName.set_value("");
            this.div_cond.calFrom.set_value("20160101");
            this.div_cond.calTo.set_value(sToday);
            this.div_cond.cboManager.set_value("");
            // 2. 검색조건 dataset 초기화
            this.ds_cond.clearData();
         
            var nRow = this.ds_cond.addRow();
            this.ds_cond.setColumn(nRow, "employeeName", "");
            this.ds_cond.setColumn(nRow, "hireDateFrom", "2016-01-01");
            this.ds_cond.setColumn(nRow, "hireDateTo", sToday);
            this.ds_cond.setColumn(nRow, "managerId", "");

            // 3. 결과 grid 비우기
        	//this.fn_search();

            trace("=== 초기화 후 ds_cond ===");
            trace("ds_employees rowcount = " + this.ds_employees.getRowCount());
        };

        // 오늘 날짜 YYYYMMDD 반환
        this.fn_getToday = function()
        {
            var d = new Date();

            var yyyy = d.getFullYear();
            var mm = d.getMonth() + 1;
            var dd = d.getDate();

            mm = (mm < 10 ? "0" : "") + mm;
            dd = (dd < 10 ? "0" : "") + dd;

            return "" + yyyy + mm + dd;
        };

        
        this.grdEmployees_oncelldblclic = function(obj,e)
        {
            if (e.cell == 2)
            {
                var nRow = e.row;
                var sEmployeeId = this.ds_employees.getColumn(nRow, "employeeId");
                trace("선택한 직원번호 = " + sEmployeeId);
                this.fn_openEmployeePopup("U", sEmployeeId);
            }
            
        };

        //모드 저장 통해 등록/수정 구별

        //팝업을 여는 함수
        this.fn_openEmployeePopup = function(sMode,sEmployeeId)
        {
            var objChildFrame = new ChildFrame();
        	this.fv_popupMode = sMode
        	objChildFrame.init(
        		"EmployeePopupForm",
        		100,
        		100,
        		700,
        		300,
        		null,
        		null
        	);
        	objChildFrame.set_formurl("Base::EmployeePopupForm.xfdl");
        	objChildFrame.set_showtitlebar(true);
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openalign("center middle");

        	objChildFrame.showModal(
        		"EmployeePopupForm",          // ⭐ 여기 들어가는 ID
        		this.getOwnerFrame(),
        		{
        			mode: sMode,
        			employeeId: sEmployeeId
        		},
        		this,
        		"fn_popupCallback"
        	);
        };

        //팝업 콜백 함수
        this.fn_popupCallback = function(sPopupId,sReturn)
        {
            trace("popup closed" + sReturn);

            if (!sReturn) return;
        	this.fv_focusEmployeeId = sReturn;
            
            // 등록 후 화면 refresh -> 등록 직원 포커스
        	if(this.fv_popupMode == "I") this.fn_reset();
            this.fn_search();
        };

        //==================================
        //엑셀 버튼
        //==================================
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

            var bodyCellCount = this.grdEmployees.getCellCount("body");
            var excelCol = 0;

            for (var i = 0; i < bodyCellCount; i++)
            {
                // Grid body cell의 text에서 실제 bind 컬럼명을 가져온다.
                var bodyText = this.grdEmployees.getCellProperty("body", i, "text");

                if (!bodyText || bodyText.indexOf("bind:") != 0)
                {
                    continue;
                }

                var colId = bodyText.substr(5);

                // Grid head cell의 text를 엑셀 헤더명으로 사용한다.
                var headText = this.grdEmployees.getCellProperty("head", i, "text");

                if (!headText)
                {
                    headText = colId;
                }

                var excelAlign = this.fn_getExcelBodyAlign(i);

                var row = this.ds_header.addRow();
                this.ds_header.setColumn(row, "row", "1");
                this.ds_header.setColumn(row, "cellIndex", String(excelCol));
                this.ds_header.setColumn(row, "colspan", "1");
                this.ds_header.setColumn(row, "colId", colId);
                this.ds_header.setColumn(row, "colName", headText);
                this.ds_header.setColumn(row, "align", excelAlign);

                excelCol++;
            }
        };

        this.fn_getExcelBodyAlign = function(cellIndex)
        {
            var bodyAlign = this.grdEmployees.getCellProperty("body", cellIndex, "align");

            if (bodyAlign)
            {
                bodyAlign = String(bodyAlign).toLowerCase();

                if (bodyAlign.indexOf("left") >= 0)
                {
                    return "left";
                }

                if (bodyAlign.indexOf("right") >= 0)
                {
                    return "right";
                }
            }

            var bodyStyle = this.grdEmployees.getCellProperty("body", cellIndex, "style");

            if (bodyStyle)
            {
                bodyStyle = String(bodyStyle).toLowerCase();

                if (bodyStyle.indexOf("align:left") >= 0)
                {
                    return "left";
                }

                if (bodyStyle.indexOf("align:right") >= 0)
                {
                    return "right";
                }
            }

            return "center";
        };

        this.btn_excel_onclick = function(obj,e)
        {
            if (this.ds_employees.getRowCount() <= 0)
            {
                alert("엑셀로 저장할 데이터가 없습니다.");
                return;
            }
        	var d = new Date();
            var H = this.fn_lpad(d.getHours(), 2);
            var M = this.fn_lpad(d.getMinutes(), 2);
            var S = this.fn_lpad(d.getSeconds(), 2);
            
            // 그리드에 보이는 컬럼 기준으로 엑셀 헤더 정보를 만든다.
            this.fn_makeExcelHeader();

            var fileName = "Employees_" + this.fn_getToday() + "_" + H + M + S;
            var sheetName = "Sheet1";
            var excelFilePath = "";

            var args = "";
            args += "fileName=" + fileName;
            args += " sheetName=" + sheetName;
            args += " excelFilePath=" + excelFilePath;

            this.transaction(
                "commonExcelCreate",
                "http://localhost:8080/common/excel/create",
                "ds_header=ds_header ds_body=ds_employees",
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
            this.addEventHandler("onload", this.EmployeeForm_onload, this);
            this.addEventHandler("onkeyup", this.onkeydown, this);
            this.grdEmployees.addEventHandler("oncelldblclick", this.grdEmployees_oncelldblclic, this);
            this.btnSearch.addEventHandler("onclick", this.btnSearch_onclick, this);
            this.btnAdd.addEventHandler("onclick", this.btnAdd_onclick, this);
            this.sub.addEventHandler("onclick", this.Static00_onclick, this);
            this.title.addEventHandler("onclick", this.Static02_onclick, this);
            this.div_cond.calFrom.addEventHandler("onchanged", this.div_cond_cal_onchanged, this);
            this.div_cond.calTo.addEventHandler("onchanged", this.div_cond_cal_onchanged, this);
            this.div_cond.edtName.addEventHandler("oneditclick", this.edtName_oneditclick, this);
            this.div_cond.edtName.addEventHandler("onkeydown", this.onkeydown, this);
            this.div_cond.ename.addEventHandler("onclick", this.ename_onclick, this);
            this.div_cond.h_date.addEventHandler("onclick", this.h_date_onclick, this);
            this.div_cond.mgr.addEventHandler("onclick", this.mgr_onclick, this);
            this.div_cond.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);
            this.btnReset.addEventHandler("onclick", this.btnReset_onclick, this);
            this.Static10.addEventHandler("onclick", this.Static10_onclick, this);
            this.btn_back.addEventHandler("onclick", this.btn_back_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("EmployeeForm.xfdl", true);

       
    };
}
)();

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
                this.set_name("EmployeePopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,738,205);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_employee", this);
            obj._setContents("<ColumnInfo><Column id=\"employeeId\" type=\"STRING\" size=\"256\"/><Column id=\"firstName\" type=\"STRING\" size=\"256\"/><Column id=\"lastName\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"emailId\" type=\"STRING\" size=\"256\"/><Column id=\"emailDomain\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"managerId\" type=\"STRING\" size=\"256\"/><Column id=\"managerName\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"jobTitle\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_origin", this);
            obj._setContents("<ColumnInfo><Column id=\"employeeId\" type=\"STRING\" size=\"256\"/><Column id=\"firstName\" type=\"STRING\" size=\"256\"/><Column id=\"lastName\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"emailId\" type=\"STRING\" size=\"256\"/><Column id=\"emailDomain\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"managerId\" type=\"STRING\" size=\"256\"/><Column id=\"managerName\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"jobTitle\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"managerId\" type=\"STRING\" size=\"256\"/><Column id=\"managerName\" type=\"STRING\" size=\"256\"/><Column id=\"jobTitle\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_job", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "17", "57", "711", "137", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("sta_employeeId", "absolute", "3", "1", "100", "32", null, null, this.Div00);
            obj.set_taborder("9");
            obj.set_text("관리번호");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid black");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_name", "absolute", "3", "32", "100", "32", null, null, this.Div00);
            obj.set_taborder("10");
            obj.set_text("이름");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid black");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_email", "absolute", "3", "63", "100", "32", null, null, this.Div00);
            obj.set_taborder("11");
            obj.set_text("EMAIL");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid black");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_job", "absolute", "401", "32", "100", "32", null, null, this.Div00);
            obj.set_taborder("13");
            obj.set_text("직책");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid black");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_manager", "absolute", "401", "1", "100", "32", null, null, this.Div00);
            obj.set_taborder("14");
            obj.set_text("관리자");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid black");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_hiredate", "absolute", "401", "63", "100", "32", null, null, this.Div00);
            obj.set_taborder("15");
            obj.set_text("고용일");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid black");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_phone", "absolute", "3", "94", "100", "32", null, null, this.Div00);
            obj.set_taborder("16");
            obj.set_text("PHONE");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid black");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "102", "1", "300", "32", null, null, this.Div00);
            obj.set_taborder("20");
            obj.style.set_border("1 solid black");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "102", "32", "300", "32", null, null, this.Div00);
            obj.set_taborder("21");
            obj.style.set_border("1 solid black");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "102", "63", "300", "32", null, null, this.Div00);
            obj.set_taborder("8");
            obj.style.set_border("1 solid black");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "102", "94", "598", "32", null, null, this.Div00);
            obj.set_taborder("23");
            obj.style.set_border("1 solid black");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "500", "32", "200", "32", null, null, this.Div00);
            obj.set_taborder("24");
            obj.style.set_border("1 solid black");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "500", "63", "200", "32", null, null, this.Div00);
            obj.set_taborder("25");
            obj.style.set_border("1 solid black");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "500", "1", "200", "32", null, null, this.Div00);
            obj.set_taborder("26");
            obj.style.set_border("1 solid black");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edt_employeeId", "absolute", "106", "4", "292", "26", null, null, this.Div00);
            obj.set_taborder("12");
            obj.style.set_displaynulltextcolor("darkgray");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid black,1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edt_firstName", "absolute", "106", "35", "145", "26", null, null, this.Div00);
            obj.set_taborder("1");
            obj.style.set_displaynulltextcolor("darkgray");
            obj.style.set_align("center middle");
            obj.set_maxlength("85");
            obj.set_displaynulltext("First name");
            obj.set_lengthunit("utf8");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edt_lastName", "absolute", "253", "35", "145", "26", null, null, this.Div00);
            obj.set_taborder("2");
            obj.style.set_displaynulltextcolor("darkgray");
            obj.style.set_align("center middle");
            obj.set_maxlength("85");
            obj.set_displaynulltext("Last name");
            obj.set_lengthunit("utf8");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("cbo_emailDomain", "absolute", "274", "66", "125", "26", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@ds_email");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_displaynulltext("-선택-");
            obj.style.set_align("center middle");
            obj.set_index("-1");
            obj = new Combo("cbo_manager", "absolute", "504", "4", "192", "26", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_text("Combo01");
            obj.set_innerdataset("@ds_manager");
            obj.set_codecolumn("managerId");
            obj.set_datacolumn("managerName");
            obj.set_displaynulltext("-선택-");
            obj.style.set_align("center middle");
            obj = new Combo("cbo_jobTitle", "absolute", "504", "35", "192", "26", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_text("Combo01");
            obj.set_innerdataset("@ds_job");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_displaynulltext("-선택-");
            obj.style.set_align("center middle");
            obj = new Calendar("cal_hireDate", "absolute", "504", "66", "192", "26", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("null");
            obj.style.set_padding("5 5 5 10");
            obj = new Edit("edt_emailId", "absolute", "106", "66", "145", "26", null, null, this.Div00);
            obj.set_taborder("4");
            obj.set_maxlength("85");
            obj.set_lengthunit("utf8");
            obj.set_imemode("alpha");
            obj.set_inputfilter("dot,comma,sign,symbol,space");
            obj.set_inputtype("number,english");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("sta_at", "absolute", "255", "66", "16", "26", null, null, this.Div00);
            obj.set_taborder("27");
            obj.set_text("@");
            obj.style.set_font("10 Microsoft Sans Serif");
            this.Div00.addChild(obj.name, obj);
            obj = new MaskEdit("edt_phone", "absolute", "106", "97", "292", "26", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_displaynulltext("010-0000-0000 형식으로 입력해주세요");
            obj.style.set_displaynulltextcolor("darkgray");
            obj.style.set_align("center middle");
            obj.set_type("string");
            obj.set_mask("###-####-####");
            obj.set_clipmode("includespace");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "20", "21", "260", "28", null, null, this);
            obj.set_taborder("0");
            obj.set_text("▣  직원 등록/수정");
            obj.style.set_font("12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "647", "20", "70", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", "647", "20", "70", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("수정");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", "572", "20", "70", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "503", "50", "235", "8", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Static00");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.style.set_background("#ff80c0ff");
            obj.style.set_opacity("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "643", "7", "4", "48", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "104", "20", "48", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "717", "95", "20", "48", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "576", "0", "128", "20", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "304", "183", "128", "20", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Static01");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 796, 254, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 738, 205, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.edt_employeeId","value","ds_employee","employeeId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.edt_firstName","value","ds_employee","firstName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.edt_lastName","value","ds_employee","lastName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.edt_emailId","value","ds_employee","emailId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.cbo_emailDomain","value","ds_employee","emailDomain");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.cbo_manager","value","ds_employee","managerId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.cbo_jobTitle","value","ds_employee","jobTitle");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div00.cal_hireDate","value","ds_employee","hireDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.edt_phone","value","ds_employee","phone");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("EmployeePopupForm.xfdl", function(exports) {
        /*
        화면명 : 직원 등록/수정 팝업
        작성자 : 정상준
        작성일자 : 2026-03-26
        */

        // 팝업 모드 (I: 등록, U: 수정)
        this.fv_mode = "";
        // 직책 콤보에서 PRESIDENT 표시 가능 여부
        this.fv_canSelectPresident = false;
        // 수정 시 사용할 직원번호
        this.fv_employeeId = "";

        this.EmployeePopupForm_onload = function(obj,e)
        {
        	//등록 후 창을 닫으면 refresh하기 위해
        	this.fv_needRefresh = false;
        	
            // 부모 화면에서 전달한 값 받기
            this.fv_mode = this.parent.mode || "I";
            this.fv_employeeId = this.parent.employeeId || "";
            
            // 서버에서 직책 조회
            this.fn_loadJobList();

            // 서버에서 관리자 목록 조회
            this.fn_loadManagerList();

            // 화면/데이터셋/콤보 기본 초기화
            
            this.fn_initDataset();
            this.fn_initCombo();
        	
        	if (this.fv_mode == "I"){
        		// 등록 모드 세팅
        		this.fn_initInsertMode();
        	}else if(this.fv_mode == "U"){
        		// 수정 모드 세팅
        		this.fn_initUpdateMode();
        		this.fn_detail();
        	}else alert("잘못 된 접근입니다.");
            
        };

        //----------------------------------------------------------------------------------------------------
        //dataset 초기화
        this.fn_initDataset = function()
        {
            // 입력용 dataset 초기화
            this.ds_employee.clearData();
            this.ds_employee.addRow();

            // 원본 비교용 dataset 초기화
            this.ds_origin.clearData();
        };

        
        //콤보박스 기본 연결
        this.fn_initCombo = function()
        {
            // 이메일 도메인 콤보
            this.ds_email.clearData();
            
            var nRow = this.ds_email.addRow();
            this.ds_email.setColumn(nRow, "code", "");
            this.ds_email.setColumn(nRow, "name", "-선택-");
            
            var nRow = this.ds_email.addRow();
            this.ds_email.setColumn(nRow, "code", "EXAMPLE.COM");
            this.ds_email.setColumn(nRow, "name", "EXAMPLE.COM");

            var nRow = this.ds_email.addRow();
            this.ds_email.setColumn(nRow, "code", "GMAIL.COM");
            this.ds_email.setColumn(nRow, "name", "GMAIL.COM");

            var nRow = this.ds_email.addRow();
            this.ds_email.setColumn(nRow, "code", "NAVER.COM");
            this.ds_email.setColumn(nRow, "name", "NAVER.COM");

            this.Div00.cbo_emailDomain.set_innerdataset("ds_email");
            this.Div00.cbo_emailDomain.set_codecolumn("code");
            this.Div00.cbo_emailDomain.set_datacolumn("name");
            this.Div00.cbo_emailDomain.set_index(-1); 
        };

        
        //등록 모드 UI 세팅
        this.fn_initInsertMode = function()
        {
            // 제목
            this.sta_title.set_text("▣ 직원 등록");

            // 버튼 상태
            this.btn_save.set_enable(true);
            this.btn_save.set_visible(true);
            
            this.btn_update.set_enable(false);
            this.btn_update.set_visible(false);
            
            this.btn_delete.set_enable(false);
            this.btn_delete.set_visible(false);

            // 고용일 입력 가능
            this.Div00.cal_hireDate.set_enable(true);

            // 신규 1행 생성
            this.ds_employee.clearData();
            this.ds_employee.addRow();

            // 직원번호는 DB 시퀀스/IDENTITY가 생성
            this.ds_employee.setColumn(0, "employeeId", "");

            // 고용일 기본값 = 오늘
            this.ds_employee.setColumn(0, "hireDate", this.fn_getToday());
            
            this.ds_employee.setColumn(0, "jobTitle", "");
        	this.ds_employee.setColumn(0, "managerId", "");
        	this.ds_employee.setColumn(0, "emailDomain", "");
        	
        	// 등록은 PRESIDENT 선택 가능
            this.fv_canSelectPresident = true;
        };

        //수정 모드 UI 세팅
        this.fn_initUpdateMode = function()
        {
        	// 제목
            this.sta_title.set_text("▣ 직원 수정");
            
        	this.btn_save.set_enable(false);
            this.btn_save.set_visible(false);
            
            this.btn_update.set_enable(true);
            this.btn_update.set_visible(true);
            
            this.btn_delete.set_enable(true);
            this.btn_delete.set_visible(true);
            
           
            this.Div00.cal_hireDate.set_enable(false);
            
            this.ds_employee.setColumn(0, "employeeId", "");
            this.ds_employee.setColumn(0, "hireDate", "");
        }
        //----------------------------------------------------------------------------------------------------
        //수정을 위해 선택한 직원의 상세정보를 id를 통해 불러옴
        this.fn_detail = function()
        {
            this.transaction(
                "getEmployeeDetail",
                "http://localhost:8080/employees/detail",
                "",
                "ds_employee=ds_employee",
                "employeeId=" + this.fv_employeeId,
                "fn_detailCallback"
            );
        };
        //직원 상세 정보 콜백
        this.fn_detailCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            // 서버/통신 에러
            if (nErrorCode < 0)
            {
                alert("처리 실패 : " + sErrorMsg);
                return;
            }
            this.fn_afterDetail();
        }

        this.fn_afterDetail = function()

        {
        	// 원래 PRESIDENT인 직원이면 PRESIDENT 선택 가능
            if (this.ds_employee.getColumn(0, "jobTitle") == "PRESIDENT")
            {
                this.fv_canSelectPresident = true;
            }
            else
            {
                this.fv_canSelectPresident = false;
            }
            this.fn_applyJobFilter();
        	this.fn_applyManagerRule();
            
            // 원본 저장 (변경여부 비교용)
            this.ds_origin.copyData(this.ds_employee);
            
        };
        // 직책 콤보에서 PRESIDENT 표시 여부 제어
        this.fn_applyJobFilter = function()
        {
            this.ds_job.filter("");

            if (!this.fv_canSelectPresident)
            {
                this.ds_job.filter("code != 'PRESIDENT'");
            }
        };
        // PRESIDENT 룰
        this.fn_applyManagerRule = function()
        {
            var sJobTitle = this.ds_employee.getColumn(0, "jobTitle");

            // 직책이 PRESIDENT 이면 관리자 선택 불가
            if (sJobTitle == "PRESIDENT")
            {
                this.Div00.cbo_manager.set_enable(false);
                this.ds_employee.setColumn(0, "managerId", "");
                this.Div00.cbo_manager.set_value("");
                this.Div00.cbo_manager.set_index(0);
            }
            else
            {
                this.Div00.cbo_manager.set_enable(true);
            }
        };
        //----------------------------------------------------------------------------------------------------
        /*
         * - ds_job
         */
         this.Div00_cbo_jobTitle_onitemchanged = function(obj,e)
        {
        	this.fn_applyManagerRule();
        }
        this.fn_loadJobList = function()
        {
            this.transaction(
                "getCommonCode",                        
                "http://localhost:8080/employees/common", 
                "",                                     
                "ds_job=ds_job",      
                "",                                     
                "fn_jobCallback"                        
            );
        };
        //직책 콤보 콜백
        this.fn_jobCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            // 서버/통신 에러
            if (nErrorCode < 0)
            {
                alert("처리 실패 : " + sErrorMsg);
                return;
            }

            // 첫 번째 행을 "-선택-"으로 설정
            var nRow = this.ds_job.insertRow(0);
            this.ds_job.setColumn(nRow, "code", "");
            this.ds_job.setColumn(nRow, "name", "-선택-");

            // 등록 모드는 처음부터 PRESIDENT 가능
            if (this.fv_mode == "I")
            {
                this.fv_canSelectPresident = true;
                this.fn_applyJobFilter();
            }
        };
        //----------------------------------------------------------------------------------------------------
        /*
         * 서버에서 관리자 목록 조회
         */
        this.fn_loadManagerList = function()
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
        //서버 응답 공통 처리
        this.fn_managerCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            // 서버/통신 에러
            if (nErrorCode < 0)
            {
                alert("처리 실패 : " + sErrorMsg);
                return;
            }
            
        	//이전 화면에서 첫번째 행을 "-전체-"로 설정해 놓았기 때문에 검증 후 교체
        	if (this.ds_manager.getRowCount() > 0 && this.fn_isNull(this.ds_manager.getColumn(0, "managerId")))
        	{
        		this.ds_manager.setColumn(0, "managerName", "-선택-");
        	}
        	else
        	{
        		var nRow = this.ds_manager.insertRow(0);
        		this.ds_manager.setColumn(nRow, "managerId", "");
        		this.ds_manager.setColumn(nRow, "managerName", "-선택-");
        	}
        }       
        //----------------------------------------------------------------------------------------------------
        //공통 util 함수

        this.fn_isNull = function(v)
        {
            return v == null || v == undefined || String(v).trim() == "";
        };

        
        // 오늘 날짜를 YYYYMMDD 형식으로 반환
        // 서버 SQL에서 TO_char(#{hireDate}, 'YYYYMMDD')로 받기 때문
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

        
        // 화면 입력용 emailId + emailDomain → 실제 저장용 email 생성
        this.fn_makeEmail = function()
        {
            var sEmailId = this.ds_employee.getColumn(0, "emailId");
            var sEmailDomain = this.ds_employee.getColumn(0, "emailDomain");

            if (!this.fn_isNull(sEmailId) && !this.fn_isNull(sEmailDomain))
            {
                this.ds_employee.setColumn(0, "email", sEmailId + "@" + sEmailDomain);
            }
        };

        //저장 전 필수값 검증
        this.fn_validate = function()
        {
            var sJobTitle = this.ds_employee.getColumn(0, "jobTitle");

            // PRESIDENT가 아니면 관리자 필수
            if (sJobTitle != "PRESIDENT" && this.fn_isNull(this.ds_employee.getColumn(0, "managerId")))
            {
                alert("관리자는 필수입니다.");
                this.Div00.cbo_manager.setFocus();
                return false;
            }

            if (this.fn_isNull(this.ds_employee.getColumn(0, "firstName")))
            {
                alert("First Name은 필수입니다.");
                this.Div00.edt_firstName.setFocus();
                return false;
            }

            if (this.fn_isNull(this.ds_employee.getColumn(0, "lastName")))
            {
                alert("Last Name은 필수입니다.");
                this.Div00.edt_lastName.setFocus();
                return false;
            }

            if (this.fn_isNull(this.ds_employee.getColumn(0, "jobTitle")))
            {
                alert("직책은 필수입니다.");
                this.Div00.cbo_jobTitle.setFocus();
                return false;
            }

            if (this.fn_isNull(this.ds_employee.getColumn(0, "emailId")))
            {
                alert("EMAIL ID는 필수입니다.");
                this.Div00.edt_emailId.setFocus();
                return false;
            }
            if(this.fn_isNull(this.ds_employee.getColumn(0, "emailDomain")))
            {
        		alert("EMAIL DOMAIN은 필수입니다.");
                this.Div00.cbo_emailDomain.setFocus();
                return false;
            }

            if (this.fn_isNull(this.ds_employee.getColumn(0, "hireDate")))
            {
                alert("고용일은 필수입니다.");
                this.Div00.cal_hireDate.setFocus();
                return false;
            }

        	var sPhone = this.ds_employee.getColumn(0, "phone");

            if (this.fn_isNull(sPhone))
            {
                alert("PHONE은 필수입니다.");
                this.Div00.edt_phone.setFocus();
                return false;
            }
        	
        	if (sPhone.indexOf("_") > -1)
        	{
        		alert("전화번호를 모두 입력하세요.");
        		this.Div00.edt_phone.setFocus();
        		return false;
        	}
        	if(!this.fn_phone())
        	{
        		alert("전화번호를 정확히(010-0000-0000) 입력하세요.");
        		return false;
        	};
        	

            return true;
        };
        //변경 여부 확인 ("변경된 값이 없습니다.")
        this.fn_isChanged = function()
        {
            var nColCnt = this.ds_employee.getColCount();

            for (var i = 0; i < nColCnt; i++)
            {	
        		//ID를 구하려는 열의 인덱스
                var sColId = this.ds_employee.getColID(i);

                if (this.ds_employee.getColumn(0, sColId) != this.ds_origin.getColumn(0, sColId))
                {
                    return true;
                }
            }

            return false;
        };
        //----------------------------------------------------------------------------------------------------
        //수정 버튼 클릭 이벤트
        this.btn_update_onclick = function(obj,e)
        {
            if (!this.fn_isChanged())
            {
                alert("변경된 값이 없습니다.");
                return;
            }

            if (!this.fn_validate()) return;

            this.fn_makeEmail();
            

            if (!confirm("수정하시겠습니까?")) return;

            this.fn_update();
        };

        this.fn_update = function()
        {
            this.transaction(
                "updateEmployee",
                "http://localhost:8080/employees/update",
                "ds_employee=ds_employee:u",
                "",
                "",
                "fn_updateCallback"
            );
           
        };
        //직원 정보 수정 콜백
        this.fn_updateCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            // 서버/통신 에러
            if (nErrorCode < 0)
            {
                alert("처리 실패 : " + sErrorMsg);
                return;
            }

        	alert("수정되었습니다.");
        	
        	// 팝업 닫지 않음
        	// 원본 다시 저장
        	this.ds_origin.copyData(this.ds_employee);

        	// 관리자 이름 수정시 관리자 목록 최신화
        	this.fn_loadManagerList();
        	
        	// 수정 된 사원을 팝업을 닫으면 포커스 하기 위해 지정
        	this.fv_needRefresh = true;
        };
        //----------------------------------------------------------------------------------------------------
        //저장 버튼 클릭 이벤트
        this.btn_save_onclick = function(obj,e)
        {
            // 필수값 체크
            if (!this.fn_validate()) return;

            // email 조합
            this.fn_makeEmail();

            // 최종 확인
            if (!confirm("저장하시겠습니까?")) return;

            // 서버 저장 호출
            this.fn_save();
        };

        
        //서버 저장 요청
        this.fn_save = function()
        {
            this.transaction(
                "saveEmployee",                           
                "http://localhost:8080/employees/create", 
                "ds_employee=ds_employee:i",            
                "ds_employee=ds_employee", //데이터셋에 employee id 를 받아와서 저장 후 id직원 포커스                                     
                "",                                      
                "fn_saveCallback"                           
            );
        };

        //직원 저장 콜백
        this.fn_saveCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            // 서버/통신 에러
            if (nErrorCode < 0)
            {
                alert("처리 실패 : " + sErrorMsg);
                return;
            }
        	alert("저장되었습니다.");
        	var sEmployeeId = this.ds_employee.getColumn(0, "employeeId");
        	trace("eid = " + sEmployeeId);
        	this.close(sEmployeeId); // ID를 넘겨 포커스 
        }
        //----------------------------------------------------------------------------------------------------
        //삭제 버튼 클릭 이벤트
        this.btn_delete_onclick = function(obj,e)
        {
        	// 최종 확인
        	if (!confirm("삭제하시겠습니까?")) return;
        	
        	if(!this.fn_deletManager())
        	{
        		alert("관리자는 삭제할 수 없습니다!");
        		return;
        	}
        	this.fn_delete();
        }
        this.fn_deletManager = function()
        {
        	var sEmp = this.Div00.edt_employeeId.value;
        	for(var i = 0; i < this.ds_manager.getRowCount(); i++)
        	{
        		var sManager = this.ds_manager.getColumn(i, "managerId");
        		if(sEmp == sManager) return false;
        	}
        	return true;
        }
        this.fn_delete = function(){
        	if (this.ds_employee.getRowCount() == 0)
            {
                alert("삭제할 데이터가 없습니다.");
                return;
            }
        	var dEmployee_chk = this.ds_employee.deleteRow(0);//행 delete 설정
        	
        	this.transaction(
                "deleteEmployee",                           
                "http://localhost:8080/employees/delete",            
                "",                                      
                "ds_employee=ds_employee",
                "employeeId=" + this.fv_employeeId, //인자값을 주어서 id로 삭제
                "fn_deleteCallback"                           
            );
            if(dEmployee_chk){
        		trace("삭제 성공");
        	}
        }
        //직원 삭제 콜백
        this.fn_deleteCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            // 서버/통신 에러
            if (nErrorCode < 0)
            {
                alert("처리 실패 : " + sErrorMsg);
                return;
            }

        	alert("삭제되었습니다.");
        	this.close("refresh");
        }

        //----------------------------------------------------------------------------------------------------
        //팝업 창을 닫으면 수정한 사원 id를 보낸다.
        this.EmployeePopupForm_close = function(obj,e)
        {
            if (this.fv_needRefresh)
            {
                this.close(this.fv_employeeId);
            }
        };

        

        
        this.fn_phone = function()
        {
        	var sPhone = this.ds_employee.getColumn(0, "phone");
        	var sOnlyNum = sPhone.replace(/[^0-9]/g, "");

        	
        	// 숫자만 입력되었는지 + 11자리 + 010 시작
        	var regPhone = /^010\d{8}$/;

        	if (!regPhone.test(sPhone))
        	{
        		this.Div00.edt_phone.setFocus();
        		return false;
        	}
        	return true;
        }

        this.Div00_edt_phone_onchanged = function(obj,e)
        {
        	if(!this.fn_phone())
        	{
        		alert("전화번호를 정확히(010-0000-0000) 입력하세요.");
        		return;
        	};
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.EmployeePopupForm_onload, this);
            this.addEventHandler("onbeforeclose", this.EmployeePopupForm_close, this);
            this.Div00.sta_employeeId.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.sta_name.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.sta_email.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.sta_job.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.sta_manager.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.sta_hiredate.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.sta_phone.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.Static00.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.Static01.addEventHandler("onclick", this.Div00_Static01_onclick, this);
            this.Div00.Static02.addEventHandler("onclick", this.Div00_Static01_onclick, this);
            this.Div00.Static03.addEventHandler("onclick", this.Div00_Static01_onclick, this);
            this.Div00.Static04.addEventHandler("onclick", this.Div00_Static01_onclick, this);
            this.Div00.Static05.addEventHandler("onclick", this.Div00_Static01_onclick, this);
            this.Div00.Static06.addEventHandler("onclick", this.Div00_Static06_onclick, this);
            this.Div00.edt_employeeId.addEventHandler("oneditclick", this.Div00_edt_employeeId_oneditclick, this);
            this.Div00.edt_firstName.addEventHandler("oneditclick", this.Div00_edt_firstName_oneditclick, this);
            this.Div00.edt_lastName.addEventHandler("oneditclick", this.Div00_edt_lastName_oneditclick, this);
            this.Div00.cbo_emailDomain.addEventHandler("onitemchanged", this.Div00_Combo00_onitemchanged, this);
            this.Div00.cbo_manager.addEventHandler("onitemchanged", this.Div00_Combo01_onitemchanged, this);
            this.Div00.cbo_jobTitle.addEventHandler("onitemchanged", this.Div00_cbo_jobTitle_onitemchanged, this);
            this.Div00.edt_emailId.addEventHandler("oneditclick", this.Div00_Edit04_oneditclick, this);
            this.Div00.edt_phone.addEventHandler("oneditclick", this.Div00_edt_phone_oneditclick, this);
            this.Div00.edt_phone.addEventHandler("onchanged", this.Div00_edt_phone_onchanged, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("EmployeePopupForm.xfdl", true);

       
    };
}
)();

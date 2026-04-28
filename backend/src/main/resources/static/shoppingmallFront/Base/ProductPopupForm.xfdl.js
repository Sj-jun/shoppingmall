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
                this.set_name("ProductPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,641,296);
            }
            this.getSetter("taborder").set("30");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"categoryName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_origin", this);
            obj._setContents("<ColumnInfo><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_product", "absolute", "14", "34", "616", "245", null, null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("div_category", "absolute", "119", "57", "500", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_productId", "absolute", "119", "88", "500", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_price", "absolute", "119", "119", "500", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Div("div_description", "absolute", "119", "150", "500", "125", null, null, this);
            obj.set_taborder("9");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_productTitle", "absolute", "20", "21", "320", "28", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Static00");
            obj.style.set_font("12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10.14%", "49", "522", "8", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "546", "4", "4", "48", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "473", "4", "4", "48", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_description", "absolute", "123", "155", "492", "115", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("666");
            obj.set_lengthunit("utf8");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#444444ff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_description", "absolute", "20", "150", "100", "125", null, null, this);
            obj.set_taborder("18");
            obj.set_text("비고");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_price", "absolute", "20", "119", "100", "32", null, null, this);
            obj.set_taborder("19");
            obj.set_text("가격");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_productId", "absolute", "20", "88", "100", "32", null, null, this);
            obj.set_taborder("20");
            obj.set_text("상품관리번호");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_category", "absolute", "20", "57", "100", "32", null, null, this);
            obj.set_taborder("21");
            obj.set_text("카테고리");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productName", "absolute", "382", "91", "233", "26", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("85");
            obj.set_lengthunit("utf8");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#444444ff");
            obj.style.set_padding("5 5 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("sta_productName", "absolute", "279", "88", "100", "32", null, null, this);
            obj.set_taborder("22");
            obj.set_text("상품명");
            obj.style.set_background("navajowhite");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_category", "absolute", "123", "60", "153", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_displaynulltext("-선택-");
            obj.set_innerdataset("@ds_category");
            obj.set_codecolumn("categoryId");
            obj.set_datacolumn("categoryName");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#444444ff");
            obj.style.set_align("center middle");

            obj = new Edit("edt_productId", "absolute", "123", "91", "153", "26", null, null, this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#444444ff");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "416", "0", "45", "20", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "87", "20", "128", null, null, this);
            obj.set_taborder("25");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "620", "95", "20", "128", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "416", "275", "45", "20", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_price", "absolute", "123", "122", "153", "26", null, null, this);
            obj.set_taborder("3");
            obj.set_displaynulltext("0000000.00 형태로 입력");
            obj.set_mask("#,###,###.##");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#444444ff");
            obj.style.set_padding("5 5 5 5");
            obj.set_type("number");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", "476", "20", "70", "30", null, null, this);
            obj.set_taborder("28");
            obj.set_text("등록");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_index", "absolute", "549", "20", "70", "30", null, null, this);
            obj.set_taborder("29");
            obj.set_text("목록");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", "477", "20", "70", "30", null, null, this);
            obj.set_taborder("30");
            obj.set_text("삭제");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", "404", "20", "70", "30", null, null, this);
            obj.set_taborder("31");
            obj.set_text("수정");
            obj.style.set_background("midnightblue");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_color("ivory");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "615", "103", "3", "128", null, null, this);
            obj.set_taborder("32");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "120", "79", "3", "150", null, null, this);
            obj.set_taborder("33");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "379", "71", "3", "50", null, null, this);
            obj.set_taborder("34");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "276", "70", "3", "50", null, null, this);
            obj.set_taborder("35");
            obj.set_text("Static01");
            obj.set_visible("false");
            obj.style.set_background("coral");
            obj.style.set_opacity("30");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 616, 245, this.div_product,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");

            	}
            );
            this.div_product.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 32, this.div_productId,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.style.set_border("1 solid black");

            	}
            );
            this.div_productId.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 641, 296, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.getSetter("taborder").set("30");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","cbo_category","value","ds_product","categoryId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_productName","value","ds_product","productName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_description","value","ds_product","description");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_productId","value","ds_product","productId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_price","value","ds_product","price");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ProductPopupForm.xfdl", function(exports) {
        /*
        화면명 : 상품 등록 및 수정
        작성자 : 정상준
        작성일자 : 2026-04-03
        */

        // 팝업 모드 (I: 등록, U: 수정)
        this.fv_mode = "";

        // 수정 시 사용할 상품번호
        this.fv_productId = "";
        this.fv_needRefresh = false;
        this.ProductPopupForm_onload = function(obj,e)
        {
        	this.edt_price.set_displaynulltext("0000000.00 형태로 입력");
        	//등록 후 창을 닫으면 refresh하기 위해
        	this.fv_needRefresh = false;
            // 부모 화면에서 전달한 값 받기
            this.fv_mode = this.parent.mode || "I";
            this.fv_productId = this.parent.productId || "";
            
            // 서버에서 카테고리 조회
            this.fn_categoryList();
            
            // 화면/데이터셋/콤보 기본 초기화
            this.edt_productId.set_enable(false);
            this.fn_initDataset();
            //this.fn_initCombo();
        	
        	if (this.fv_mode == "I"){
        		// 등록 모드 세팅
        		this.fn_initInsertMode();
        		//this.cbo_category.set_index(0);
        	}else if(this.fv_mode == "U"){
        		// 수정 모드 세팅
        		this.fn_initUpdateMode();
        		this.fn_detail();
        	}else alert("잘못 된 접근입니다."); 
        };
        this.edt_price_onchar = function(obj,e)
        {
            var v = String(e.posttext || "");
            v = nexacro.replaceAll(v, ",", "");

        	 // 현재 값 (기존 값)
            var cur = String(obj.value || "");
        	

            // .이 첫 글자로 오는 것 방지
            if (v == "-" || v == "." && (cur == "" || cur == null))
            {
                return false;
            }
            // 빈 값 허용
            if (v == "")
            {
                return true;
            }

            // . 1개 초과 금지
            var arr = v.split(".");
            if (arr.length > 2)
            {
                return false;
            }

            var intPart = arr[0] || "";

            // 정수부 7자리 초과 금지
            if (intPart.length > 7)
            {
                return false;
            }
            // 숫자만 허용
            if (!/^[0-9.]*$/.test(v))
        	{
        		return false;
        	}

            return true;
        };

        //dataset 초기화
        this.fn_initDataset = function()
        {
            // 입력용 dataset 초기화
            this.ds_product.clearData();
            this.ds_product.addRow();

            // 원본 비교용 dataset 초기화
            this.ds_origin.clearData();
        };

        //등록 모드 UI 세팅
        this.fn_initInsertMode = function()
        {
            // 제목
            this.sta_productTitle.set_text("▣ 상품 등록");

            // 버튼 상태
            this.btn_insert.set_enable(true);
            this.btn_insert.set_visible(true);
            
            this.btn_update.set_enable(false);
            this.btn_update.set_visible(false);
            
            this.btn_delete.set_enable(false);
            this.btn_delete.set_visible(false);

            // 신규 1행 생성
            this.ds_product.clearData();
            this.ds_product.addRow();
        	
            // 상품번호는 DB 시퀀스/IDENTITY가 생성
            this.ds_product.setColumn(0, "productId", "");
            this.ds_product.setColumn(0, "productName", "");
            this.ds_product.setColumn(0, "categoryId", "");
        	this.ds_product.setColumn(0, "price", null);
        	this.ds_product.setColumn(0, "description", "");
        };

        this.fn_initUpdateMode = function()
        {
            // 제목
            this.sta_productTitle.set_text("▣ 상품 수정");
            this.btn_insert.set_enable(false);
            this.btn_insert.set_visible(false);
            
            this.btn_update.set_enable(true);
            this.btn_update.set_visible(true);
            
            this.btn_delete.set_enable(true);
            this.btn_delete.set_visible(true);
            
            this.ds_product.setColumn(0, "productId", "");
        }
        //===============================================================
        //카테고리 목록 불러오기
        //===============================================================
        this.fn_categoryList = function()
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
        	// 등록 모드: 첫 행 선택
        	//이전 화면에서 첫번째 행을 "-전체-"로 설정해 놓았기 때문에 검증 후 교체
        	if (this.ds_category.getRowCount() > 0 && this.fn_isNull(this.ds_category.getColumn(0, "categoryId")))
        	{
        		this.ds_category.setColumn(0, "categoryName", "-선택-");
        	}else
        	{
        		var nRow = this.ds_category.insertRow(0);
        		this.ds_category.setColumn(nRow, "categoryId", "");
        		this.ds_category.setColumn(nRow, "categoryName", "-선택-");
        	}
        	if (this.fv_mode == "I")
        	{
        		this.cbo_category.set_index(0);
        		//this.ds_product.setColumn(0, "categoryId", "");
        	}
        }
        //공통 util 함수

        this.fn_isNull = function(v)
        {
            return v == null || v == undefined || String(v).trim() == "";
        };

        //저장 전 필수값 검증
        this.fn_validate = function()
        {

            if (this.fn_isNull(this.ds_product.getColumn(0, "categoryId")))
            {
                alert("카테고리를 선택하세요.");
                this.cbo_category.setFocus();
                return false;
            }
            if (this.fn_isNull(this.ds_product.getColumn(0, "productName")))
            {
                alert("상품명을 입력하세요.");
                this.edt_productName.setFocus();
                return false;
            }
            if (this.fn_isNull(this.ds_product.getColumn(0, "price")))
            {
                alert("가격을 입력하세요.");
                this.edt_price.setFocus();
                return false;
            }
            if (this.ds_product.getColumn(0, "price") < 1)
            {
                alert("1원 이상 가격을 입력하세요.");
                this.edt_price.setFocus();
                return false;
            }

            return true;
        };
        //===============================================================
        //등록 버튼 클릭
        //===============================================================
        this.btn_insert_onclick = function(obj,e)
        {
        	if (!this.fn_validate()) return;
        	this.fn_insert();
        }
        this.fn_insert = function()
        {
        	this.transaction(
                "insertProduct",
                "http://localhost:8080/product/insert",
                "ds_product=ds_product",
                "ds_product=ds_product",
                "",
                "fn_insertCallback"                       
            );
        }
        this.fn_insertCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            trace("svcID = " + svcID);

            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        	alert("등록되었습니다.");
        	var sProductId = this.ds_product.getColumn(0, "productId");
        	this.close(sProductId);
        }

        //수정을 위해 선택한 상품의 상세정보를 id를 통해 불러옴
        this.fn_detail = function()
        {
            this.transaction(
                "getProductDetail",
                "http://localhost:8080/product/detail",
                "",
                "ds_product=ds_product",
                "productId=" + this.fv_productId,
                "fn_detailCallback"
            );
        };
        this.fn_detailCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            trace("svcID = " + svcID);

            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        	this.fn_afterDetail();
        }
        this.fn_afterDetail = function()
        {
        	// 원본 저장 (변경여부 비교용)
            this.ds_origin.copyData(this.ds_product);
        }

        //변경 여부 확인 ("변경된 값이 없습니다.")
        this.fn_isChanged = function()
        {
            var nColCnt = this.ds_product.getColCount();

            for (var i = 0; i < nColCnt; i++)
            {	
        		//ID를 구하려는 열의 인덱스
                var sColId = this.ds_product.getColID(i);

                if (this.ds_product.getColumn(0, sColId) != this.ds_origin.getColumn(0, sColId))
                {
                    return true;
                }
            }

            return false;
        };
        //===============================================================
        //수정버튼 클릭이벤트 
        //===============================================================
        this.btn_update_onclick = function(obj,e)
        {
        	if (!this.fn_isChanged())
            {
                alert("변경된 값이 없습니다.");
                return;
            };

            if (!this.fn_validate()) return;
            
            if (!confirm("수정하시겠습니까?")) return;
        	
        	this.fn_update();
            
        };
        this.fn_update = function()
        {
        	this.transaction(
                "updateProduct",
                "http://localhost:8080/product/update",
                "ds_product=ds_product:u",
                "",
                "",
                "fn_updateCallback"
            );
           
        }

        this.fn_updateCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert(sErrorMsg);
                return;
            }
        	alert("수정되었습니다.");
        	// 팝업 닫지 않음
        	// 원본 다시 저장
        	this.ds_origin.copyData(this.ds_product);
        	trace("수정 상품 : " + this.fv_productId);
        	// 수정 된 사원을 팝업을 닫으면 포커스 하기 위해 지정
        	this.fv_needRefresh = true;
        			
        }
        //===============================================================
        //삭제 버튼 클릭 이벤트
        //===============================================================
        this.btn_delete_onclick = function(obj,e)
        {
            if (!confirm("삭제하시겠습니까?"))
            {
                return;
            }

            this.fn_delete("");
        };

        this.fn_delete = function(sForceDelete)
        {
            if (this.ds_product.getRowCount() == 0)
            {
                alert("삭제할 데이터가 없습니다.");
                return;
            }

            var sArgs = "";

            if (sForceDelete == "Y")
            {
                sArgs = "forceDelete=Y";
            }

            this.transaction(
                "deleteProduct",
                "http://localhost:8080/product/delete",
                "ds_product=ds_product",
                "",
                sArgs,
                "fn_deleteCallback"
            );
        };

        // 상품 삭제 콜백
        this.fn_deleteCallback = function(svcID,nErrorCode,sErrorMsg)
        {
            // 주문 중인 상품 존재 -> 한 번 더 확인
            if (nErrorCode == -200)
            {
                if (confirm(sErrorMsg))
                {
                    this.fn_delete("Y");
                }
                return;
            }

            // 서버/통신 에러
            if (nErrorCode < 0)
            {
                alert("처리 실패 : " + sErrorMsg);
                return;
            }

            alert("삭제되었습니다.");
            this.close("refresh");
        };

        //팝업 창을 닫으면 수정한 사원 id를 보낸다.

        this.ProductPopupForm__close = function(obj,e)
        {
        	
            if (this.fv_needRefresh)
            {
        		trace("보내는 id" + this.fv_productId);
                this.close(String(this.fv_productId));
            }
        };

        
        //목록 버튼 클릭
        this.btn_index_onclick = function(obj,e)
        {
        	if(!confirm("변경사항이 저장되지 않습니다.\n목록으로 이동하시겠습니까?"))
        		return;
        	this.close();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.ProductPopupForm_onload, this);
            this.addEventHandler("onclose", this.ProductPopupForm__close, this);
            this.sta_productTitle.addEventHandler("onclick", this.div_product_sta_productTitle_onclick, this);
            this.sta_productId.addEventHandler("onclick", this.div_product_Static01_onclick, this);
            this.sta_productName.addEventHandler("onclick", this.div_product_Static01_onclick, this);
            this.edt_productId.addEventHandler("oneditclick", this.div_productId_Edit00_oneditclick, this);
            this.edt_price.addEventHandler("onchar", this.edt_price_onchar, this);
            this.edt_price.addEventHandler("onkeydown", this.edt_price_onkeydown, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_index.addEventHandler("onclick", this.btn_index_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);

        };
        this.loadCss("MyCss::newcss.css");

        this.loadIncludeScript("ProductPopupForm.xfdl", true);

       
    };
}
)();

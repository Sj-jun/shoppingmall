package com.company.shoppingmall.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.shoppingmall.util.ExcelUtil;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;
import com.nexacro.xapi.tx.PlatformType;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class ExcelController {

    /*
     * 공통 엑셀 생성 요청.
     *
        * Nexacro 화면에서 ds_header, ds_body, fileName, sheetName, excelFilePath를 담아서 요청하면
        * 서버에서 엑셀 파일을 생성하고 생성된 파일 경로를 응답으로 내려준다.
        * 생성된 파일 경로는 ds_result의 FILE_PATH 컬럼에 담아서 응답한다. 화면에서는 FILE_PATH 값을 다운로드 요청의 excelFilePath로 넘기면 된다.
     */
    @RequestMapping("/common/excel/create")
    public void commonExcelCreate(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
        req.receiveData();

        // VariableList: fileName, sheetName 같은 단일 값 저장소.
        // DataSetList: ds_header, ds_body 같은 테이블형 데이터 저장소.
        PlatformData inPd = req.getData();
        VariableList inVar = inPd.getVariableList();
        DataSetList inDs = inPd.getDataSetList();

        // Nexacro로 돌려줄 응답 데이터. 성공/실패 코드와 ds_result를 담는다.
        PlatformData outPd = new PlatformData();

        try {
            // 화면에서 넘긴 엑셀 옵션을 꺼낸다.
            // clean()은 Nexacro 또는 문자열 처리 중 붙을 수 있는 따옴표와 공백을 제거한다.
            String fileName = clean(inVar.getString("fileName")); //다운로드 파일명
            String sheetName = clean(inVar.getString("sheetName")); //엑셀 시트명
            String excelFilePath = clean(inVar.getString("excelFilePath")); //서버에 생성할 엑셀 파일 경로

            // 값이 비어 있으면 엑셀 파일명과 시트명에 기본값을 사용한다.
            if (fileName.isEmpty()) {
                fileName = "ExcelDownload";
            }
            if (sheetName.isEmpty()) {
                sheetName = "Sheet1";
            }

            // ds_header: 엑셀 헤더 정보. colId는 ds_body 컬럼명, colName/head는 화면 표시명으로 사용한다.
            // ds_body: 실제 엑셀 본문에 들어갈 데이터.
            DataSet dsHeader = inDs.get("ds_header");
            DataSet dsBody = inDs.get("ds_body");

            // 본문 데이터가 없으면 엑셀 파일을 만들 수 없으므로 실패.
            if (dsBody == null) {
                throw new IllegalArgumentException("ds_body dataset is required.");
            }

            // excelFilePath가 비어 있으면 임시 폴더를 사용하고,
            // 폴더 경로만 넘어온 경우 fileName_yyyyMMddHHmmss.xlsx 형태의 실제 파일 경로를 만든다.
            excelFilePath = makeExcelFilePath(excelFilePath, fileName);

            // ExcelUtil이 ds_header, ds_body를 Workbook으로 변환한다.
            // 변환된 Workbook은 서버 파일 시스템에 먼저 저장한다.
            try (Workbook workbook = ExcelUtil.downloadExcelFromDataSet(dsHeader, dsBody, sheetName);
                    FileOutputStream fos = new FileOutputStream(excelFilePath)) {
                workbook.write(fos);
            }

            // 생성된 파일 경로를 Nexacro callback에서 읽을 수 있도록 ds_result에 담는다.
            // 화면은 FILE_PATH 값을 다운로드 요청의 excelFilePath로 넘기면 된다.
            DataSet dsResult = new DataSet("ds_result");
            dsResult.addColumn("FILE_PATH", DataTypes.STRING, 255);
            dsResult.addColumn("FILE_NAME", DataTypes.STRING, 255);
            int row = dsResult.newRow();
            dsResult.set(row, "FILE_PATH", excelFilePath);
            dsResult.set(row, "FILE_NAME", fileName);
            outPd.addDataSet(dsResult);

            outPd.getVariableList().add("ErrorCode", 0);
            outPd.getVariableList().add("ErrorMsg", "Excel file created.");
        } catch (Exception e) {
            e.printStackTrace();

            // Nexacro callback에서 nErrorCode, sErrorMsg로 실패를 알 수 있게 에러 정보를 내려준다.
            outPd.getVariableList().add("ErrorCode", -1);
            outPd.getVariableList().add("ErrorMsg", e.getMessage());
        }

        // Nexacro가 읽을 수 있는 XML 응답 형식으로 PlatformData를 전송한다.
        HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
        res.setData(outPd);
        res.sendData();
    }

    /*
     * 공통 엑셀 다운로드 요청.
     *
     * /common/excel/create에서 반환받은 FILE_PATH를 excelFilePath로 넘기면
     * 서버에 저장된 xlsx 파일을 브라우저 다운로드 응답으로 내려준다.
     */
    @RequestMapping("/common/excel/download")
    public void commonExcelDownload(HttpServletRequest request, HttpServletResponse response) throws Exception {
        // transaction 요청이면 본문에 PlatformData가 들어온다.
        // 브라우저 직접 호출이면 본문이 없으므로 PlatformData 수신을 건너뛴다.
        PlatformData inPd = new PlatformData();
        if (request.getContentLengthLong() > 0) {
            HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
            req.receiveData();
            inPd = req.getData();
        }
        VariableList inVar = inPd.getVariableList();

        // Nexacro 변수에서 파일 경로와 다운로드 파일명을 읽는다.
        String excelFilePath = clean(inVar.getString("excelFilePath"));
        String fileName = clean(inVar.getString("fileName"));

        // 값이 없으면 URL 파라미터 방식으로 넘어온 값을 사용한다.
        if (excelFilePath.isEmpty()) {
            excelFilePath = clean(request.getParameter("excelFilePath"));
        }
        if (fileName.isEmpty()) {
            fileName = clean(request.getParameter("fileName"));
        }

        // 다운로드 대상 파일 경로는 반드시 필요하다.
        if (excelFilePath.isEmpty()) {
            throw new IllegalArgumentException("excelFilePath is required.");
        }

        // 파일이 실제로 존재하는지 확인한다. 없으면 빈 응답 대신 명확한 에러를 낸다.
        File file = new File(excelFilePath);
        if (!file.exists() || !file.isFile()) {
            throw new IllegalArgumentException("Excel file not found. path=" + excelFilePath);
        }

        // 다운로드 파일명을 따로 안 넘기면 저장된 파일명을 그대로 사용한다.
        if (fileName.isEmpty()) {
            fileName = file.getName();
        }
        if (!fileName.toLowerCase().endsWith(".xlsx")) {
            fileName += ".xlsx";
        }

        // 브라우저가 xlsx 첨부파일로 인식하도록 응답 헤더를 설정한다.
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        String encodedName = URLEncoder.encode(fileName, StandardCharsets.UTF_8).replace("+", "%20");
        response.setHeader("Content-Disposition", "attachment; filename=\"" + encodedName + "\"; filename*=UTF-8''" + encodedName);
        response.setContentLengthLong(file.length());

        // 저장된 파일을 읽어서 response output stream으로 그대로 내려준다.
        try (FileInputStream fis = new FileInputStream(file);
                ServletOutputStream os = response.getOutputStream()) {
            byte[] buffer = new byte[8192];
            int read;
            while ((read = fis.read(buffer)) != -1) {
                os.write(buffer, 0, read);
            }
            os.flush();
        }
    }

    private String makeExcelFilePath(String excelFilePath, String fileName) {
        // 저장 경로가 비어 있으면 WAS 임시 폴더를 사용한다.
        String path = excelFilePath == null || excelFilePath.trim().isEmpty()
                ? System.getProperty("java.io.tmpdir")
                : excelFilePath.trim();
        File file = new File(path);

        // 경로가 폴더면 파일명_일시.xlsx 형태로 파일명을 붙인다.
        if (path.endsWith("/") || path.endsWith("\\") || file.isDirectory()) {
            file = new File(file, fileName + "_" + new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()) + ".xlsx");
        }

        // 확장자가 빠진 파일 경로가 넘어오면 .xlsx를 붙인다.
        if (!file.getName().toLowerCase().endsWith(".xlsx")) {
            file = new File(file.getParentFile(), file.getName() + ".xlsx");
        }

        // 저장할 상위 폴더가 없으면 생성한다.
        File parent = file.getParentFile();
        if (parent != null && !parent.exists()) {
            parent.mkdirs();
        }

        return file.getAbsolutePath();
    }

    private String clean(String value) {
        // Nexacro에서 문자열 값에 따옴표가 섞여 들어오는 경우가 있어 제거한다.
        return value == null ? "" : value.replaceAll("[\"']", "").trim();
    }

}

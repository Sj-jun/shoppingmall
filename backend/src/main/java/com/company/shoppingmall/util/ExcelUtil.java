package com.company.shoppingmall.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.nexacro.xapi.data.DataSet;

public class ExcelUtil {

    private ExcelUtil() {
    }

    /*
     * Nexacro DataSet을 엑셀 Workbook으로 변환한다.
     * ds_header가 없거나 ds_body와 매칭되는 colId가 없으면
     * ds_body의 전체 컬럼을 그대로 엑셀에 출력한다.
     */
    public static Workbook downloadExcelFromDataSet(
            DataSet dsHeader,
            DataSet dsBody,
            String sheetName) {

        // ds_header의 컬럼 정보와 ds_body의 데이터를 이용해 xlsx Workbook을 만든다.
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet(sheetName);

        // 헤더와 본문에 적용할 최소 스타일을 만든다.
        CellStyle headStyle = workbook.createCellStyle();
        headStyle.setFillForegroundColor(IndexedColors.PALE_BLUE.getIndex());
        headStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        headStyle.setAlignment(HorizontalAlignment.CENTER);
        headStyle.setVerticalAlignment(VerticalAlignment.CENTER);

        // 본문 셀은 기본 세로 정렬만 지정한다.
        CellStyle bodyStyle = workbook.createCellStyle();
        bodyStyle.setVerticalAlignment(VerticalAlignment.CENTER);

        List<String> bodyColumns = new ArrayList<>();
        List<String> bodyAlignments = new ArrayList<>();
        int headerRowCount = 1;
        int colCount = 0;

        // ds_header의 row, cellIndex, colspan 값으로 다중 헤더와 병합 헤더를 만든다.
        if (dsHeader != null && dsHeader.getRowCount() > 0) {
            for (int i = 0; i < dsHeader.getRowCount(); i++) {
                int rowIndex = Integer.parseInt(dsHeader.getString(i, "row")) - 1;
                int colIndex = Integer.parseInt(dsHeader.getString(i, "cellIndex"));
                int colspan = Integer.parseInt(dsHeader.getString(i, "colspan"));

                Row headerRow = sheet.getRow(rowIndex);
                if (headerRow == null) {
                    headerRow = sheet.createRow(rowIndex);
                }

                String bind = dsHeader.containsColumn("colId") ? dsHeader.getString(i, "colId") : "";
                String head = dsHeader.getString(i, "colName");
                String align = dsHeader.containsColumn("align") ? dsHeader.getString(i, "align") : "";

                Cell headerCell = headerRow.createCell(colIndex, CellType.STRING);
                headerCell.setCellValue(head == null ? "" : head.trim());
                headerCell.setCellStyle(headStyle);

                for (int c = colIndex + 1; c < colIndex + colspan; c++) {
                    Cell mergedCell = headerRow.createCell(c, CellType.STRING);
                    mergedCell.setCellStyle(headStyle);
                }

                if (colspan > 1) {
                    sheet.addMergedRegion(new CellRangeAddress(rowIndex, rowIndex, colIndex, colIndex + colspan - 1));
                }

                if (bind != null && !bind.trim().isEmpty() && dsBody.containsColumn(bind)) {
                    while (bodyColumns.size() <= colIndex) {
                        bodyColumns.add("");
                        bodyAlignments.add("");
                    }
                    bodyColumns.set(colIndex, bind.trim());
                    bodyAlignments.set(colIndex, normalizeAlignment(align));
                }

                headerRowCount = Math.max(headerRowCount, rowIndex + 1);
                colCount = Math.max(colCount, colIndex + colspan);
            }
        }

        // ds_header가 없거나 매칭되는 컬럼이 없으면 ds_body 전체 컬럼을 그대로 출력한다.
        if (bodyColumns.isEmpty()) {
            Row headRow = sheet.createRow(0);
            for (int c = 0; c < dsBody.getColumnCount(); c++) {
                // ds_body 컬럼명을 헤더명과 바인드명으로 모두 사용한다.
                String bind = dsBody.getColumn(c).getName();

                Cell headCell = headRow.createCell(c, CellType.STRING);
                headCell.setCellValue(bind);
                headCell.setCellStyle(headStyle);

                bodyColumns.add(bind);
                bodyAlignments.add("center");
            }
            colCount = bodyColumns.size();
        }

        Map<String, CellStyle> bodyStyles = createBodyStyles(workbook, bodyStyle);

        for (int c = 0; c < bodyColumns.size(); c++) {
            String bind = bodyColumns.get(c);
            if (bind == null || bind.isEmpty()) {
                continue;
            }
            String align = c < bodyAlignments.size() ? bodyAlignments.get(c) : "center";
            CellStyle columnStyle = bodyStyles.getOrDefault(align, bodyStyle);
            writeBodyColumn(sheet, dsBody, bind, c, headerRowCount, columnStyle);
        }

        // 내용 길이에 맞게 컬럼 폭을 자동 조정한다.
        for (int i = 0; i < colCount; i++) {
            sheet.autoSizeColumn(i);
        }

        return workbook;
    }

    private static void writeBodyColumn(
            Sheet sheet,
            DataSet dsBody,
            String bind,
            int col,
            int startRow,
            CellStyle bodyStyle) {

        // 헤더 다음 행부터 ds_body의 실제 데이터를 쓴다.
        for (int r = 0; r < dsBody.getRowCount(); r++) {
            // 같은 행에 여러 컬럼을 채우기 때문에 기존 Row가 있으면 재사용한다.
            Row bodyRow = sheet.getRow(r + startRow);
            if (bodyRow == null) {
                bodyRow = sheet.createRow(r + startRow);
            }

            // 현재 엑셀 컬럼 위치에 ds_body[행, bind] 값을 쓴다.
            Cell bodyCell = bodyRow.createCell(col);
            Object value = dsBody.getObject(r, bind);
            bodyCell.setCellValue(value == null ? "" : String.valueOf(value));
            bodyCell.setCellStyle(bodyStyle);
        }
    }

    private static Map<String, CellStyle> createBodyStyles(Workbook workbook, CellStyle baseStyle) {
        Map<String, CellStyle> styles = new HashMap<>();
        styles.put("left", createAlignedBodyStyle(workbook, baseStyle, HorizontalAlignment.LEFT));
        styles.put("center", createAlignedBodyStyle(workbook, baseStyle, HorizontalAlignment.CENTER));
        styles.put("right", createAlignedBodyStyle(workbook, baseStyle, HorizontalAlignment.RIGHT));
        return styles;
    }

    private static CellStyle createAlignedBodyStyle(
            Workbook workbook,
            CellStyle baseStyle,
            HorizontalAlignment alignment) {
        CellStyle style = workbook.createCellStyle();
        style.cloneStyleFrom(baseStyle);
        style.setAlignment(alignment);
        return style;
    }

    private static String normalizeAlignment(String align) {
        if (align == null) {
            return "center";
        }

        String normalized = align.trim().toLowerCase();
        if ("left".equals(normalized) || "right".equals(normalized) || "center".equals(normalized)) {
            return normalized;
        }
        return "center";
    }
}

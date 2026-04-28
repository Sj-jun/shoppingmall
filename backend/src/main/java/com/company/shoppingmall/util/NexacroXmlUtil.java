package com.company.shoppingmall.util;

import java.lang.reflect.Field;
import java.util.List;

public class NexacroXmlUtil {

    public static String toDatasetXml(String datasetName, List<?> list) {
        StringBuilder sb = new StringBuilder();

        sb.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
        sb.append("<Root xmlns=\"http://www.tobesoft.com/platform/dataset\">");
        sb.append("<Dataset id=\"").append(datasetName).append("\">");

        if (list != null && !list.isEmpty()) {
            Field[] fields = list.get(0).getClass().getDeclaredFields();

            sb.append("<ColumnInfo>");
            for (Field field : fields) {
                sb.append("<Column id=\"")
                  .append(field.getName())
                  .append("\" type=\"STRING\" size=\"256\"/>");
            }
            sb.append("</ColumnInfo>");

            sb.append("<Rows>");
            for (Object obj : list) {
                sb.append("<Row>");
                for (Field field : fields) {
                    field.setAccessible(true);
                    try {
                        Object value = field.get(obj);
                        sb.append("<Col id=\"")
                          .append(field.getName())
                          .append("\">")
                          .append(escape(value))
                          .append("</Col>");
                    } catch (IllegalAccessException e) {
                        sb.append("<Col id=\"")
                          .append(field.getName())
                          .append("\"></Col>");
                    }
                }
                sb.append("</Row>");
            }
            sb.append("</Rows>");
        } else {
            sb.append("<ColumnInfo></ColumnInfo>");
            sb.append("<Rows></Rows>");
        }

        sb.append("</Dataset>");
        sb.append("</Root>");

        return sb.toString();
    }

    public static String toResultXml(int errorCode, String errorMsg) {
        StringBuilder sb = new StringBuilder();

        sb.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
        sb.append("<Root xmlns=\"http://www.tobesoft.com/platform/dataset\">");
        sb.append("<Parameters>");
        sb.append("<Parameter id=\"ErrorCode\" type=\"int\">")
          .append(errorCode)
          .append("</Parameter>");
        sb.append("<Parameter id=\"ErrorMsg\" type=\"string\">")
          .append(escape(errorMsg))
          .append("</Parameter>");
        sb.append("</Parameters>");
        sb.append("</Root>");

        return sb.toString();
    }

    private static String escape(Object value) {
        if (value == null) {
            return "";
        }

        String str = String.valueOf(value);
        str = str.replace("&", "&amp;");
        str = str.replace("<", "&lt;");
        str = str.replace(">", "&gt;");
        str = str.replace("\"", "&quot;");
        str = str.replace("'", "&apos;");
        return str;
    }
}
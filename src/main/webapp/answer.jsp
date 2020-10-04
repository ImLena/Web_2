<%@ page import="java.util.List" %>
<%@ page import="java.util.Iterator" %><%--
  Created by IntelliJ IDEA.
  User: dariasupriadkina
  Date: 12.09.2020
  Time: 16:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<% if (session.getAttribute("theme")==null){
    session.setAttribute("theme","dark.css");
}%>
<head>
    <title>LabWeb_2</title>
    <link rel="stylesheet" type="text/css" href="Css/style.css">
    <link rel="stylesheet" type="text/css" href="Css/buttons.css">
    <link rel="stylesheet" type="text/css" href="Css/<% out.print(session.getAttribute("theme"));%>" id="theme-link">
    <script type="text/javascript" src="jquery-3.5.1.js"></script>
    <script type="text/javascript" src="theme.js"></script>
</head>
<body>
<table class="verst">
    <tr class="header">
        <td class="left">
            <div>Супрядкина Дарья,<br>Ходосова Елена, P3230</div>
        </td>

        <td class="right">
            <div><img class="head-img" src="resources/kind.gif" id="kind"
                      onmouseover="this.src='resources/angry.gif'"
                      onmouseout="this.src='resources/kind.gif'">Вариант 2630
            </div>
        </td>
    </tr>
    <tr class="page">
        <td>
            <table class="main-table" style="width: 100%"><%--
        <tr>
            <td>X</td>
            <td>Y</td>
            <td>R</td>
            <td>Answer</td>
            <td>Time</td>
        </tr>--%>
                <%
                    List<String> tableRows = (List<String>) request.getSession().getAttribute("tableRows");
                    if (tableRows != null) {
                        out.println("<td>X</td>\n" +
                                "            <td>Y</td>\n" +
                                "            <td>R</td>\n" +
                                "            <td>Answer</td>\n" +
                                "            <td>Time</td>");
                        final Iterator<String> itr = tableRows.iterator();
                        String lastElement = itr.next();

                        while (itr.hasNext()) {
                            lastElement = itr.next();
                        }
                        out.println(lastElement);
                    } else {
                        out.print("No data in request");
                    }
                %>
                <tr>
                    <td>
                        <button onclick="location.href='index.jsp'">Go Back</button>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>

<div class="footer">

    <p colspan="2"><a class="git-href" href="https://github.com/SuDarina/Web_2">
        <img class="github" src="resources/icon.png">
    </a></p>
</div>

</body>
</html>

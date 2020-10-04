<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: dariasupriadkina
  Date: 04.09.2020
  Time: 14:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="ru">
<% if (session.getAttribute("theme") == null) {
    session.setAttribute("theme", "dark.css");
}%>
<head>
    <meta charset="UTF-8">
    <title>
        LabWork_2
    </title>
    <link rel="icon" type="image/png" href="resources/angry.gif">
    <link rel="stylesheet" type="text/css" href="Css/style.css">
    <link rel="stylesheet" type="text/css" href="Css/<% out.print(session.getAttribute("theme"));%>" id="theme-link">
    <link rel="stylesheet" type="text/css" href="Css/buttons.css">
    <script type="text/javascript" src="jquery-3.5.1.js"></script>
    <script type="text/javascript" src="theme.js"></script>
    <script type="text/javascript" src="script.js"></script>
</head>
<body>

<table class="verst">
    <tr class="header">
        <td class="left">
            <div>Супрядкина Дарья,<button class="theme-button" id="theme-button">Change theme</button><br>Ходосова Елена, P3230

            </div>
        </td>

        <td class="right">
            <div><img class="head-img" src="resources/kind.gif" id="kind"
                      onmouseover="this.src='resources/angry.gif'"
                      onmouseout="this.src='resources/kind.gif'">Вариант 2630
            </div>
        </td>
    </tr>

    <!--    фон-->
    <tr class="page">
        <!--        фон-->
        <!--        здесь можно прописать границу между частями страницы-->
        <td style="width: 55%;">
            <!--            Место для графика + кнопки-->

            <table style="width: 100%">
                <tr>
                    <td style="width: 40%;">

                        <!--                        ГРАФИК-->
                        <canvas id="graphic" width="400" height="400">Not Allowed</canvas>

                    </td>
                    <td>

                        <!--                        заполняемая форма-->
                        <form>
                            <table class="formtab">
                                <tr style="height: 30%; width: 100%">
                                    <td>
                                        <label>
                                            <!--                                        значение по y-->
                                            <label for="inY" id="r-label">Y Value:</label>
                                            <input type="text" id="inY" min="-3" max="3" maxlength="5"
                                                   placeholder="-3..3" oninput=setCustomValidity('') required>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 25%">

                                        <div>
                                            <!--                                        значение по r-->
                                            R Value:<br>
                                            <input type='checkbox' class="r" value="v1" name="R">
                                            <label>1</label>
                                            <br>

                                            <input type='checkbox' class="r" value="v15" name="R">
                                            <label>1,5</label>
                                            <br>

                                            <input type='checkbox' class="r" value="v2" name="R">
                                            <label>2</label>
                                            <br>

                                            <input type='checkbox' class="r" value="v25" name="R">
                                            <label>2,5</label>
                                            <br>

                                            <input type='checkbox' class="r" value="v3" name="R">
                                            <label>3</label>
                                            <br>

                                        </div>

                                    </td>
                                </tr>

                                <!--                            значение по X-->

                                <tr style="height: 10%">
                                    <td>
                                        <div>X Value:</div>
                                        <label>
                                            <select id="inX">
                                                <option selected>-5</option>
                                                <option>-4</option>
                                                <option>-3</option>
                                                <option>-2</option>
                                                <option>-1</option>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </label>
                                    </td>

                                </tr>

                                <tr>
                                    <td class="send_wrapper">
                                        <button class="send_button" type="button" id="send" aria-label="center">
                                            Отправить
                                        </button>
                                    </td>
                                </tr>

                                <!--                                сообщения-->
                                <tr id="answer" style="text-align: center"></tr>
                                <tr id="first_line" style="text-align: center"></tr>

                            </table>
                        </form>
                    </td>
                </tr>
            </table>
        </td>
        <td>
            <!--            Место для контента (таблица)-->

            <table id="main-table">

                <%
                    List<String> rows = (List) request.getSession().getAttribute("tableRows");
                    if (rows != null && !rows.isEmpty()) {
                        for (String row : rows) {
                            out.println(row);
                        }
                    }
                %>

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
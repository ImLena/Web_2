import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

public class AreaCheckServlet extends HttpServlet {
    private Double[] xVals = {-5.0, -4.0, -3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0};
    private Double[] rVals = {1.0, 1.5, 2.0, 2.5, 3.0};

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        HttpSession session = req.getSession();
        resp.setContentType("text/html;charset=UTF-8");
        String key = req.getParameter("key");
        if (key.equals("theme")) {
            String theme = req.getParameter("theme");
            session.setAttribute("theme", theme);
            getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
        }else {
            double x = Double.parseDouble(req.getParameter("x"));
            double y = Double.parseDouble(req.getParameter("y"));
            double r = Double.parseDouble(req.getParameter("r"));
            if (key.equals("canvas") || validation(x, y, r)) {
                List<String> tableRows = (List) session.getAttribute("tableRows");
                if (tableRows == null) {
                    tableRows = new LinkedList<>();
                    session.setAttribute("tableRows", tableRows);
                    tableRows.add("<tr>" +
                            "<td>x</td>" +
                            "<td>y</td>" +
                            "<td>r</td>" +
                            "<td>Точка входит в ОДЗ</td>" +
                            "<td>Текущее время</td></tr>");
                }
                try {
                    PrintWriter writer = resp.getWriter();
                    tableRows.add("<tr>" +
                            "<td>" + x + "</td>" +
                            "<td>" + y + "</td>" +
                            "<td>" + r + "</td>" +
                            "<td>" + check(x, y, r) + "</td>" +
                            "<td>" + new Date() + "</td></tr>");
                    for (String tableRow : tableRows) writer.println(tableRow);

                    RequestDispatcher requestDispatcher = req.getRequestDispatcher("answer.jsp");
                    requestDispatcher.forward(req, resp);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            } else {
                System.out.println("error");
                //resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
            }
        }
    }

    private boolean check(double x, double y, double r) {

        return (x <= 0 && y >= 0 && x >= -r && y <= r / 2) ||
                (x <= 0 && y <= 0 && (x * x) + (y * y) <= ((r * r) / 4)) ||
                (x >= 0 && y <= 0 && x - r / 2 <= y);

    }

    private boolean validation(double x, double y, double r) {
        return (Arrays.asList(xVals).contains(x)) && (y > -3 && y < 3) && (Arrays.asList(rVals).contains(r));
    }
}
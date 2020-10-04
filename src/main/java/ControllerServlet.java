import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            if (!req.getParameter("key").equals("theme")) {
                Double.parseDouble(req.getParameter("x"));
                Double.parseDouble(req.getParameter("y"));
                Double.parseDouble(req.getParameter("r"));
            }
            getServletContext().getNamedDispatcher("AreaChecker").forward(req, resp);
        } catch (NumberFormatException | NullPointerException exception) {
            getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
        }
    }
}

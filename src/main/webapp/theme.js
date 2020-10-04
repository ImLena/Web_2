
jQuery('document').ready(function () {
    jQuery('#theme-button').on('click', function () {
        var currTheme = jQuery('#theme-link').attr("href");
        if (currTheme == "Css/dark.css") {
            $('link[href="Css/dark.css"]').attr('href', 'Css/light.css');
            currTheme='light.css';
        } else {
            $('link[href="Css/light.css"]').attr('href', 'Css/dark.css');
            currTheme='dark.css';
        }
        Save(currTheme);
    });
});
/*


btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "Css/light.css";
    let darkTheme = "Css/dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
        currTheme = darkTheme;
        theme = "dark";
    }
    else
    {
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);

}*/
function Save(theme)
{
    let request = new XMLHttpRequest()
    let arr = "key=" + encodeURIComponent('theme')+"&theme="+encodeURIComponent(theme);
    request.open('POST', "app", false);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(arr);
}

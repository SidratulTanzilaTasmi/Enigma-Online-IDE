

function changeLanguage() {

    let language = $("#languages").val();

    if(language == 'c' || language == 'cpp')editor.session.setMode("ace/mode/c_cpp");
    else if(language == 'php')editor.session.setMode("ace/mode/php");
    else if(language == 'python')editor.session.setMode("ace/mode/python");
    else if(language == 'node')editor.session.setMode("ace/mode/javascript");
}

function changeTheme()
{
    let theme=$("#Theme").val();
    if(theme=='Crimson Editor') editor.setTheme("ace/theme/crimson_editor");
    else if(theme=='Pastel On dark') editor.setTheme("ace/theme/pastel_on_dark");
    else if(theme=='Dawn') editor.setTheme("ace/theme/dawn");
    else if(theme=='Ambience') editor.setTheme("ace/theme/ambiance");
    else if(theme=='Cobalt') editor.setTheme("ace/theme/cobalt");
    else if(theme=='Cloud Midnight') editor.setTheme("ace/theme/clouds_midnight");
    else if(theme=='Dracula') editor.setTheme("ace/theme/dracula");
    else if(theme=='Github') editor.setTheme("ace/theme/github");
    else if(theme=='Eclipse') editor.setTheme("ace/theme/eclipse");
    else if(theme=='Monokai') editor.setTheme("ace/theme/dreamweaver");
    else if(theme=='One Dark') editor.setTheme("ace/theme/one_dark");
    else if(theme=='Nord Dark') editor.setTheme("ace/theme/nord_dark");
    else if(theme=='Solarized Dark') editor.setTheme("ace/theme/solarized_dark");
    else if(theme=='Solarized Light') editor.setTheme("ace/theme/solarized_light");
    else if(theme=='Terminal') editor.setTheme("ace/theme/terminal");
    else if(theme=='Twilight') editor.setTheme("ace/theme/twilight");
    else if(theme=='Vibrant Ink') editor.setTheme("ace/theme/vibrant_ink");
    else if(theme=='SQL Server') editor.setTheme("ace/theme/sqlserver");
    else if(theme=='Idle Fingers') editor.setTheme("ace/theme/idle_fingers");
    else if(theme=='Tomorrow Night') editor.setTheme("ace/theme/tomorrow_night");


}

function executeCode() {

    /*$.ajax({

        url: "/IDE/app/compiler.php",

        method: "POST",

        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },

        success: function(response) {
            $(".output").text(response)
        }
        //$(".output").text("Hello World")
    })
*/



  
}

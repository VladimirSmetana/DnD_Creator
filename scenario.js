var txt, name

txt = "Введите имя Вашего персонажа"
name = prompt(txt)
messag(name)

function messag(name)
{
            document.write("Имя персонажа: "+ name +"<br \/>")
}
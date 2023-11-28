nameOfTheStudentArray = [];
    
function submit()  /* Adicionar a função submit() */
{
    var displayStudentArray = [];

    for (var j=1; j <= 4; j++)   /* Escrever o loop for para buscar o valor da caixa de inserção e armazena-lo em um array */
    {
        var nameOfTheStudent = document.getElementById("nameOfTheStudent"+ j).value;
        console.log(nameOfTheStudent);
        nameOfTheStudentArray.push(nameOfTheStudent);
    }

    console.log(nameOfTheStudentArray);

    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
    console.log(lenghtOfNameOfStudentsArray);

    for (var k=0; k < lenghtOfNameOfStudentsArray; k++) /* Escrever o loop for para obtermos os nomes dos alunos e armazena-los dentro do displayStudentArray com a tag h4 */ 
    {
        displayStudentArray.push("<h4>NAME - "+ nameOfTheStudentArray[k] + "</h4>");
        console.log(displayStudentArray);
    }

    console.log(displayStudentArray);
    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

    var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

}

function sorting()   /* Adicionar a função sorting() */
{
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);

    var displayStudentArraySorting = [];

    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
    console.log(lenghtOfNameOfStudentsArray);

    for (var k = 0; k < lenghtOfNameOfStudentsArray; k++) 
    {
        displayStudentArraySorting.push("<h4>NAME - " + nameOfTheStudentArray[k] + "</h4>");
        console.log(displayStudentArraySorting);
    }

    var removeCommas = displayStudentArraySorting.join(" ");
    console.log(removeCommas);

    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}


//Atividade Adicional
function newUpdate()
{
    document.getElementById("displayNameWithoutCommas").innerHTML = "<h1>" + nameOfTheStudentArray +"</h1>";
}






let leader = new ResultLeaderFunc();

let groupName = prompt('Write Your Group Name Science/Commerce/Arts');

if(groupName == ''){
    document.write(`<h1 style="color:crimson;>Please, input your group name</h1>`);
}else{
    if(groupName == 'Science' || groupName == 'science' || groupName == 'SCIENCE'){
        let nam = prompt('Student Name');
        let roll = parseInt(prompt('Student Roll'));
        
        let bangla = parseInt(prompt('Enter Your Result Of Bangla First Paper'));
        let bangla2 = parseInt(prompt('Enter Your Result Of Bangla Second Paper'));
        let english = parseInt(prompt('Enter Your Result Of English First Paper'));
        let english2 = parseInt(prompt('Enter Your Result Of English Second Paper'));
        let gMath = parseInt(prompt('Enter Your Result Of Genarel Math'));
        let ict = parseInt(prompt('Enter Your Result Of ICT'));
        let socity = parseInt(prompt('Enter Your Result Of Bangladesh & Global Studies'));
        let chemistry = parseInt(prompt('Enter Your Result Of Chemistry'));
        let physics = parseInt(prompt('Enter Your Result Of Physics'));
        let biology = parseInt(prompt('Enter Your Result Of Biology'));
        let hMath = parseInt(prompt('Enter Your Result Of Higher Math'));
        
        
        if(nam == '' || roll == '' || bangla == '' || english == '' || english2 == '' || gMath == '' || ict == '' || socity == '' || chemistry == '' || physics == '' || biology == '' || hMath == ''){
            alert('All the forms have to be filled compulsorily!!!');
            document.write('<h1 style="color:crimson;">All the forms have to be filled compulsorily</h1>');
        }else{
            document.write(`
        
            <h2>Student Name    : <span>${nam}</span></h2>
            <h2>Student Roll    : <span>${roll}</span></h2>
            <h2>Student CGPA    : ${leader.cgpaCal(leader.subjectGpa(bangla), leader.subjectGpa(bangla2), leader.subjectGpa(english), leader.subjectGpa(english2), leader.subjectGpa(gMath), leader.subjectGpa(ict), leader.subjectGpa(socity), leader.subjectGpa(chemistry), leader.subjectGpa(physics), leader.subjectGpa(biology), leader.subjectGpa(hMath))}</h2>
            
            <table style="width:100%;text-align: center;">
                <tr>
                    <th>SUBJECTS</th> <th>MARKS</th> <th>GPA</th> <th>GRADE</th>
                </tr>
            
                <tr>
                    <td>Bangla 1st Paper</td> <td> ${bangla} </td> <td> ${leader.subjectGpa(bangla)} </td> <td> ${leader.subjectGrade(bangla)} </td>
                </tr>
                <tr>
                    <td>Bangla 2nd Paper</td> <td> ${bangla2} </td> <td> ${leader.subjectGpa(bangla2)} </td> <td> ${leader.subjectGrade(bangla2)} </td>
                </tr>
                <tr>
                    <td>English 1st Paper</td> <td> ${english} </td> <td> ${leader.subjectGpa(english)} </td> <td> ${leader.subjectGrade(english)} </td>
                </tr>
                <tr>
                    <td>English 2nd Paper</td> <td> ${english2} </td> <td> ${leader.subjectGpa(english2)} </td> <td> ${leader.subjectGrade(english2)} </td>
                </tr>
                <tr>
                    <td>Genaral Math</td> <td> ${gMath} </td> <td> ${leader.subjectGpa(gMath)} </td> <td> ${leader.subjectGrade(gMath)} </td>
                </tr>
                <tr>
                    <td>ICT</td> <td> ${ict} </td> <td> ${leader.subjectGpa(ict)} </td> <td> ${leader.subjectGrade(ict)} </td>
                </tr>
                <tr>
                    <td>Bangladesh & Global Studies</td> <td> ${socity} </td> <td> ${leader.subjectGpa(socity)} </td> <td> ${leader.subjectGrade(socity)} </td>
                </tr>
                <tr>
                    <td>Chemistry</td> <td> ${chemistry} </td> <td> ${leader.subjectGpa(chemistry)} </td> <td> ${leader.subjectGrade(chemistry)} </td>
                </tr>
                <tr>
                    <td>Physics</td> <td> ${physics} </td> <td> ${leader.subjectGpa(physics)} </td> <td> ${leader.subjectGrade(physics)} </td>
                </tr>
                <tr>
                    <td>Biology</td> <td> ${biology} </td> <td> ${leader.subjectGpa(biology)} </td> <td> ${leader.subjectGrade(biology)} </td>
                </tr>
                <tr>
                    <td>Higher Math</td> <td> ${hMath} </td> <td> ${leader.subjectGpa(hMath)} </td> <td> ${leader.subjectGrade(hMath)} </td>
                </tr>
            </table>
            
            `);
        }
    }else if(groupName == 'commerce' || groupName == 'Commerce' || groupName == 'COMMERCE'){

        let nam = prompt('Student Name');
        let roll = parseInt(prompt('Student Roll'));
        
        let bangla = parseInt(prompt('Enter Your Result Of Bangla First Paper'));
        let bangla2 = parseInt(prompt('Enter Your Result Of Bangla Second Paper'));
        let english = parseInt(prompt('Enter Your Result Of English First Paper'));
        let english2 = parseInt(prompt('Enter Your Result Of English Second Paper'));
        let gMath = parseInt(prompt('Enter Your Result Of Genarel Math'));
        let ict = parseInt(prompt('Enter Your Result Of ICT'));
        let socity = parseInt(prompt('Enter Your Result Of Bangladesh & Global Studies'));
        let gScience = parseInt(prompt('Enter Your Result Of General Science'));
        let fBanking = parseInt(prompt('Enter Your Result Of Finance & Banking'));
        let accounting = parseInt(prompt('Enter Your Result Of Accounting'));
        let business = parseInt(prompt('Enter Your Result Of Business'));
        
        
        if(nam == '' || roll == '' || bangla == '' || english == '' || english2 == '' || gMath == '' || ict == '' || socity == '' || gScience == '' || fBanking == '' || accounting == '' || business == ''){
            alert('All the forms have to be filled compulsorily!!!');
            document.write('<h1 style="color:crimson;">All the forms have to be filled compulsorily</h1>');
        }else{
            document.write(`
        
            <h2>Student Name    : <span>${nam}</span></h2>
            <h2>Student Roll    : <span>${roll}</span></h2>
            <h2>Student CGPA    : ${leader.cgpaCal2(leader.subjectGpa(bangla), leader.subjectGpa(bangla2), leader.subjectGpa(english), leader.subjectGpa(english2), leader.subjectGpa(gMath), leader.subjectGpa(ict), leader.subjectGpa(socity), leader.subjectGpa(gScience), leader.subjectGpa(fBanking), leader.subjectGpa(accounting), leader.subjectGpa(business))}</h2>
            
            <table style="width:100%;text-align: center;">
                <tr>
                    <th>SUBJECTS</th> <th>MARKS</th> <th>GPA</th> <th>GRADE</th>
                </tr>
            
                <tr>
                    <td>Bangla 1st Paper</td> <td> ${bangla} </td> <td> ${leader.subjectGpa(bangla)} </td> <td> ${leader.subjectGrade(bangla)} </td>
                </tr>
                <tr>
                    <td>Bangla 2nd Paper</td> <td> ${bangla2} </td> <td> ${leader.subjectGpa(bangla2)} </td> <td> ${leader.subjectGrade(bangla2)} </td>
                </tr>
                <tr>
                    <td>English 1st Paper</td> <td> ${english} </td> <td> ${leader.subjectGpa(english)} </td> <td> ${leader.subjectGrade(english)} </td>
                </tr>
                <tr>
                    <td>English 2nd Paper</td> <td> ${english2} </td> <td> ${leader.subjectGpa(english2)} </td> <td> ${leader.subjectGrade(english2)} </td>
                </tr>
                <tr>
                    <td>Genaral Math</td> <td> ${gMath} </td> <td> ${leader.subjectGpa(gMath)} </td> <td> ${leader.subjectGrade(gMath)} </td>
                </tr>
                <tr>
                    <td>ICT</td> <td> ${ict} </td> <td> ${leader.subjectGpa(ict)} </td> <td> ${leader.subjectGrade(ict)} </td>
                </tr>
                <tr>
                    <td>Bangladesh & Global Studies</td> <td> ${socity} </td> <td> ${leader.subjectGpa(socity)} </td> <td> ${leader.subjectGrade(socity)} </td>
                </tr>
                <tr>
                    <td>General Science</td> <td> ${gScience} </td> <td> ${leader.subjectGpa(gScience)} </td> <td> ${leader.subjectGrade(gScience)} </td>
                </tr>
                <tr>
                    <td>Finance & Banking</td> <td> ${fBanking} </td> <td> ${leader.subjectGpa(fBanking)} </td> <td> ${leader.subjectGrade(fBanking)} </td>
                </tr>
                <tr>
                    <td>Accounting</td> <td> ${accounting} </td> <td> ${leader.subjectGpa(accounting)} </td> <td> ${leader.subjectGrade(accounting)} </td>
                </tr>
                <tr>
                    <td>Business</td> <td> ${business} </td> <td> ${leader.subjectGpa(business)} </td> <td> ${leader.subjectGrade(business)} </td>
                </tr>
            </table>
            
            `);
        }

    }else if(groupName == 'arts' || groupName == 'Arts' || groupName == 'ARTS'){

        let nam = prompt('Student Name');
        let roll = parseInt(prompt('Student Roll'));
        
        let bangla = parseInt(prompt('Enter Your Result Of Bangla First Paper'));
        let bangla2 = parseInt(prompt('Enter Your Result Of Bangla Second Paper'));
        let english = parseInt(prompt('Enter Your Result Of English First Paper'));
        let english2 = parseInt(prompt('Enter Your Result Of English Second Paper'));
        let gMath = parseInt(prompt('Enter Your Result Of Genarel Math'));
        let ict = parseInt(prompt('Enter Your Result Of ICT'));
        let socity = parseInt(prompt('Enter Your Result Of Bangladesh & Global Studies'));
        let gScience = parseInt(prompt('Enter Your Result Of General Science'));
        let geography = parseInt(prompt('Enter Your Result Of Geography'));
        let civics = parseInt(prompt('Enter Your Result Of Civic & Citizenship'));
        let history = parseInt(prompt('Enter Your Result Of History'));
        
        
        if(nam == '' || roll == '' || bangla == '' || english == '' || english2 == '' || gMath == '' || ict == '' || socity == '' || gScience == '' || geography == '' || civics == '' || history == ''){
            alert('All the forms have to be filled compulsorily!!!');
            document.write('<h1 style="color:crimson;">All the forms have to be filled compulsorily!!!</h1>');
        }else{
            document.write(`
        
            <h2>Student Name    : <span>${nam}</span></h2>
            <h2>Student Roll    : <span>${roll}</span></h2>
            <h2>Student CGPA    : ${leader.cgpaCal2(leader.subjectGpa(bangla), leader.subjectGpa(bangla2), leader.subjectGpa(english), leader.subjectGpa(english2), leader.subjectGpa(gMath), leader.subjectGpa(ict), leader.subjectGpa(socity), leader.subjectGpa(gScience), leader.subjectGpa(geography), leader.subjectGpa(civics), leader.subjectGpa(history))}</h2>
            
            <table style="width:100%;text-align: center;">
                <tr>
                    <th>SUBJECTS</th> <th>MARKS</th> <th>GPA</th> <th>GRADE</th>
                </tr>
            
                <tr>
                    <td>Bangla 1st Paper</td> <td> ${bangla} </td> <td> ${leader.subjectGpa(bangla)} </td> <td> ${leader.subjectGrade(bangla)} </td>
                </tr>
                <tr>
                    <td>Bangla 2nd Paper</td> <td> ${bangla2} </td> <td> ${leader.subjectGpa(bangla2)} </td> <td> ${leader.subjectGrade(bangla2)} </td>
                </tr>
                <tr>
                    <td>English 1st Paper</td> <td> ${english} </td> <td> ${leader.subjectGpa(english)} </td> <td> ${leader.subjectGrade(english)} </td>
                </tr>
                <tr>
                    <td>English 2nd Paper</td> <td> ${english2} </td> <td> ${leader.subjectGpa(english2)} </td> <td> ${leader.subjectGrade(english2)} </td>
                </tr>
                <tr>
                    <td>Genaral Math</td> <td> ${gMath} </td> <td> ${leader.subjectGpa(gMath)} </td> <td> ${leader.subjectGrade(gMath)} </td>
                </tr>
                <tr>
                    <td>ICT</td> <td> ${ict} </td> <td> ${leader.subjectGpa(ict)} </td> <td> ${leader.subjectGrade(ict)} </td>
                </tr>
                <tr>
                    <td>Bangladesh & Global Studies</td> <td> ${socity} </td> <td> ${leader.subjectGpa(socity)} </td> <td> ${leader.subjectGrade(socity)} </td>
                </tr>
                <tr>
                    <td>General Science</td> <td> ${gScience} </td> <td> ${leader.subjectGpa(gScience)} </td> <td> ${leader.subjectGrade(gScience)} </td>
                </tr>
                <tr>
                    <td>Geography</td> <td> ${geography} </td> <td> ${leader.subjectGpa(geography)} </td> <td> ${leader.subjectGrade(geography)} </td>
                </tr>
                <tr>
                    <td>Civic & Citizenship</td> <td> ${civics} </td> <td> ${leader.subjectGpa(civics)} </td> <td> ${leader.subjectGrade(civics)} </td>
                </tr>
                <tr>
                    <td>History</td> <td> ${history} </td> <td> ${leader.subjectGpa(history)} </td> <td> ${leader.subjectGrade(history)} </td>
                </tr>
            </table>
            
            `);
        }
    }
}










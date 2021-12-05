function ResultLeaderFunc(){


    this.subjectGpa = function (marks){

        let subjectGpa;

        if(marks >= 0 && marks <= 32){
            subjectGpa = 0.00;
        }else if(marks >= 33 && marks <= 39){
            subjectGpa = 1.00;
        }else if(marks >= 40 && marks <= 49){
            subjectGpa = 2.00;
        }else if(marks >= 50 && marks <= 59){
            subjectGpa = 3.00;
        }else if(marks >= 60 && marks <= 69){
            subjectGpa = 3.50;
        }else if(marks >= 70 && marks <= 79){
            subjectGpa = 4.00;
        }else if(marks >= 80 && marks <= 100){
            subjectGpa = 5.00;
        }

        return subjectGpa;

    }



    this.subjectGrade = function (marks){

        let subjGrade;

        if(marks >= 0 && marks <= 32){
            subjGrade = 'F';
        }else if(marks >= 33 && marks <= 39){
            subjGrade = 'D';
        }else if(marks >= 40 && marks <= 49){
            subjGrade = 'C';
        }else if(marks >= 50 && marks <= 59){
            subjGrade = 'B';
        }else if(marks >= 60 && marks <= 69){
            subjGrade = 'A-';
        }else if(marks >= 70 && marks <= 79){
            subjGrade = 'A';
        }else if(marks >= 80 && marks <= 100){
            subjGrade = 'A+';
        }
        return subjGrade;

    }

    // for science

    this.cgpaCal = function(bangla, bangla2, english, english2, gMath, ict, socity, chemistry, physics, biology, hMath){

        let total = (bangla + bangla2 + english + english2 + gMath + ict + socity + chemistry + physics + biology + hMath);
        let cgpa = total / 11;

        if(bangla == 0 || bangla2 == 0 || english == 0 || english2 == 0 || gMath == 0 || ict == 0 || socity == 0 || chemistry == 0 || physics == 0 || biology == 0 || hMath == 0){

            return '<span style="color:crimson;">Failed</span>';

        }else{

            return `<span style="color:rgb(9, 179, 9)">${cgpa.toFixed(2)}</span>  | & | Grade : <span  style="color:rgb(9, 179, 9)">${this.totalSubjectGrade(cgpa)}</span>`;

        }

    }

    // for commerce


    this.cgpaCal2 = function(bangla, bangla2, english, english2, gMath, ict, socity, gScience, fBanking, accounting, business){

        let total2 = (bangla + bangla2 + english + english2 + gMath + ict + socity + gScience + fBanking + accounting + business);
        let cgpa2 = total2 / 11;

        if(bangla == 0 || bangla2 == 0 || english == 0 || english2 == 0 || gMath == 0 || ict == 0 || socity == 0 || gScience == 0 || fBanking == 0 || accounting == 0 || business == 0){
            return '<span style="color:crimson;">Failed</span>';
        }else{

            return `<span style="color:rgb(9, 179, 9)">${cgpa2.toFixed(2)}</span>  | & | Grade : <span  style="color:rgb(9, 179, 9)">${this.totalSubjectGrade(cgpa2)}</span>`;

        }

    }


    // for arts


    this.cgpaCal3 = function(bangla, bangla2, english, english2, gMath, ict, socity, gScience, geography, civics, history){

        let total3 = (bangla + bangla2 + english + english2 + gMath + ict + socity + gScience + geography + civics + history);
        let cgpa3 = total3 / 11;

        if(bangla == 0 || bangla2 == 0 || english == 0 || english2 == 0 || gMath == 0 || ict == 0 || socity == 0 || gScience == 0 || geography == 0 || civics == 0 || history == 0){
            return '<span style="color:crimson;">Failed</span>';
        }else{

            return `<span style="color:rgb(9, 179, 9)">${cgpa3.toFixed(2)}</span>  | & | Grade : <span  style="color:rgb(9, 179, 9)">${this.totalSubjectGrade(cgpa3)}</span>`;

        }

    }



    this.totalSubjectGrade = function(grading){
        if(grading >= 0.00 && grading <= 0.99){
            return 'F';
        }else if(grading >= 1.00 && grading <= 1.99){
            return 'D';
        }else if(grading >= 2.00 && grading <= 2.99){
            return 'C';
        }else if(grading >= 3.00 && grading <= 3.49){
            return 'B';
        }else if(grading >= 3.50 && grading <= 3.99){
            return 'A-';
        }else if(grading >= 4.00 && grading <= 4.99){
            return 'A';
        }else if(grading == 5.00){
            return 'A+';
        }
    }



}









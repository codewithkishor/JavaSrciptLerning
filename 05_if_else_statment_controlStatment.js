var votingEligibility = function (age) {
    if (age <= 0 || age > 120) {
      console.log(`Your age is  ${age}, Invalid data`);}
    else {
        if (age>=18) {
         console.log(`Your age is ${age}, Congratulation you are eligible for vote.`);
        }else{console.log(`Your age is ${age}, Sorry you are not eligible for vote.`);
        }
     }
  };
  votingEligibility(45);
  votingEligibility(17);
  votingEligibility(18);
  votingEligibility(20);
  votingEligibility(-10);
  votingEligibility(200);
  votingEligibility(0);

  console.log(
    `2.-*************************************************************************************`
  );
  
  function gradeCalculation(marks) {
    // if (marks>= 90 || marks > 100) {
    //   console.log(`Please provide th valid data`);
    // }
    // if (marks >= 90 && marks <= 100) {
    //   console.log();
    // }
    // if (marks >= 75 && marks < 90) {
    //   console.log("A");
    // }

    if (marks >= 90)
    {
        console.log(`Funtastic marks ${marks}, Your Grade is 'A+'`);;
    }
    else
    {
        if (marks >= 75 && marks <= 90)
        {
            console.log(`Excellent marks ${marks}, Your Grade is 'A'`);;
        }
        else
        {
            if (marks >= 50 && marks <= 75)
            {
                console.log(`Excellent marks ${marks}, Your Grade is 'B'`);;
            }
            else
            {
                if (marks>= 35 && marks <= 50)
                {
                   console.log(`Mark is ${marks}, Your Grade is 'C', Need improvement`);;
                }
                else
                {
                    if (marks < 0 || marks>100 )
                   console.log(`Mark is ${marks}, Please provide valid marks`);
                }
            }
        }
    }
  }
  gradeCalculation(98);
  gradeCalculation(80);
  gradeCalculation(90);
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation(35);
  gradeCalculation(29);
  gradeCalculation(64);
  gradeCalculation(49);
  gradeCalculation("91");
  gradeCalculation("Eighty");
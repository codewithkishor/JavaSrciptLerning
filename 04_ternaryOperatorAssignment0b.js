var eligibilityForJob = function (gradScore,hscScore,sscScore,candidateName) {
  var result =
    gradScore > 70 || hscScore > 80 || sscScore > 90
      ? console.log(`Congrates ${candidateName} you are eligible for TCS interview.`)
      : console.log(`${candidateName} Unfortunately you are not eligible for TCS interview.`);
};
eligibilityForJob(80, 86, 90, "Kishor");
eligibilityForJob(70, 65, 55, "Ganesh");
eligibilityForJob(60, 79, 88, "Ramesh");

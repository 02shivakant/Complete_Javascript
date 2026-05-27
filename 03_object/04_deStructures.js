const subject = {
    sub1 : "Math",
    sub2 : "Pysics",
    sub3 : "English"
}

//       de-Structure two methods
 const {sub1} = subject
 console.log(sub1)

  const {sub2 : secondSubject} = subject
  console.log(secondSubject);
  
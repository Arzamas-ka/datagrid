const getObjData = faker => {
  const avatar = faker.internet.avatar();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const tel = faker.phone.phoneNumber();
  const job = faker.name.jobTitle();
  const jobType = faker.name.jobType();
  const linkedInProfile = `https://www.linkedin.com/in/${firstName.toLocaleLowerCase()}-${lastName.toLocaleLowerCase()}`;
  const married = !!Math.round(Math.random());

  const objData = {
    avatar,
    firstName,
    lastName,
    tel,
    job,
    jobType,
    linkedInProfile,
    married
  };

  return objData;
};

export const getHeaderTable = [
  { title: 'Id' },
  { title: 'Avatar' },
  { title: 'First Name' },
  { title: 'Last Name' },
  { title: 'Tel' },
  { title: 'Job' },
  { title: 'Job Type' },
  { title: 'LinkedIn Profile' },
  { title: 'Married' },
  { title: 'Actions' }
];

export default getObjData;

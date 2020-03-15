const getObjData = faker => {
  const id = faker.random.number(1100);
  const avatar = faker.internet.avatar();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const name = `${firstName} ${lastName}`;
  const tel = faker.phone.phoneNumber();
  const job = faker.name.jobTitle();
  const jobType = faker.name.jobType();
  const linkedInProfile = `https://www.linkedin.com/in/${firstName.toLocaleLowerCase()}-${lastName.toLocaleLowerCase()}`;

  const experience = Math.round(Math.random() * 20);

  const married = !!Math.round(Math.random());

  const objData = {
    id,
    avatar,
    name,
    tel,
    job,
    jobType,
    linkedInProfile,
    experience,
    married
  };

  return objData;
};

export const getHeaderTable = [
  { title: 'Id' },
  { title: 'Avatar' },
  { title: 'Name' },
  { title: 'Tel' },
  { title: 'Job' },
  { title: 'Job Type' },
  { title: 'Experience' },
  { title: 'LinkedIn Profile' },
  { title: 'Married' },
  { title: 'Actions' }
];

export default getObjData;

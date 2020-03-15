const getObjData = faker => {
  const id = faker.random.number(1100);
  const avatar = faker.internet.avatar();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const name = `${firstName} ${lastName}`;
  const tel = faker.phone.phoneNumber();
  const job = faker.name.jobTitle();
  const jobType = faker.name.jobType();
  const linkedInProfile = `linkedin.com/in/${firstName.toLocaleLowerCase()}-${lastName.toLocaleLowerCase()}`;

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
  { title: 'id' },
  { title: 'avatar' },
  { title: 'name' },
  { title: 'tel' },
  { title: 'job' },
  { title: 'job type' },
  { title: 'experience' },
  { title: 'linkedin profile' },
  { title: 'married' },
  { title: 'actions' }
];

export default getObjData;

const getObjData = faker => {
  const avatar = faker.internet.avatar()
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const tel = faker.phone.phoneNumber();
  const job = faker.name.jobTitle();
  const jobDescriptor = faker.name.jobDescriptor();
  const jobType = faker.name.jobType();
  const url = faker.internet.url()

  const objData = {
    avatar,
    firstName,
    lastName,
    tel,
    job,
    jobDescriptor,
    jobType,
    url
  };

  return objData;
};

export const getHeaderTable = [
  'Id',
  'Avatar',
  'First Name',
  'Last Name',
  'Tel',
  'Job',
  'Job Descriptor',
  'Job Type',
  'Url'
];

export default getObjData;

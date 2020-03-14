const getObjData = faker => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const tel = faker.phone.phoneNumber();
  const job = faker.name.jobTitle();
  const jobDescriptor = faker.name.jobDescriptor();
  const jobType = faker.name.jobType();

  const objData = {
    firstName,
    lastName,
    tel,
    job,
    jobDescriptor,
    jobType
  };

  return objData;
};

export const getHeaderTable = [
  'Number',
  'FirstName',
  'LastName',
  'Tel',
  'Job',
  'JobDescriptor',
  'JobType'
];

export default getObjData;

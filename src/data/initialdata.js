
export const initialData = {
  personalDetails: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-123-4567',
    address: '123 Main St, Anytown, USA',
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: 'State University',
      title: 'B.S. Computer Science',
      dateOfStudy: '2018 - 2022',
    },
  ],
  workExperience: [
    {
      id: crypto.randomUUID(),
      company: 'Acme Corp',
      position: 'Frontend Developer',
      responsibilities: 'Built and maintained UI components, collaborated with design team.',
      dateFrom: 'Jan 2022',
      dateTo: 'Present',
    },
  ],
};
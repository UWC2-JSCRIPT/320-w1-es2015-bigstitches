import people from './people.json';

people.forEach((person) => {
  // array destructuring
  const [firstName, lastName] = person.name.split(' ');
  // object destructuring
  const { email, phone } = person;
  // refactor to use template literals
  console.log(`First name: ${firstName}
Last name: ${lastName}
Email: ${email}
Phone Number: ${phone}
  `);
});

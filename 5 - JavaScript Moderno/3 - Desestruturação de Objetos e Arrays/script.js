const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"],
};
const name = person.name;

//Transformando os objetos em variáveis
const { job, parents } = person;

console.log(name, job, parents);

const [father, mother] = parents;

//Desestruturando funções
function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    job,
    parents,
  };
}

const luke = createUser(person);

console.log(luke);

import BackendData from "./BackendData";
import MyButton from "./MyButton";
import Title from "./Title";

const names = [
  { name: "a", id: 100, age: 10 },
  { name: "b", id: 101, age: 20 },
  { name: "c", id: 102, age: 30 },
  { name: "d", id: 103, age: 40 },
];

// map X -> Y

function App() {
  return (
    <div>
      {/* <Title>Persons over 25:</Title> */}
      <BackendData />
      {/* {names
        .filter((person) => person.age > 25)
        .map((person) => (
          <MyButton key={person.id} name={person.name} />
        ))} */}
    </div>
  );
}

export default App;

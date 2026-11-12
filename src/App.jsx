import './App.css'
import upper, {text1,text2, text3} from "./file1";
import obj from './file2';
import { males } from './file2';
import { females } from './file2';
import Welcome from './file3';
import MultiWelcome from './file3';

function App() {
const person = obj;
const {firstName, email} = person;
const male = males;
const female = females;
const allNames = [...male, "Kurt", "Helle", ...female, "Tina"];
const person2 = {email: email, firstName:firstName, friends: [...male, ...female], gender: "male", lastName: "Wonnegut",
  phone: 123456};
console.log(firstName, email);
console.log(person2);

return(
  <div>
  <h2>Ex 1</h2>
  <p>{text1}</p>
  <p>{text2}</p>
  <p>{text3}</p>
  <p>{upper("please upper case me")}</p>

  <h2>Ex 2</h2>
  <p>{firstName} {email}</p>
  <p>{male} and {female}</p>
  <p>{allNames}</p>

  <h2>Ex 3</h2>
  <MultiWelcome></MultiWelcome>
  </div>
)
}

export default App

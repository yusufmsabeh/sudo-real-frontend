import PrimaryButton from "./PrimaryButton";

export default function InputBox() {
  return (
    <div className="box input">
      <div className="box-title">Write your pseudocode</div>
      <form action="/" method="get">
        <textarea
          name="code"
          id="code"
          cols="30"
          rows="10"
          placeholder="Enter your pseudocode hre"
        ></textarea>
        <select name="language" id="language">
          <option value="python">Python</option>
          <option value="javascript">Javascript</option>
          <option value="php">PHP</option>
        </select>
        <div className="buttons">
          <PrimaryButton>Convert</PrimaryButton>
        </div>
      </form>
    </div>
  );
}

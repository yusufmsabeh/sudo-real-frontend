import PrimaryButton from "./PrimaryButton";

export default function OutputBox() {
  return (
    <div className="box output">
      <div className="box-title">Generated Code</div>
      <form action="/" method="get">
        <textarea
          name="code"
          id="code"
          cols="30"
          rows="10"
          placeholder="Your generated Code here"
        ></textarea>
        <div className="buttons">
          <PrimaryButton>Copy to clipboard</PrimaryButton>
          <PrimaryButton>Download as file</PrimaryButton>
        </div>
      </form>
    </div>
  );
}

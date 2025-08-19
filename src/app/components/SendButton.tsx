export default function SendButton({ message }: { message: string }) {
  function handleClick() {
    console.log(message);
  }
  return (
    <button onClick={handleClick} className="rounded border p-2">
      Send
    </button>
  );
}

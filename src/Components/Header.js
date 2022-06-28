export default function Header({openForm}) {

  function handleClick() {
    openForm(true);
  }

  return (
    <div>
      <div className="user">
        Temporary User
      </div>
      <button onClick={handleClick}>
        Create Article
      </button>
    </div>
  )
}

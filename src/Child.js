function Child(props) {
  const transferData = () => {
    const users = [
      {
        id: 1,
        name: "sun",
        department: "IT",
      },
      {
        id: 2,
        name: "Adam",
        department: "Admin",
      },
    ];
    props.onReceive(users);
  };
  return (
    <div className="container">
      <h1>Child Component</h1>
      <button onClick={transferData}>Transfer Data to Parent</button>
    </div>
  );
}

export default Child;

export const ContactsList = ({ array, filter, handleDeleteContact }) => {
  return (
    <ul className="list-group ">
      {array
        .filter(
          ({ name }) =>
            !filter || name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(({ id, name, number }) => (
          <li className="list-group-item d-flex" key={id}>
            <div className="p-2">
              {name}: {number}
            </div>
            <button
              id={id}
              onClick={e => handleDeleteContact(e)}
              type="button"
              className="btn btn-danger ms-auto"
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

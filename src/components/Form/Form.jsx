export const FormAddContacts = ({ handelAddContact, state, handleChange }) => {
  return (
    <form onSubmit={e => handelAddContact(e)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={e => handleChange(e)}
          value={state.name}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          type="tel"
          className="form-control"
          name="number"
          value={state.number}
          onChange={e => handleChange(e)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add contact
      </button>
    </form>
  );
};

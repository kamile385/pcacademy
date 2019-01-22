const {
  student_name_surname,
  parent_name_surname,
  address,
  telephone,
  email,
  group,
  identification_number,
  errors,
} = this.state;
return (
  <div className="card mb-3">
    <div className="card-header">Add Student</div>
    <div className="card-body">
      <form onSubmit={this.onSubmit}>
        <TextInputGroup
          label="Student full name"
          name="student_name_surname"
          placeholder="Enter student full name"
          value={student_name_surname}
          onChange={this.onChange}
          error={errors.student_name_surname}
        />
        <TextInputGroup
          label="Parent full name"
          name="parent_name_surname"
          placeholder="Enter parent full name"
          value={parent_name_surname}
          onChange={this.onChange}
          error={errors.parent_name_surname}
        />
        <TextInputGroup
          label="Address"
          name="address"
          placeholder="Enter address"
          value={address}
          onChange={this.onChange}
          error={errors.address}
        />
        <TextInputGroup
          label="Telephone"
          name="telephone"
          placeholder="Enter phone number"
          value={telephone}
          onChange={this.onChange}
          error={errors.telephone}
        />
        <TextInputGroup
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={this.onChange}
          error={errors.email}
        />
        <TextInputGroup
          label="Group"
          name="group"
          placeholder="Enter group"
          value={group}
          onChange={this.onChange}
          error={errors.group}
        />
        <TextInputGroup
          label="Identification number"
          name="identification_number"
          placeholder="Enter identification no"
          value={identification_number}
          onChange={this.onChange}
          error={errors.identification_number}
        />
        <input
          type="submit"
          value="Add Student"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  </div>
);

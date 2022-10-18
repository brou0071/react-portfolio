import { useState, createRef } from "react";
import { Dropdown, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import mockdata from "./mockdata.json"
import "./SearchDropdown.css"

const SearchDropdown = ()  => {
  const [searchTerm, setSearchTerm] = useState("");
  const myRef = createRef();

  return (
    <>
      <Form className="w-50" role="form">
        <FormGroup controlId="exampleForm.SelectCustom">
          <FormLabel>Select Color : </FormLabel>
          <Form.Select
            ref={myRef}
          >
            {mockdata
            .sort((a, b) => a.last_name.localeCompare(b.last_name))
            .map((user, i) => {
              return (
                <option value={user.first_name}>{user.first_name} {user.last_name}</option>
              );
            })}
          </Form.Select>
        </FormGroup>
      </Form>
      <Dropdown>
        <Dropdown.Toggle>Select Country</Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu" style={{ maxHeight: 300 }}>
          <FormControl
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          {mockdata.filter((user) => {
            if (searchTerm === "") {
              return user;
            } else if (user.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return user;
            } else if (
              /^\d+$/.test(searchTerm) &&
              user.ip_address.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return user;
            }
            return false;
          }).map((user, i) => {
            return (
              <Dropdown.Item key={i}>
                <strong>{user.first_name} {user.last_name}</strong><br />
                <span>{user.ip_address}</span>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default SearchDropdown;
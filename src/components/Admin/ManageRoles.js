import React, { useEffect, useState, useRef } from "react";
import { compose } from "recompose";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";

import { withAuthorization, isAdmin } from "../Session";
import { withFirebase } from "../Firebase";
import AdminLayout from "./AdminLayout";
import Loader from "../Loader";

const RoleItem = ({ role, removeRole, updateRoleName }) => {
  const spanRef = useRef(null);

  const onInput = (e) => {
    spanRef.current.textContent = e.target.textContent;
  };

  const onBlur = () => updateRoleName(role, spanRef.current.textContent);
  return (
    <ListGroup.Item as="li" style={{ display: "flex" }}>
      <span
        ref={spanRef}
        style={{ flexGrow: 1 }}
        contentEditable
        suppressContentEditableWarning={true}
        onInput={onInput}
        onBlur={onBlur}
      >
        {role}
      </span>

      <button
        type="button"
        className="close ml-2 mb-1"
        onClick={() => removeRole(role)}
      >
        <span aria-hidden="true">×</span>
        <span className="sr-only">Close</span>
      </button>
    </ListGroup.Item>
  );
};

const ManageRoles = ({ firebase }) => {
  const [allRoles, setAllRoles] = useState({});
  const [newRole, setNewRole] = useState("");
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const loadAllRoles = () => {
    if (firebase)
      firebase
        .allRoles()
        .get()
        .then((snapshot) => {
          setAllRoles(snapshot.data());
          setLoading(false);
        })
        .catch(console.error);
  };

  useEffect(loadAllRoles, [firebase]);

  if (loading) return <Loader />;

  const saveRoles = async () => {
    await firebase.allRoles().set(allRoles);
    setShowToast(true);
  };

  const addRole = () => {
    if (newRole) {
      setAllRoles({ ...allRoles, [newRole]: true });
      setNewRole("");
    }
  };

  const updateRoleName = (oldName, newName) => {
    const newRoles = { ...allRoles };
    newRoles[newName] = newRoles[oldName];
    delete newRoles[oldName];
    setAllRoles(newRoles);
  };

  const removeRole = (role) => {
    const newRoles = { ...allRoles };
    delete newRoles[role];
    setAllRoles(newRoles);
  };

  return (
    <AdminLayout>
      <h1>Manage Roles</h1>
      <ListGroup as="ul">
        {Object.keys(allRoles)
          .sort()
          .map((role) => (
            <RoleItem
              role={role}
              key={role}
              removeRole={removeRole}
              updateRoleName={updateRoleName}
            />
          ))}
      </ListGroup>
      <div
        style={{
          display: "flex",
          marginTop: 20,
        }}
      >
        <Form.Control
          type="text"
          placeholder="Add new role..."
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <Button style={{ marginLeft: 20 }} onClick={addRole}>
          Add
        </Button>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
        }}
      >
        <Button onClick={saveRoles}>Save</Button>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          style={{
            width: "fit-content",
            marginLeft: 25,
          }}
        >
          <Toast.Header>
            <strong className="mr-auto">Roles Saved!</strong>
          </Toast.Header>
        </Toast>
      </div>
    </AdminLayout>
  );
};

export default compose(withAuthorization(isAdmin), withFirebase)(ManageRoles);

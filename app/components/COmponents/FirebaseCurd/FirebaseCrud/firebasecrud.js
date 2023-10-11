"use client";
import FirebaseConfig from "../FirebaseConfig/firebaseconfig";
import { ref, set, get, update, remove, child } from "firebase/database";
import { useState } from "react";
import "./firebaseCrud.css";
// import { data } from "autoprefixer"
// import { error } from "console"

const database = FirebaseConfig();

function FirebaseCrud() {
  // create some state variables
  let [username, setUsername] = useState("");
  let [fullname, setfullname] = useState("");
  let [phone, setPhone] = useState("");
  let [dob, setDob] = useState("");

  let isNullOrWhiteSpaces = (value) => {
    value = value.toString();
    return value == null || value.replaceAll(" ", "").length < 1;
  };

  let InsertData = () => {
    const dbref = ref(database);
    if (
      isNullOrWhiteSpaces(username) ||
      isNullOrWhiteSpaces(fullname) ||
      isNullOrWhiteSpaces(phone) ||
      isNullOrWhiteSpaces(dob)
    ) {
      alert("fill all the fields and return");
      return;
    }

    get(child(dbref, "Customer/" + username))
      .then((snapshot) => {
        if (snapshot.exists()) {
          alert("the user already exist, try a different name");
        } else {
          set(ref(database, "Customer/ + username"), {
            fullName: fullname,
            phonenumber: phone,
            dateofbirth: dob,
          })
            .then(() => {
              alert("data added successfully");
            })
            .catch((error) => {
              console.log(error);
              alert("there was an error adding the customer");
            });
        }
      })
      .catch((error) => {
        console.log(error);
        alert("error data retrieval was unsuccessful");
      });
  };

  let UpdateData = () => {
    const dbref = ref(database);
    if (isNullOrWhiteSpaces(username)) {
      alert(
        "username is empty, try to select a user first, with the select button"
      );
      return;
    }

    get(child(dbref, "Customer/" + username))
      .then((snapshot) => {
        if (snapshot.exists()) {
          update(ref(database, "Customer/ + username"), {
            fullName: fullname,
            phonenumber: phone,
            dateofbirth: dob,
          })
            .then(() => {
              alert("data updated successfully");
            })
            .catch((error) => {
              console.log(error);
              alert("there was an error updating the customer");
            });
        } else {
          alert("error: the user does not exist");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("error data retrieval was unsuccessful");
      });
  };

  let DeleteData = () => {
    const dbref = ref(database);
    if (isNullOrWhiteSpaces(username)) {
      alert("username is required to delete a user");
      return;
    }

    get(child(dbref, "Customer/" + username))
      .then((snapshot) => {
        if (snapshot.exists()) {
          update(ref(database, "Customer/ + username"), {
            fullName: fullname,
            phonenumber: phone,
            dateofbirth: dob,
          });
        } else {
          alert("error: the user does not exist");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("error data retrieval was unsuccessful");
      });
  };

  let SelectData = () => {
    const dbref = ref(database);

    if (isNullOrWhiteSpaces(username)) {
      alert("user name is required to retrive the data");
      return;
    }

    get(child(dbref, "Customer/" + username))
      .then((snapshot) => {
        if (snapshot.exists()) {
          remove(ref(database, "Customer/" + username))
            .then(() => {
              alert("data deleted successfully");
            })
            .catch((error) => {
              console.log(error);
              alert("there was an error deleting the customer");
            });
        } else {
          alert("error: the user does not exist");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("error data retrieval was unsuccessful");
      });
  };

  return (
    <>
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <br />

      <label>Full Name</label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setfullname(e.target.value);
        }}
      ></input>
      <br />

      <label>Phone Number</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      ></input>
      <br />

      <label>Date Of Birth</label>
      <input
        type="text"
        value={dob}
        onChange={(e) => {
          setDob(e.target.value);
        }}
      ></input>
      <br />

      <button onClick={InsertData}>Insert Data</button>
      <button onClick={UpdateData}>Update Data</button>
      <button onClick={DeleteData}>Delete Data</button>
      <button onClick={SelectData}>Select Data</button>
    </>
  );
}

export default FirebaseCrud;

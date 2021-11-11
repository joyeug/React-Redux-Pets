import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { list } from "../../actions/persons/list";
import { listPets } from "../../actions/pets/list";

const Persons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(list());
    dispatch(listPets());
  }, [dispatch]);

  const person = useSelector((store) => store.person);
  const pet = useSelector((store) => store.pet);

  return (
    <>
      <div>
        Persons:
        <ul>
          {!person.loading && person.data.length > 0 ? (
            person.data.map((d, index) => (
              <li key={index}>{`${d.nombres} ${d.apellidos}`}</li>
            ))
          ) : (
            <h4>Loading ..!</h4>
          )}
        </ul>
      </div>
      <div>
        Mascotas:
        <ul>
          {!pet.loading && pet.data.length > 0 ? (
            pet.data.map((d, index) => <li key={index}>{`${d}`}</li>)
          ) : (
            <h4>Loading ..!</h4>
          )}
        </ul>
      </div>
    </>
  );
};

export default Persons;

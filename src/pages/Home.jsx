import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState();
  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(tutorials);
  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials);

  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const editTutorial = async (id, title, desc) => {
    const filtered = tutorials
      .filter((tutor) => tutor.id === id)
      .map(() => ({ title: title, description: desc }));
    try {
      await axios.put(`${url}/${id}`, filtered[0]);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList
        tutorials={tutorials}
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}
      />
    </>
  );
};

export default Home;

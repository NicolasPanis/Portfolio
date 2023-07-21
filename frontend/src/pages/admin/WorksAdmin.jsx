import React, { useState, useEffect, useRef } from "react";
import connexion from "../../services/connexion";
import "./WorksAdmin.scss";

function WorksAdmin() {
  const workModel = {
    id: null,
    title: "",
    date: "",
    description: "",
    image_url1: "",
    image_url2: "",
    image_url3: "",
    path: "",
    ref: "",
    tags_id: "",
  };
  const [work, setWork] = useState(workModel);
  const [tags, setTags] = useState([]);
  const [works, setWorks] = useState([]);
  const image = useRef();
  const image2 = useRef();
  const image3 = useRef();

  const refreshWork = (id) => {
    if (id === "") {
      setWork(workModel);
    } else {
      const find = works.find((w) => w.id === +id);
      setWork(find);
    }
  };

  const getWorks = async () => {
    const w = await connexion.get("/works");
    try {
      if (w) {
        setWorks(w);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleWork = (name, value) => {
    setWork({ ...work, [name]: value });
  };

  const postWork = async (form) => {
    try {
      const w = await connexion.postFile("/works", form);
      setWork(w);
      setWork(workModel);
      getWorks();
    } catch (error) {
      console.error(error);
    }
  };

  const updateWork = async (form) => {
    try {
      await connexion.putFile(`/works/${work.id}`, form);
      getWorks();
    } catch (error) {
      console.error(error);
    }
  };

  const manageWork = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.current.files[0]);
    formData.append("image2", image2.current.files[0]);
    formData.append("image3", image3.current.files[0]);
    formData.append("json", JSON.stringify(work));
    if (work.id) {
      updateWork(formData);
    } else {
      postWork(formData);
    }
  };

  const deleteWork = async (e) => {
    e.preventDefault();
    try {
      await connexion.delete(`/works/${work.id}`);
      setWork(workModel);
      getWorks();
    } catch (error) {
      console.error(error);
    }
  };

  const getTags = async () => {
    try {
      const tag = await connexion.get("/tags");
      setTags(tag);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTags();
    getWorks();
  }, []);

  return (
    <div className="main_admin">
      <h1 className="title_admin">Page Admin</h1>
      <h2 className="title_admin">Gestion des Projets</h2>
      <div className="projects_admin">
        <form className="" onSubmit={(event) => postWork(event)}>
          <div className="">
            <div>
              <label className="label_admin">
                Oeuvre à modifier ou supprimer :
                <select
                  onChange={(e) => refreshWork(e.target.value)}
                  value={work.id}
                  className="select_admin"
                >
                  <option value="">
                    Sélectionnez le nom de l'oeuvre à modifier ou supprimer
                  </option>
                  {works.map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.title}
                    </option>
                  ))}
                </select>
              </label>
              <h3>Enregistrement d'une nouvelle oeuvre</h3>
              <label className="label_admin">
                Référence
                <input
                  className="input_admin"
                  type="text"
                  required
                  placeholder="Tapez ici la référence "
                  minLength={5}
                  maxLength={12}
                  name="ref"
                  onChange={(event) =>
                    handleWork(event.target.name, event.target.value)
                  }
                  value={work.ref}
                />
              </label>
            </div>
            <div className="">
              <label className="label_admin">
                Titre du projet
                <input
                  className=""
                  type="text"
                  required
                  placeholder=" Titre du projet"
                  minLength={5}
                  maxLength={255}
                  name="title"
                  onChange={(event) =>
                    handleWork(event.target.name, event.target.value)
                  }
                  value={work.title}
                />
              </label>
            </div>
            <div>
              <label className="label_admin">
                Date
                <input
                  className=""
                  type="text"
                  required
                  placeholder="Date"
                  minLength={4}
                  maxLength={50}
                  name="date"
                  onChange={(event) =>
                    handleWork(event.target.name, event.target.value)
                  }
                  value={work.date}
                />
              </label>
            </div>
            <div>
              <label className="label_admin">
                Description
                <textarea
                  className=""
                  required
                  placeholder="Description"
                  minLength={50}
                  name="description"
                  onChange={(event) =>
                    handleWork(event.target.name, event.target.value)
                  }
                  value={work.description}
                />
              </label>
            </div>
            <div>
              <label className="label_admin">
                Chemin
                <input
                  className=""
                  required
                  placeholder="Chemin"
                  minLength={50}
                  name="path"
                  onChange={(event) =>
                    handleWork(event.target.name, event.target.value)
                  }
                  value={work.path}
                />
              </label>
            </div>
          </div>
          <div className="">
            <div>
              <label className="label_admin">
                Tags
                <select
                  className=""
                  name="tags_id"
                  type="text"
                  onChange={(event) =>
                    handleWork(event.target.name, +event.target.value)
                  }
                  value={work.tags_id}
                >
                  <option value="">Choisissez le tag</option>
                  {tags.map((tag) => (
                    <option key={tag.id} value={tag.id}>
                      {tag.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label className="label_admin">
                Image1
                <input
                  type="file"
                  className=""
                  required
                  accept="jpg, png, jpeg"
                  name="image_src"
                  ref={image}
                />
              </label>
              {work.image_url1 && (
                <img
                  className="img_admin"
                  src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                    work.image_url1
                  }`}
                  alt=""
                />
              )}
              <label className="label_admin">
                Image2
                <input
                  type="file"
                  className=""
                  required
                  accept="jpg, png, jpeg"
                  name="image_src"
                  ref={image2}
                />
              </label>
              {work.image_url2 && (
                <img
                  className="img_admin"
                  src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                    work.image_url2
                  }`}
                  alt=""
                />
              )}
              <label className="label_admin">
                Image3
                <input
                  type="file"
                  className=""
                  required
                  accept="jpg, png, jpeg"
                  name="image_src"
                  ref={image3}
                />
              </label>
              {work.image_url3 && (
                <img
                  className="img_admin"
                  src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                    work.image_url3
                  }`}
                  alt=""
                />
              )}

              <div className="">
                <button
                  type="submit"
                  className="button_admin"
                  onClick={(e) => manageWork(e)}
                >
                  Ajouter
                </button>
                <button
                  type="button"
                  className="button_admin"
                  onClick={(e) => manageWork(e)}
                >
                  Mettre à jour
                </button>
                <button
                  type="button"
                  className="button_admin"
                  onClick={(e) => deleteWork(e)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WorksAdmin;

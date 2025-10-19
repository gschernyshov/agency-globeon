import React, { useState, useEffect, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import "../styles/style.css";
import "../styles/ApplicationsSection.css";

const ApplicationsSection = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const {request, loading, error, clearError} = useHttp();

  const urlParams = new URLSearchParams(window.location.search);
  const password = urlParams.get("password");

  useEffect(() => {
    if (error) {
      navigate("/");
    }
    clearError();
  }, [navigate, error, clearError]);

  const applicationsHandler = useCallback( async () => {
    try {
        const data = await request(`/api/feedback/applications?password=${password}`);
        setUsers(data.users.reverse());
    } catch (e) {}
  }, [request, password]);

  useEffect(() => {
    applicationsHandler();
  }, [applicationsHandler]);

  if (loading) {
    return (
      <section className="applications">
        <h2 className="applications-title gold-gradient">Загрузка...</h2>
      </section>
    );
  }

  return (
    <section className="applications">
      <h2 className="applications-title">
        <NavLink to="/" className="gold-gradient">Главная</NavLink> / <span className="gold-gradient">Заявки</span>
      </h2>
      {users && users.map((user, index) => {
        return (
          <div key={user._id} className="applications-user">
            <h3>Пользователь c id: {user._id}</h3>
            <p>Имя: {user.name}</p>
            <p>Номер телефона: {user.telephone}</p>
            <p>Дата: {new Date(user.date).toLocaleDateString()}</p>
          </div>
        );
       })
      }
    </section>
  );
}

export default ApplicationsSection;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CloseEye, OpenEye } from "../svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../error-msg";
import {loginUser} from "@/api/auth.ts";

type FormData = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().required().label("Username"),
  password: yup.string().required().min(6).label("Password"),
});

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoginError(null);
    setIsLoading(true);

    try {
      const token = await loginUser(data.username, data.password);
      localStorage.setItem("token", token);
      navigate("/admin");
    } catch (err: any) {
      setLoginError(err.message || "Une erreur est survenue.");
    } finally {
      setIsLoading(false);
      reset();
    }
  });

  return (
      <form onSubmit={onSubmit}>
        <div className="tp-login-input-wrapper">

          <div className="tp-login-input-box">
            <div className="tp-login-input-title">
              <label htmlFor="username">Nom d'utilisateur</label>
            </div>
            <div className="tp-login-input">
              <input
                  id="username"
                  {...register("username")}
                  type="text"
                  placeholder="Votre nom d'utilisateur"
              />
            </div>
            <ErrorMsg msg={errors.username?.message as string} />
          </div>

          <div className="tp-login-input-box">
            <div className="tp-login-input-title">
              <label htmlFor="password">Mot de passe</label>
            </div>
            <div className="tp-login-input p-relative">
              <input
                  id="password"
                  type={showPass ? "text" : "password"}
                  placeholder="* * * * * * * * *"
                  {...register("password")}
              />
              <div
                  className="tp-login-input-eye"
                  id="password-show-toggle"
                  onClick={() => setShowPass(!showPass)}
              >
                {showPass ? (
                    <span id="open-eye" className="open-eye">
                  <OpenEye />
                </span>
                ) : (
                    <span id="close-eye" className="open-close">
                  <CloseEye />
                </span>
                )}
              </div>
            </div>
            <ErrorMsg msg={errors.password?.message as string} />
          </div>

        </div>

        {loginError && (
            <div className="tp-login-input-box">
              <ErrorMsg msg={loginError} />
            </div>
        )}

        <div className="tp-login-bottom">
          <button type="submit" className="tp-login-btn w-100" disabled={isLoading}>
            {isLoading ? "Connexion..." : "Se connecter"}
          </button>
        </div>
      </form>
  );
}
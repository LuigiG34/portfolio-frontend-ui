'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';
import { createContact } from '../../api/contact';

type FormData = {
    email: string;
    name: string;
    message: string;
};

const schema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    name: yup.string().required().max(255).label("Nom"),
    message: yup.string().required().label("Message"),
});

type IProps = { btnCls?: string; }

export default function ContactForm({ btnCls = '' }: IProps) {
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = handleSubmit(async (data: FormData) => {
        setSubmitError(null);
        setSubmitSuccess(false);
        setIsLoading(true);
        try {
            await createContact(data.name, data.email, data.message);
            setSubmitSuccess(true);
            reset();
        } catch (err: any) {
            setSubmitError(err.message || "Une erreur est survenue.");
        } finally {
            setIsLoading(false);
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <div className="cn-contactform-input mb-25">
                <label>Email</label>
                <input id='email' {...register("email")} type="email" placeholder="exemple@email.com" />
                <ErrorMsg msg={errors.email?.message!} />
            </div>
            <div className="cn-contactform-input mb-25">
                <label>Nom</label>
                <input id='name' {...register("name")} type="text" placeholder="Votre nom" />
                <ErrorMsg msg={errors.name?.message!} />
            </div>
            <div className="cn-contactform-input mb-25">
                <label>Message</label>
                <textarea id='message' {...register("message")} placeholder="Votre message"></textarea>
                <ErrorMsg msg={errors.message?.message!} />
            </div>

            {submitError && <ErrorMsg msg={submitError} />}
            {submitSuccess && <p style={{ color: "green" }}>Message envoyé avec succès !</p>}

            <div className="cn-contactform-btn">
                <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit" disabled={isLoading}>
                    {isLoading ? "Envoi..." : "Envoyer"}
                </button>
            </div>
        </form>
    );
}
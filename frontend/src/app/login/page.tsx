"use client"; // クライアントコンポーネント指定（必須）

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation"; // ✅ App Router での正しい import

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/auth/login", {
                email,
                password,
            });

            const token = res.data.access_token;
            Cookies.set("token", token); // Cookie に保存

            router.push("/");
        } catch (error) {
            console.error("Login failed:", error);
            alert("ログイン失敗");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>ログイン</h2>
            <input
                type='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type='submit'>ログイン</button>
        </form>
    );
}

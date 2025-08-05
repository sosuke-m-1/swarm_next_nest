import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        // トークンがない場合はログインへリダイレクト
        redirect("/login");
    }

    // トークンを使って NestJS API にユーザー情報取得リクエスト
    const res = await fetch("http://localhost:4000/protected", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        // Next.jsのキャッシュを無効にしてリアルタイムデータ取得
        cache: "no-store",
    });

    if (!res.ok) {
        redirect("/login");
    }

    const user = await res.json();

    return (
        <div>
            <h1>ダッシュボード</h1>
            <p>こんにちは、{user.username}</p>
        </div>
    );
}

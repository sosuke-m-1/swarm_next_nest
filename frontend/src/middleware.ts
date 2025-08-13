import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

// JWT 検証用のシークレット（Edge でも使えるように文字列）
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ログイン不要なパスをスキップ
    if (pathname === "/login" || pathname.startsWith("/public")) {
        return NextResponse.next();
    }

    const token = request.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
        // JWT を検証（期限切れ・改ざんチェック含む）
        await jwtVerify(token, JWT_SECRET);
        return NextResponse.next();
    } catch (err) {
        console.warn("Invalid JWT:", err);
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

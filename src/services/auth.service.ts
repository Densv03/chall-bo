export class AuthService {
    public static isAuth(): boolean {
        return !!localStorage.getItem('auth')
    }

    public static logIn(): void {
        localStorage.setItem("auth", 'true');
    }

    public static logout(): void {
        localStorage.removeItem("auth");
    }
}
import logo from "./logo.svg";
import { useAuth } from "@workos-inc/authkit-react";
import "./App.css";

function App() {
        const { user, getAccessToken, isLoading, signIn, signUp, signOut } =
                useAuth();
        if (isLoading) {
                return <span>loading...</span>;
        }

        const performMutation = async () => {
                const accessToken = await getAccessToken();
                console.log("api request with accessToken", accessToken);
        };

        console.log({ user });
        if (user) {
                return (
                        <div>
                                Hello, {user.email}
                                <p>
                                        <button
                                                onClick={() => {
                                                        performMutation();
                                                }}
                                        >
                                                Make API Request
                                        </button>
                                </p>
                                <p>
                                        <button onClick={() => signOut()}>
                                                Sign out
                                        </button>
                                </p>
                        </div>
                );
        }

        return (
                <>
                        <button onClick={() => signIn()}>Sign in</button>{" "}
                        <button onClick={() => signUp()}>Sign up</button>
                </>
        );
}

export default App;

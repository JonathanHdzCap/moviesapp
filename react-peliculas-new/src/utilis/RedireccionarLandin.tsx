import { Redirect } from "react-router";

export default function RedireccionarLanding() {
    return (
        <Redirect to={{ pathname: '/' }} />
    )
}
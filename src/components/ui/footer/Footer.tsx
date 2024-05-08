import Link from "next/link";

export const Footer = () => {
    return (
        <div className="flex w-full justify-center text-xs mb-10">
            <Link href="/institution">
                <span className="text-center font-semibold">Pontificia © {new Date().getFullYear()}</span>
                <span> Todos los derechos reservados</span>
            </Link>
            <Link
                href="/"
                className="mx-2"
            >
                Privacidad & Legal
            </Link>
        </div>
    );
};

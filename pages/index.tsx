import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function HomePage() {
  // El Head es un componente especial de Next que le dice al framework que la información que contiene su etiqueta es una información que debe estar en la cabecera de la página.
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}

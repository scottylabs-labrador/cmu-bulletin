import { redirect } from "next/navigation";
import NavBar from "~/components/NavBar";

export default function HomePage() {
  redirect("/login");
}

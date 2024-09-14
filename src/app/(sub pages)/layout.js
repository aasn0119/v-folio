import HomeButton from "@/components/HomeButton";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-8 xs:px-16 lg:px-32">
      <HomeButton />
      {children}
    </main>
  );
}

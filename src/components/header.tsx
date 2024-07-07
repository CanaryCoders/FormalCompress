import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-20 w-full  pt-safe">
      <header className="border-b px-safe bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-20 max-w-screen-md items-center justify-between px-6">
          <a className="flex space-x-2 items-center" href="/">
            <h1 className="font-bold">Formal Compress</h1>
          </a>
          <nav className="flex items-center space-x-4">
            <ModeToggle />
          </nav>
        </div>
      </header>
    </div>
  );
}

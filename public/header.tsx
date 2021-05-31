import { useLocation } from "preact-iso";

export default function Header(): JSX.Element {
  const { url } = useLocation();
  return (
    <header class="flex bg-gray-300">
      <nav class="flex flex-grow">
        <a class="p-3 text-purple-500 hover:bg-gray-100" href="/">
          Home
        </a>
        <a class="p-3 text-purple-500 hover:bg-gray-100" href="/about">
          About
        </a>
        <a class="p-3 text-purple-500 hover:bg-gray-100" href="/error">
          Error
        </a>
      </nav>
      <label>
        URL:
        <input readonly value={url} ref={(c) => c && (c.size = c.value.length)} />
      </label>
    </header>
  );
}

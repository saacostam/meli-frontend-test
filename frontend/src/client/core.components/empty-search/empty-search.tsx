export function EmptySearch() {
  return (
    <div className="flex flex-wrap">
      <div>
        <h2>No hay publicaciones que coincidan con tu búsqueda.</h2>
        <ul className="list-disc ml-6">
          <li>Revisa la ortografía de la palabra.</li>
          <li>Utiliza palabras más genéricas o menos palabras.</li>
        </ul>
      </div>
    </div>
  );
}

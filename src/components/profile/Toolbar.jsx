import Input from "./Input";

const Toolbar = ({ setFilters }) => {
  const onChange = (id, value) =>
    setFilters((prev) =>
      prev.filter(({ id }) => id !== "name").concat({ id, value }),
    );

  return (
    <div className="p-4">
      <Input icon="search" onChange={(e) => onChange("name", e.target.value)} />
    </div>
  );
};

export default Toolbar;

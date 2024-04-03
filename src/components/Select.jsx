export const Select = ({ name, data, setFunc }) => {
  return (
    <select
      name={name}
      id={name == "Gender" ? "gender" : name == "Status" ? "status" : "specie"}
      defaultValue={"placeholder"}
      onChange={(e) => setFunc(e.target.value)}
    >
      <option value="placeholder" disabled>
        {name}
      </option>
      {data?.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

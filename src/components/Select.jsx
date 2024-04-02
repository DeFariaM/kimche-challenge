export const Select = ({ name, data, setFunc }) => {
  return (
    <select
      name={name}
      id={name.toLowerCase()}
      defaultValue={"placeholder"}
      onChange={(e) => setFunc(e.target.value)}>
      <option value="placeholder" disabled>
        {name}
      </option>
      {data?.map((item, index) => (
        <option key={index} value={name}>
          {item}
        </option>
      ))}
    </select>
  );
};

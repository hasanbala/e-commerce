export const Button = ({ data, className, type }) => {
  return (
    <button className={className} type={type}>
      {data}
    </button>
  );
};

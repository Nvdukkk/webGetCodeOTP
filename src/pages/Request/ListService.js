import { useEffect, useState } from "react";
import Select from "react-select";

export default ({ setSelectData }) => {
  const [data, setData] = useState([]);

  const mappingData = (data) => {
    return data.map(({ id, name, price}) => {
      return {
        value: { id, name, price },
        label: `${name} - ${price}đ `,
      };
    });
  };

  const fetchData = async () => {
    const res = await fetch(
      `https://api.tempsms.co/service?api_key=4AF705FB6D3609C6045F46AD6B2AB8DA`
    );
    const { data: resData } = await res.json();
    setData(resData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Select
      className="react-select-container"
      isClearable
      placeholder="Tìm ứng dụng"
      onChange={(value) => setSelectData({ ...value})}
      options={mappingData(data)}
    />
  );
};

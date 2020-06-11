import React from "react";
import { useFormikContext } from "formik";

import DatePicker from "../DatePicker";
import ErrorMessage from "./ErrorMessage";

var dateFormat = require('dateformat');

function FormDatePicker({
  items,
  name,
  placeholder,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  console.log(values[name])
  return (
    <>
      <DatePicker
        items={items}
        onSelectItem={(item) => {setFieldValue(name, dateFormat(item, "yyyy-mm-dd"))}}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormDatePicker;
